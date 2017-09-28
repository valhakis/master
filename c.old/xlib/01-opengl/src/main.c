#include <stdio.h>
#include <stdarg.h>
#include <stdlib.h>
#include <stdbool.h>
#include <X11/X.h>
#include <X11/Xlib.h>
#include <GL/glew.h>
#include <GL/gl.h>
#include <GL/glx.h>
#include <GL/glu.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

void Err(const char *format, ...);
void Log(const char *format, ...);

Display *display;
Window root, window;
int attribs[] = {GLX_RGBA, GLX_DEPTH_SIZE, 24, GLX_DOUBLEBUFFER, None};
XVisualInfo *visual;
Colormap cmap;
XSetWindowAttributes swa;
GLXContext ctx;
XWindowAttributes gwa;
XEvent xevent;
bool open = true;

static struct {
  GLuint vertexBuffer, elementBuffer;
  GLuint textures[2];
  GLuint vertexShader, fragmentShader;
  GLuint program;
  struct {
    GLint position;
  } attributes;
} Gresources;


static GLuint makeProgram(GLuint vertexShader, GLuint fragmentShader)
{
  GLint program_ok;

  GLuint program = glCreateProgram();

  glAttachShader(program, vertexShader);
  glAttachShader(program, fragmentShader);
  glLinkProgram(program);

  glGetProgramiv(program, GL_LINK_STATUS, &program_ok);

  if (!program_ok)
  {
    Err("Failed to link shader program.\n");
  }

  return program;
}

static GLuint makeBuffer(GLenum target, const void *bufferData, GLsizei bufferSize)
{
  GLuint buffer;
  glGenBuffers(1, &buffer);
  glBindBuffer(target, buffer);
  glBufferData(target, bufferSize, bufferData, GL_STATIC_DRAW);
  return buffer;
}

static GLuint makeTexture(const char *filename)
{
  GLuint texture;
  int width, height;
  // void *pixels = read_tga(filename, &width, &height);
  //if (!pixels)
    //return 0;
}

static const float vertexBufferData[] = {
  -1.0f, -1.0f,
  +1.0f, -1.0f,
  -1.0f, +1.0f,
  +1.0f, +1.0f,
};

static const float elementBufferData[] = { 0, 1, 2, 3 };

char *file_contents(const char *filename, int *length)
{
  char *source = NULL;

  FILE *fp = NULL;

  if ((fp = fopen(filename, "r")) == NULL)
    Err("Unable to open file '%s'.\n", filename);

  if (fseek(fp, 0L, SEEK_END) != 0)
    Err("Error in file '%s'.\n", filename);

  long bufsize = ftell(fp);
  if (bufsize == -1)
    Err("Error in file '%s'.\n", filename);

  source = malloc(sizeof(char) * (bufsize + 1));
  *length = bufsize + 1;

  if (fseek(fp, 0L, SEEK_SET) != 0)
    Err("Error in file '%s'.\n", filename);

  size_t newLen = fread(source, sizeof(char), bufsize, fp);
  if (ferror(fp) != 0)
  {
    Err("Error in file '%s'.\n", filename);
  }

  source[newLen++] = '\0';

  fclose(fp);

  return source;
}

static GLuint makeShader(GLenum type, const char *filename)
{
  GLint length;
  char *source = file_contents(filename, &length);
  GLuint shader;
  GLint shader_ok;

  if (!source)
    Err("No 'source' when creating a shader.\n");
  glShaderSource(shader, 1, (const GLchar **)&source, &length);
  free(source);
  glCompileShader(shader);

  glGetShaderiv(shader, GL_COMPILE_STATUS, &shader_ok);
  if (!shader_ok)
  {
    Err("Failed to compile shader: %s.\n", filename);
  }

  return shader;
}

static int makeResources()
{
  Gresources.vertexBuffer = makeBuffer(GL_ARRAY_BUFFER, vertexBufferData, sizeof(vertexBufferData));
  Gresources.elementBuffer = makeBuffer(GL_ELEMENT_ARRAY_BUFFER, elementBufferData, sizeof(elementBufferData));

  Gresources.vertexShader = makeShader(GL_VERTEX_SHADER, "data/shaders/default.vs");
  Gresources.fragmentShader = makeShader(GL_FRAGMENT_SHADER, "data/shaders/default.fs");
  Gresources.program = makeProgram(Gresources.vertexShader, Gresources.fragmentShader);

  Gresources.attributes.position = glGetAttribLocation(Gresources.program, "position");

  /* make textures and shaders */
}

