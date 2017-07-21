#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdarg.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>

void ValLog(const char *format, ...);
void ValErr(const char *format, ...);
char *ValReadSource(const char *file);
int ValCreateShader(GLenum type, const char *file);
int ValCreateProgram(int vshader, int fshader);

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
  fprintf(stderr, "\n");
}

void ValSuc(const char *format, ...)
{
  va_list args;
  fprintf(stdout, KGRN);
  fprintf(stdout, "LOG: ");
  fprintf(stdout, KNRM);
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
  fprintf(stdout, "\n");
}

void ValLog(const char *format, ...)
{
  va_list args;
  fprintf(stdout, KBLU);
  fprintf(stdout, "LOG: ");
  fprintf(stdout, KNRM);
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
  fprintf(stdout, "\n");
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

  int compile_ok = false;
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

  int link_ok = false;
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
