#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <stdbool.h>
#include <windows.h>
#include <winuser.h>
#include <windowsx.h>
// #include <GL/gl.h>
// #include <GL/glu.h>
// #include <GL/glaux.h>
#include <glad/glad.h>

#include <local/line.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

/* GRID
 * [0][0]
 * |---------------------------------|
 * |                                 |
 * |                                 |
 * |                                 |
 * |                                 |
 * |                                 |
 * |                                 |
 * |                                 |
 * |---------------------------------|
 */


#pragma comment (lib, "opengl32.lib")

LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam);
GLuint createProgram(const char *vpath, const char *fpath);
GLuint createShader(GLenum type, const char *file);
GLchar *loadSource(const char *file);
int error(const char *format, ...);

struct {
  HDC hdc;
  GLuint program;
  GLuint vao;
  GLuint vbo;
} global;

void render()
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);

  //glPointSize(10.0f);
  //glColor3f(1.0f, 0.0f, 0.0f);
  //glBegin(GL_TRIANGLES);
  //glVertex3f(-0.5f, -0.5f, 0.0f);
  //glVertex3f(+0.5f, -0.5f, 0.0f);
  //glVertex3f(+0.0f, +0.5f, 0.0f);
  //glEnd();

  glUseProgram(global.program);
  glBindVertexArray(global.vao);

  // glBindBuffer(GL_ARRAY_BUFFER, global.vbo);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  glUseProgram(0);

  LineRender();

  SwapBuffers(global.hdc);
}

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPWSTR lpCmdLine, int nShowCmd )
{
  setbuf(stdout, NULL);

  MSG msg          = {0};
  WNDCLASS wc      = {0}; 
  wc.lpfnWndProc   = WndProc;
  wc.hInstance     = hInstance;
  wc.hbrBackground = (HBRUSH)(COLOR_BACKGROUND);
  wc.lpszClassName = L"oglversionchecksample";
  wc.style = CS_OWNDC;
  if( !RegisterClass(&wc) )
    return 1;
  CreateWindowW(wc.lpszClassName,L"openglversioncheck",WS_OVERLAPPEDWINDOW|WS_VISIBLE,0,0,640,480,0,0,hInstance,0);

  // createShader(GL_VERTEX_SHADER, "default.vs");
  global.program = createProgram("default.vs", "default.fs");

  LineInitialize(global.program);

  GLfloat vertices[3][3] = {
    -0.5f, -0.5f, 0.0f,
    +0.5f, -0.5f, 0.0f,
    +0.0f, +0.5f, 0.0f,
  };

  while( GetMessage( &msg, NULL, 0, 0 ) > 0 )
  {
    render();
    TranslateMessage(&msg);
    DispatchMessage(&msg);
  }

  return 0;
}

LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam)
{
  switch(message)
  {
    case WM_DESTROY:
      PostQuitMessage(0);
      break;
    case WM_MOUSEMOVE: 
      {
        int x = GET_X_LPARAM(lParam);
        int y = GET_Y_LPARAM(lParam);

        printf("x: %d, y: %d.\n", x, y);
      }
      break;
    case WM_CREATE:
      {
        PIXELFORMATDESCRIPTOR pfd =
        {
          sizeof(PIXELFORMATDESCRIPTOR),
          1,
          PFD_DRAW_TO_WINDOW | PFD_SUPPORT_OPENGL | PFD_DOUBLEBUFFER,    
          PFD_TYPE_RGBA,          
          32,                      
          0, 0, 0, 0, 0, 0,
          0,
          0,
          0,
          0, 0, 0, 0,
          24,                       
          8,                        
          0,                        
          PFD_MAIN_PLANE,
          0,
          0, 0, 0
        };

        HDC ourWindowHandleToDeviceContext = GetDC(hWnd);
        global.hdc = GetDC(hWnd);

        int  letWindowsChooseThisPixelFormat;
        letWindowsChooseThisPixelFormat = ChoosePixelFormat(ourWindowHandleToDeviceContext, &pfd); 
        SetPixelFormat(ourWindowHandleToDeviceContext,letWindowsChooseThisPixelFormat, &pfd);

        HGLRC ourOpenGLRenderingContext = wglCreateContext(ourWindowHandleToDeviceContext);
        wglMakeCurrent (ourWindowHandleToDeviceContext, ourOpenGLRenderingContext);

        if(!gladLoadGL()) {
          printf("Something went wrong!\n");
          exit(-1);
        }
        // MessageBoxA(0,(char*)glGetString(GL_VERSION), "OPENGL VERSION",0);
        printf("VERSION: %s.\n", glGetString(GL_VERSION));



        int vao, vbo;

        float vertices[3][3] = {
          -0.5f, -0.5f, 0.0f,
          +0.5f, -0.5f, 0.0f,
          +0.0f, +0.5f, 0.0f,
        };

        glGenVertexArrays(1, &global.vao);
        glGenBuffers(1, &global.vbo);

        glBindVertexArray(global.vao);
        glBindBuffer(GL_ARRAY_BUFFER, global.vbo);
        glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

        glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
        glEnableVertexAttribArray(0);
        glBindBuffer(GL_ARRAY_BUFFER, 0);
        glBindVertexArray(0);

        // wglDeleteContext(ourOpenGLRenderingContext);
        // PostQuitMessage(0);
      }
      break;
    default:
      return DefWindowProc(hWnd, message, wParam, lParam);
  }
  return 0;

}
GLuint createProgram(const char *vpath, const char *fpath)
{
  GLuint program, shader;

  program = glCreateProgram();

  shader = createShader(GL_VERTEX_SHADER, vpath);
  if (!shader) {
    error("No Shader.\n");
    return -1;
  }
  glAttachShader(program, shader);
  //glDeleteShader(shader);

  shader = createShader(GL_FRAGMENT_SHADER, fpath);
  if (!shader) {
    error("No Shader.\n");
    return -1;
  }
  glAttachShader(program, shader);
  //glDeleteShader(shader);

  glLinkProgram(program);

  int link_ok = GL_TRUE;
  glGetProgramiv(program, GL_LINK_STATUS, &link_ok);
  GLchar info[512];

  if (link_ok == GL_FALSE)
  {
    glGetProgramInfoLog(program, 512, NULL, info);
    error("Program linking failed.\n[%s]\n", info);
    printf("%s.\n", info);
    return -1;
  }

  return program;
}

GLchar *loadSource(const char *file)
{
  GLchar *source = NULL;
  FILE *fp = NULL;
  long bufsize = -1;
  size_t newLen;

  if ((fp = fopen(file, "r")) == NULL) {
    error("Unable to read file '%s'.\n", file);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) != 0) {
    error("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }

  bufsize = ftell(fp);

  if (bufsize == -1) {
    error("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }

  source = malloc(sizeof(GLchar) * (bufsize + 1));

  if (fseek(fp, 0L, SEEK_SET) != 0) {
    error("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }

  newLen = fread(source, sizeof(GLchar), bufsize, fp);

  if (ferror(fp) != 0) {
    error("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }
  source[newLen++] = '\0';

  return source;
  // free(source);
}

GLuint createShader(GLenum type, const char *file)
{
  GLchar *source = loadSource(file);
  int shader;

  if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
  {
    error("Type can only be 'GL_VERTEX_SHADER' or 'GL_FRAGMENT_SHADER'.\n");
    return -1;
  }

  shader = glCreateShader(type);
  glShaderSource(shader, 1, (const GLchar **)&source, NULL);
  glCompileShader(shader);

  GLint compile_ok = GL_TRUE;
  GLchar info[512];

  glGetShaderiv(shader, GL_COMPILE_STATUS, &compile_ok);
  printf("shader: %d, compile_ok: [%d].\n", shader, compile_ok);

  if (compile_ok == GL_FALSE)
  {
    GLint maxLength = 0;
    glGetShaderiv(shader, GL_INFO_LOG_LENGTH, &maxLength);
    glGetShaderInfoLog(shader, maxLength, &maxLength, info);
    printf("%s.\n", info);
    error("Shader '%s' compilation failed.\n[%s]\n", file, info);
    return -1;
  } else {
    printf("COMPILATION SUCCESS.\n");
  }

  return shader;
}

int error(const GLchar *format, ...)
{
  va_list args;
  fprintf(stderr, KRED);
  fprintf(stderr, "ERROR: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
  fprintf(stderr, "\n");

  return -1;
}
