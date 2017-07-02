#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdarg.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include "inc/valhakis.h"

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

void ValErr(const char *format, ...)
{
  va_list args;
  fprintf(stderr, KRED);
  fprintf(stderr, "ERROR: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
}

void ValLog(const char *format, ...)
{
  va_list args;
  fprintf(stderr, KBLU);
  fprintf(stderr, "LOG: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
}

char *ValReadSource(const char *file)
{
  char *source = NULL;
  FILE *fp = NULL;
  long bufsize = -1;
  size_t newLen;

  if ((fp = fopen(file, "r")) == NULL) {
    ValErr("Unable to read file '%s'.\n", file);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) != 0) {
    ValErr("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }

  bufsize = ftell(fp);

  if (bufsize == -1) {
    ValErr("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }

  source = malloc(sizeof(char) * (bufsize + 1));

  if (fseek(fp, 0L, SEEK_SET) != 0) {
    ValErr("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }

  newLen = fread(source, sizeof(char), bufsize, fp);

  if (ferror(fp) != 0) {
    ValErr("File read error '%s'.\n", file);
    fclose(fp);
    return NULL;
  }
  source[newLen++] = '\0';

  return source;
  // free(source);
}

GLFWwindow *CreateGLFWWindow(int width, int height)
{
  GLFWwindow* window;

  glfwInit();
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  window = glfwCreateWindow(width, height, "Window", NULL, NULL);
  if (window == NULL)
  {
    ValErr("Failed to initialize GLFW window.\n");
    glfwTerminate();
    return NULL;
  }

  glfwMakeContextCurrent(window);

  return window;
}

int ValCreateShader(GLenum type, const char *file)
{
  char *source = ValReadSource(file);
  int shader;

  if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
  {
    ValErr("Type can only be 'GL_VERTEX_SHADER' or 'GL_FRAGMENT_SHADER'.\n");
    return -1;
  }

  shader = glCreateShader(type);
  glShaderSource(shader, 1, (const char **)&source, NULL);
  glCompileShader(shader);

  int compile_ok;
  char info[512];
  glGetShaderiv(shader, GL_COMPILE_STATUS, &compile_ok);

  if (!compile_ok)
  {
    glGetShaderInfoLog(shader, 512, NULL, info);
    ValErr("Shader '%s' compilation failed.\n%s\n", file, info);
    return -1;
  }

  return shader;
}

int ValCreateProgram(int vshader, int fshader)
{
  int program;

  program = glCreateProgram();
  glAttachShader(program, vshader);
  glAttachShader(program, fshader);
  glLinkProgram(program);

  int link_ok;
  char info[512];

  if (!link_ok)
  {
    glGetProgramInfoLog(program, 512, NULL, info);
    ValErr("Program linking failed.\n%s\n", info);
    return -1;
  }

  glDeleteShader(vshader);
  glDeleteShader(fshader);

  return program;
}

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod)
{
  const int ESCAPE = GLFW_KEY_ESCAPE;
  const int PRESS = GLFW_PRESS;

  if (key == ESCAPE && action == PRESS)
    glfwSetWindowShouldClose(window, true);
}

static void framebuffer(GLFWwindow *window, int width, int height)
{
  glViewport(0, 0, width, height);
}

GLFWwindow *ValCreateLazyGLFWWindow()
{
  GLFWwindow* window;

  glfwInit();
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  if (window == NULL)
  {
    ValErr("Failed to initialize GLFW window.\n");
    glfwTerminate();
    return NULL;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);

  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    ValErr("Failed to initialize GLAD.\n");
    return NULL;
  }

  return window;
}

int ValLoadProgram(const char *vpath, const char *fpath)
{
  int program, shader;

  program = glCreateProgram();

  shader = ValCreateShader(GL_VERTEX_SHADER, vpath);
  if (!shader) {
    ValErr("No Shader.\n");
    return -1;
  }
  glAttachShader(program, shader);
  //glDeleteShader(shader);

  shader = ValCreateShader(GL_FRAGMENT_SHADER, fpath);
  if (!shader) {
    ValErr("No Shader.\n");
    return -1;
  }
  glAttachShader(program, shader);
  //glDeleteShader(shader);

  glLinkProgram(program);

  int link_ok = true;
  char info[512];

  if (!link_ok)
  {
    glGetProgramInfoLog(program, 512, NULL, info);
    ValErr("Program linking failed.\n%s\n", info);
    return -1;
  }

  return program;
}

int ValGetUniform(int program, const char *name)
{
  int uniform = glGetUniformLocation(program, name);

  if (uniform == -1)
  {
    ValErr("Unable to get uniform '%s'.\n", name);
  }

  return uniform;
}

void ValLoadVertices(const char *name, const char *path, float *vertices, size_t size)
{
  FILE *filePtr = NULL;

  filePtr = fopen(path, "r");

  if (filePtr == NULL)
  {
    ValErr("Failed to open file '%s'.\n", path);
    return;
  }

  bool found_name = false;
  char line[200];
  while (fgets(line, 200, filePtr))
  {
    line[strlen(line) - 1] = '\0';
    if (strcmp(line, name) == 0) 
    {
      found_name = true;
      break;
    }
  }

  for (int x=0; x<size / sizeof(float); x++)
  {
    fscanf(filePtr, "%f", vertices + x);
  }

  if (!found_name)
  {
    ValErr("Did not find vertices with name '%s'.\n", name);
    return;
  }

  fclose(filePtr);
}

void ValSetMat4Identity(float mat[4][4])
{
  mat[0][0] = 1.0f; mat[0][1] = 0.0f; mat[0][2] = 0.0f; mat[0][3] = 0.0f;
  mat[1][0] = 0.0f; mat[1][1] = 1.0f; mat[1][2] = 0.0f; mat[1][3] = 0.0f;
  mat[2][0] = 0.0f; mat[2][1] = 0.0f; mat[2][2] = 1.0f; mat[2][3] = 0.0f;
  mat[3][0] = 0.0f; mat[3][1] = 0.0f; mat[3][2] = 0.0f; mat[3][3] = 1.0f;
}

void ValSetUniformMatrix4fv(int program, const char *name, const float *M)
{
  int uniform = ValGetUniform(program, name);
  glUniformMatrix4fv(uniform, 1, GL_FALSE, M);
}

void SetUniformMatrix4fv(int program, const char *name, const float *M)
{
  int uniform = ValGetUniform(program, name);
  glUniformMatrix4fv(uniform, 1, GL_FALSE, M);
}

void ValSetUniform3fv(int program, const char *name, float color[3])
{
  int uniform = ValGetUniform(program, name);
  glUniform3fv(uniform, 1, color);
}

void SetUniform3fv(int program, const char *name, float color[3])
{
  int uniform = ValGetUniform(program, name);
  glUniform3fv(uniform, 1, color);
}

void Mat4Translate(float mat1[4][4], float vec[3])
{
  float mat2[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    vec[0], vec[1], vec[2], 1.0f,
  };
  ValMultiMat4ByMat4(mat1, mat2);
}

void ValMat4TransformVec3(float mat1[4][4], float vec[3])
{
  float mat2[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    vec[0], vec[1], vec[2], 1.0f,
  };
  ValMultiMat4ByMat4(mat1, mat2);
}

void ValMultiMat4ByMat4(float C[4][4], float B[4][4])
{
  float A[4][4];
  memcpy(A, C, sizeof(A));

  C[0][0] = A[0][0]*B[0][0] + A[0][1]*B[1][0] + A[0][2]*B[2][0] + A[0][3]*B[3][0];
  C[0][1] = A[0][0]*B[0][1] + A[0][1]*B[1][1] + A[0][2]*B[2][1] + A[0][3]*B[3][1];
  C[0][2] = A[0][0]*B[0][2] + A[0][1]*B[1][2] + A[0][2]*B[2][2] + A[0][3]*B[3][2];
  C[0][3] = A[0][0]*B[0][3] + A[0][1]*B[1][3] + A[0][2]*B[2][3] + A[0][3]*B[3][3];

  C[1][0] = A[1][0]*B[0][0] + A[1][1]*B[1][0] + A[1][2]*B[2][0] + A[1][3]*B[3][0];
  C[1][1] = A[1][0]*B[0][1] + A[1][1]*B[1][1] + A[1][2]*B[2][1] + A[1][3]*B[3][1];
  C[1][2] = A[1][0]*B[0][2] + A[1][1]*B[1][2] + A[1][2]*B[2][2] + A[1][3]*B[3][2];
  C[1][3] = A[1][0]*B[0][3] + A[1][1]*B[1][3] + A[1][2]*B[2][3] + A[1][3]*B[3][3];

  C[2][0] = A[2][0]*B[0][0] + A[2][1]*B[1][0] + A[2][2]*B[2][0] + A[2][3]*B[3][0];
  C[2][1] = A[2][0]*B[0][1] + A[2][1]*B[1][1] + A[2][2]*B[2][1] + A[2][3]*B[3][1];
  C[2][2] = A[2][0]*B[0][2] + A[2][1]*B[1][2] + A[2][2]*B[2][2] + A[2][3]*B[3][2];
  C[2][3] = A[2][0]*B[0][3] + A[2][1]*B[1][3] + A[2][2]*B[2][3] + A[2][3]*B[3][3];

  C[3][0] = A[3][0]*B[0][0] + A[3][1]*B[1][0] + A[3][2]*B[2][0] + A[3][3]*B[3][0];
  C[3][1] = A[3][0]*B[0][1] + A[3][1]*B[1][1] + A[3][2]*B[2][1] + A[3][3]*B[3][1];
  C[3][2] = A[3][0]*B[0][2] + A[3][1]*B[1][2] + A[3][2]*B[2][2] + A[3][3]*B[3][2];
  C[3][3] = A[3][0]*B[0][3] + A[3][1]*B[1][3] + A[3][2]*B[2][3] + A[3][3]*B[3][3];
}

void Mat4Scale(float M[4][4], float s)
{
  float T[4][4] = {
    s, 0.0f, 0.0f, 0.0f,
    0.0f, s, 0.0f, 0.0f,
    0.0f, 0.0f, s, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  ValMultiMat4ByMat4(M, T);
}

void ValMat4Scale(float M[4][4], float s)
{
  float T[4][4] = {
    s, 0.0f, 0.0f, 0.0f,
    0.0f, s, 0.0f, 0.0f,
    0.0f, 0.0f, s, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  ValMultiMat4ByMat4(M, T);
}

void ValMat4SetIdentityf(int count, ...)
{
  va_list arguments;
  va_start(arguments, count);
  for (int x=0; x<count; x++)
  {
    float *p = va_arg(arguments, float*);
    p[0]  = 1.0f, p[1]  = 0.0f, p[2]  = 0.0f, p[3]  = 0.0f;
    p[4]  = 0.0f, p[5]  = 1.0f, p[6]  = 0.0f, p[7]  = 0.0f;
    p[8]  = 0.0f, p[9]  = 0.0f, p[10] = 1.0f, p[11] = 0.0f;
    p[12] = 0.0f, p[13] = 0.0f, p[14] = 0.0f, p[15] = 1.0f;
  }
  va_end(arguments);
}

void ValSetVec3v(float vec1[3], float vec2[3])
{
  vec1[0] = vec2[0]; vec1[1] = vec2[1]; vec1[2] = vec2[2];
}

void ValSetVec3(float vec[3], float x, float y, float z)
{
  vec[0] = x, vec[1] = y, vec[2] = z;
}

void SetVec3(float vec[3], float x, float y, float z)
{
  vec[0] = x, vec[1] = y, vec[2] = z;
}

void Mat4Flip(float M[4][4])
{
  // [0][0] [0][1] [0][2] [0][3]    [0][0] [1][0] [2][0] [3][0]
  // [1][0] [1][1] [1][2] [1][3]    [0][1] [1][1] [2][1] [3][1] 
  // [2][0] [2][1] [2][2] [2][3]    [0][2] [1][2] [2][2] [3][2] 
  // [3][0] [3][1] [3][2] [3][3]    [0][3] [1][3] [2][3] [3][3] 

  float T[4][4];
  memcpy(T, M, sizeof(T));

  M[0][0] = T[0][0], M[0][1] = T[1][0], M[0][2] = T[2][0], M[0][3] = T[3][0];
  M[1][0] = T[0][1], M[1][1] = T[1][1], M[1][2] = T[2][1], M[1][3] = T[3][1];
  M[2][0] = T[0][2], M[2][1] = T[1][2], M[2][2] = T[2][2], M[2][3] = T[3][2];
  M[3][0] = T[0][3], M[3][1] = T[1][3], M[3][2] = T[2][3], M[3][3] = T[3][3];
}

void Mat4MultiMat4(float C[4][4], float B[4][4])
{
  float A[4][4];
  memcpy(A, C, sizeof(A));

  C[0][0] = A[0][0]*B[0][0] + A[0][1]*B[1][0] + A[0][2]*B[2][0] + A[0][3]*B[3][0];
  C[0][1] = A[0][0]*B[0][1] + A[0][1]*B[1][1] + A[0][2]*B[2][1] + A[0][3]*B[3][1];
  C[0][2] = A[0][0]*B[0][2] + A[0][1]*B[1][2] + A[0][2]*B[2][2] + A[0][3]*B[3][2];
  C[0][3] = A[0][0]*B[0][3] + A[0][1]*B[1][3] + A[0][2]*B[2][3] + A[0][3]*B[3][3];

  C[1][0] = A[1][0]*B[0][0] + A[1][1]*B[1][0] + A[1][2]*B[2][0] + A[1][3]*B[3][0];
  C[1][1] = A[1][0]*B[0][1] + A[1][1]*B[1][1] + A[1][2]*B[2][1] + A[1][3]*B[3][1];
  C[1][2] = A[1][0]*B[0][2] + A[1][1]*B[1][2] + A[1][2]*B[2][2] + A[1][3]*B[3][2];
  C[1][3] = A[1][0]*B[0][3] + A[1][1]*B[1][3] + A[1][2]*B[2][3] + A[1][3]*B[3][3];

  C[2][0] = A[2][0]*B[0][0] + A[2][1]*B[1][0] + A[2][2]*B[2][0] + A[2][3]*B[3][0];
  C[2][1] = A[2][0]*B[0][1] + A[2][1]*B[1][1] + A[2][2]*B[2][1] + A[2][3]*B[3][1];
  C[2][2] = A[2][0]*B[0][2] + A[2][1]*B[1][2] + A[2][2]*B[2][2] + A[2][3]*B[3][2];
  C[2][3] = A[2][0]*B[0][3] + A[2][1]*B[1][3] + A[2][2]*B[2][3] + A[2][3]*B[3][3];

  C[3][0] = A[3][0]*B[0][0] + A[3][1]*B[1][0] + A[3][2]*B[2][0] + A[3][3]*B[3][0];
  C[3][1] = A[3][0]*B[0][1] + A[3][1]*B[1][1] + A[3][2]*B[2][1] + A[3][3]*B[3][1];
  C[3][2] = A[3][0]*B[0][2] + A[3][1]*B[1][2] + A[3][2]*B[2][2] + A[3][3]*B[3][2];
  C[3][3] = A[3][0]*B[0][3] + A[3][1]*B[1][3] + A[3][2]*B[2][3] + A[3][3]*B[3][3];
}
