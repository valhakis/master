#include <X11/Xlib.h>
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
//#include <X11/X.h>
//#include <GL/gl.h>
#include <GL/glew.h>
#include <GL/glx.h>
//#include <GL/glu.h>

static const GLchar* vertexShaderSource = "layout (location = 0) in vec3 position;\n"
"void main()\n"
"{\n"
"gl_Position = vec4(position.x, position.y, position.z, 1.0);\n"
"}\0";
static const GLchar* fragmentShaderSource = "out vec4 color;\n"
"void main()\n"
"{\n"
"color = vec4(1.0f, 0.5f, 0.2f, 1.0f);\n"
"}\n\0";

static int running = true;

static Display *d;
static Window w;
static Window root;
static XEvent e;
static int s;
static XVisualInfo *vi;
static XSetWindowAttributes swa;
static XWindowAttributes gwa;
static GLXContext glc;

static GLint a[] = {
  GLX_RGBA,
  GLX_DEPTH_SIZE,
  24, 
  GLX_DOUBLEBUFFER,
  None
};

static Colormap cmap;

int XAppStart()
{
  d = XOpenDisplay(NULL);

  if (d == NULL) {
    printf("Unable to open display.\n");
    return -1;
  }

  root = DefaultRootWindow(d);

  vi = glXChooseVisual(d, 0, a);

  if (vi == NULL) {
    printf("No appropriate visual found.\n");
    return -1;
  }

  cmap = XCreateColormap(d, root, vi->visual, AllocNone);

  swa.colormap = cmap;
  swa.event_mask = ExposureMask | KeyPressMask;

  s = DefaultScreen(d);
  // w = XCreateSimpleWindow(d, RootWindow(d, s), 10, 10, 800, 600, 1, BlackPixel(d, s), WhitePixel(d, s));
  w = XCreateWindow(d, root, 0, 0, 800, 600, 0, vi->depth, InputOutput, vi->visual, CWColormap | CWEventMask, &swa);
  XSelectInput(d, w, ExposureMask|KeyPressMask|ButtonPressMask|StructureNotifyMask|KeyReleaseMask|KeymapStateMask);
  XMapWindow(d, w);

  XStoreName(d, w, "APPLICATION");

  glc = glXCreateContext(d, vi, NULL, GL_TRUE);
  glXMakeCurrent(d, w, glc);

  glewExperimental = GL_TRUE;
  glewInit();

  GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);
  glShaderSource(vertexShader, 1, &vertexShaderSource, NULL);
  glCompileShader(vertexShader);
  // Check for compile time errors
  GLint success;
  GLchar infoLog[512];
  glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);
  if (!success)
  {
    glGetShaderInfoLog(vertexShader, 512, NULL, infoLog);
    printf("SHADER:VERTEX:COMPILATION: %d\n", infoLog);
  }
  // Fragment shader
  GLuint fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fragmentShader, 1, &fragmentShaderSource, NULL);
  glCompileShader(fragmentShader);
  // Check for compile time errors
  glGetShaderiv(fragmentShader, GL_COMPILE_STATUS, &success);
  if (!success)
  {
    glGetShaderInfoLog(fragmentShader, 512, NULL, infoLog);
    printf("SHADER:FRAGMENT:COMPILATION: %d\n", infoLog);
  }
  // Link shaders
  GLuint shaderProgram = glCreateProgram();
  glAttachShader(shaderProgram, vertexShader);
  glAttachShader(shaderProgram, fragmentShader);
  glLinkProgram(shaderProgram);
  // Check for linking errors
  glGetProgramiv(shaderProgram, GL_LINK_STATUS, &success);
  if (!success) {
    glGetProgramInfoLog(shaderProgram, 512, NULL, infoLog);
    printf("SHADER:PROGRAM:LINKING: %d\n", infoLog);
  }
  glDeleteShader(vertexShader);
  glDeleteShader(fragmentShader);


  // Set up vertex data (and buffer(s)) and attribute pointers
  GLfloat vertices[] = {
    -0.5f, -0.5f, 0.0f, // Left  
    0.5f, -0.5f, 0.0f, // Right 
    0.0f,  0.5f, 0.0f  // Top   
  };
  GLuint VBO, VAO;
  glGenVertexArrays(1, &VAO);
  glGenBuffers(1, &VBO);
  // Bind the Vertex Array Object first, then bind and set vertex buffer(s) and attribute pointer(s).
  glBindVertexArray(VAO);

  glBindBuffer(GL_ARRAY_BUFFER, VBO);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(GLfloat), (GLvoid*)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0); // Note that this is allowed, the call to glVertexAttribPointer registered VBO as the currently bound vertex buffer object so afterwards we can safely unbind

  glBindVertexArray(0); // Unbind VAO (it's always a good thing to unbind any buffer/array to prevent strange bugs)


  glEnable(GL_DEPTH_TEST);

  while (running) {
    XNextEvent(d, &e);
    if (e.type == KeymapNotify) {
      //XRefreshKeyboardMapping(&e.xmapping);
    }
    if (e.type == Expose) {
      XFillRectangle(d, w, DefaultGC(d, s), 20, 20, 10, 10);
      XDrawString(d, w, DefaultGC(d, s), 10, 50, "Application", strlen("Application"));

      XGetWindowAttributes(d, w, &gwa);
      glViewport(0, 0, gwa.width, gwa.height);
      // render here

      glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
      glClear(GL_COLOR_BUFFER_BIT);

      glUseProgram(shaderProgram);
      glBindVertexArray(VAO);
      glDrawArrays(GL_TRIANGLES, 0, 3);

      glXSwapBuffers(d, w);
    }
    if (e.type == KeyPress) {
      // break;
    }
    if (e.type == KeyRelease) {
      const int escape = 9;
      if (e.xkey.keycode == escape) {
        glXMakeCurrent(d, None, NULL);
        glXDestroyContext(d, glc);
        XDestroyWindow(d, w);
        XCloseDisplay(d);
        break;
      }
      // printf("%d\n", e.xkey.keycode);
      // console.log(e.xkey);
    }
  }

  XCloseDisplay(d);
  return 0;
}