void DrawQuad()
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  glOrtho(-1.0f, 1.0f, -1.0f, 1.0f, 1.0f, 20.0f);

  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();
  gluLookAt(0.0f, 0.0f, 10.0f, 0.0f, 0.0f, 0.0f, 0.0f, 1.0f, 0.0f);

  glBegin(GL_QUADS);
  glColor3f(1.0f, 0.0f, 0.0f); glVertex3f(-0.75f, -0.75f, 0.0f);
  glColor3f(0.0f, 1.0f, 0.0f); glVertex3f(+0.75f, -0.75f, 0.0f);
  glColor3f(1.0f, 0.0f, 1.0f); glVertex3f(+0.75f, +0.75f, 0.0f);
  glColor3f(1.0f, 1.0f, 0.0f); glVertex3f(-0.75f, +0.75f, 0.0f);
  glEnd();
}

void Err(const char *format, ...)
{
  va_list args;
  fprintf(stderr, KRED);
  fprintf(stderr, "ERROR: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
  exit(EXIT_FAILURE);
}

void Log(const char *format, ...)
{
  va_list args;
  fprintf(stdout, KBLU);
  fprintf(stdout, "LOG: ");
  fprintf(stdout, KNRM);
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
}

int main(int argc, char *argv[]) 
{
  /* open display */
  display = XOpenDisplay(NULL);
  if (display == NULL) 
    Err("Cannot connect to X server.\n");

  /* create root window */
  root = DefaultRootWindow(display);

  /* create visual */
  visual = glXChooseVisual(display, 0, attribs);

  if (visual == NULL)
    Err("No appropriate visual found.\n");
  else 
    printf("Visual %p selectd.\n", (void*)visual->visualid);

  /* create colormap */
  cmap = XCreateColormap(display, root, visual->visual, AllocNone);

  /* fill swa 'set window attribs' structure */
  swa.colormap = cmap;
  swa.event_mask = ExposureMask | KeyPressMask;

  /* create window */
  window = XCreateWindow(display, root, 0, 0, 800, 600, 0, visual->depth, InputOutput, visual->visual, CWColormap|CWEventMask, &swa);

  /* map the current window */
  XMapWindow(display, window);

  /* set the window title */
  XStoreName(display, window, "Awesome Application");

  /* setup opengl context */
  ctx = glXCreateContext(display, visual, NULL, true);

  /* set current context */
  glXMakeCurrent(display, window, ctx);

  /* initialize glew */
  if (glewInit() != GLEW_OK)
    Err("Failed to initialize glew.\n");

  /* enable depth test */
  glEnable(GL_DEPTH_TEST);

  int minor, major;
  glGetIntegerv(GL_MINOR_VERSION, &minor);
  glGetIntegerv(GL_MAJOR_VERSION, &major);
  Log("GL Version: [%s] [%d:%d].\n", glGetString(GL_VERSION), major, minor);
  Log("Vendor: %s.\n", glGetString(GL_VENDOR));
  Log("Renderer: %s.\n", glGetString(GL_RENDERER));

  makeShader(GL_VERTEX_SHADER, "data/shaders/default.vs");

  while (open)
  {
    /* get next event */
    XNextEvent(display, &xevent);

    if (xevent.type == Expose)
    {
      /* get window attributes */
      XGetWindowAttributes(display, window, &gwa);

      /* set viewport */
      glViewport(0, 0, gwa.width, gwa.height);

      /* run our drawing function */
      DrawQuad();

      glUseProgram(Gresources.program);
      glBindBuffer(GL_ARRAY_BUFFER, Gresources.vertexBuffer);
      glVertexAttribPointer(Gresources.attributes.position, 2, GL_FLOAT, GL_FALSE, sizeof(GLfloat)*2, (void*)0);
      glEnableVertexAttribArray(Gresources.attributes.position);
      glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, Gresources.elementBuffer);
      glDrawElements(GL_TRIANGLE_STRIP, 4, GL_UNSIGNED_SHORT, (void*)0);
      glDisableVertexAttribArray(Gresources.attributes.position);

      /* swap the buffers */
      glXSwapBuffers(display, window);
    } else if (xevent.type == KeyPress)
    {
      glXMakeCurrent(display, None, NULL);
      glXDestroyContext(display, ctx);
      XDestroyWindow(display, window);
      XCloseDisplay(display);
      exit(EXIT_SUCCESS);
    }
  }

  return 0;
}

