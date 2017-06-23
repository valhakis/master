#include <stdio.h>
#include <stdarg.h>
#include <unistd.h>
#include <stdlib.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

static bool isOpen = true;

int MError(const char *format, ...)
{
  va_list args;
  fprintf(stderr, "%sERROR:%s ", KRED, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
  fprintf(stderr, "\n");
  return -1;
}

int MInitializeGLFW()
{

  if (glfwInit() == GLFW_FALSE)
  {
    return MError("Failed to initialize GLFW.");
  }

  return 0;
}

int MTerminate()
{

  glfwTerminate();
}

int MGLFWEvents()
{
  glfwPollEvents();
}

int MisOpen()
{
  return isOpen;
}

int MClose()
{
  isOpen = false;
}

char *MLoadSource(const char *path)
{
  char *source = NULL;
  FILE *fp = fopen(path, "r");
  long bufsize;
  size_t newlen;

  if (fp == NULL)
  {
    MError("Failed to open '%s'.", path);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) != 0)
  {
    MError("Failed to seek end '%s'.", path);
    return NULL;
  }

  bufsize = ftell(fp);

  if (bufsize == -1)
  {
    MError("Bufsize error '%s'.", path);
    return NULL;
  }

  source = (char *)malloc(sizeof(char) * (bufsize + 1));

  if (fseek(fp, 0L, SEEK_SET) != 0)
  {
    MError("Failed to seek set '%s'.", path);
    return NULL;
  }

  newlen = fread(source, sizeof(char), bufsize, fp);

  if (ferror(fp) != 0)
  {
    MError("Failed to read '%s'.", path);
    return NULL;
  }

  source[newlen++] = '\0';
  fclose(fp);

  return source;
}

int MCreateShader(GLenum type, const char *path)
{
  int shader;
  char *source;
  int compile_ok = false;
  char info[512];

  if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
  {
    return MError("Type can only be GL_VERTEX_SHADER or GL_FRAGMENT_SHADER.");
  }

  shader = glCreateShader(type);
  source = MLoadSource(path);
  glShaderSource(shader, 1, (const char **)&source, NULL);
  glCompileShader(shader);
  free(source);
  glGetShaderiv(shader, GL_COMPILE_STATUS, &compile_ok);
  if (!compile_ok)
  {
    glGetShaderInfoLog(shader, 512, NULL, info);
    return MError("Failed to create shader '%s': \n%s\n", path, info);
  }

  return shader;
}

int MCreateProgram(const char *vpath, const char *fpath)
{
  int program, shader;
  int link_ok = false;
  char info[512];

  program = glCreateProgram();

  shader = MCreateShader(GL_VERTEX_SHADER, vpath);
  glAttachShader(program, shader);
  glDeleteShader(shader);

  shader = MCreateShader(GL_FRAGMENT_SHADER, fpath);
  glAttachShader(program, shader);
  glDeleteShader(shader);

  glLinkProgram(program);
  glGetProgramiv(program, GL_LINK_STATUS, &link_ok);

  if (!link_ok)
  {
    glGetProgramInfoLog(program, 512, NULL, info);
    return MError("Failed to create program.\n%s\n", info);
  }
  return program;
}
