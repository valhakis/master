#include <stdio.h>
#include <stdlib.h>

#include <glad/glad.h>
#include <stdbool.h>
#include <GLFW/glfw3.h>
#include "world.h"

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod);
static void frameboffer(GLFWwindow *window, int width, int height);
static char *getSource(const char *file);
static int createProgram(const char *vpath, const char *fpath);
static int createShader(GLenum type, const char *file);

int main(int argc, char *argv[])
{
  setbuf(stdout, NULL);

  GLFWwindow* window;

  print("%s", getSource("default.vs"));
  print("%s", getSource("default.fs"));

  if (!glfwInit()) 
  {
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);

  if (!window)
  {
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, frameboffer);
  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    return error("glad");
  } 

  int program = createProgram("default.vs", "default.fs");

  float vertices[3][3] = {
    -0.5f, -0.5f, 0.0f,
    +0.5f, -0.5f, 0.0f,
    +0.0f, +0.5f, 0.0f,
  };

  unsigned int VAO, VBO;

  glGenVertexArrays(1, &VAO);
  glGenBuffers(1, &VBO);

  glBindVertexArray(VAO);
  glBindBuffer(GL_ARRAY_BUFFER, VBO);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  glViewport(0, 0, 800, 600);
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);

  while (!glfwWindowShouldClose(window))
  {
    glClear(GL_COLOR_BUFFER_BIT);
    glfwSwapBuffers(window);
    glfwPollEvents();
  }

  glfwTerminate();

  return 0;
}

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
  {
    glfwSetWindowShouldClose(window, true);
  }
}

static void frameboffer(GLFWwindow *window, int width, int height)
{
  glViewport(0, 0, width, height);
}


static char *getSource(const char *file)
{
  char *source = NULL;
  FILE *fp = NULL;
  long bufsize = -1;
  size_t newLen;

  if ((fp = fopen(file, "r")) == NULL) {
    error("Unable to read file '%s'", file);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) != 0) {
    error("File read error '%s'", file);
    fclose(fp);
    return NULL;
  }

  bufsize = ftell(fp);

  if (bufsize == -1) {
    error("File read error '%s'", file);
    fclose(fp);
    return NULL;
  }

  source = malloc(sizeof(char) * (bufsize + 1));

  if (fseek(fp, 0L, SEEK_SET) != 0) {
    error("File read error '%s'", file);
    fclose(fp);
    return NULL;
  }

  newLen = fread(source, sizeof(char), bufsize, fp);

  if (ferror(fp) != 0) {
    error("File read error '%s'", file);
    fclose(fp);
    return NULL;
  }
  source[newLen++] = '\0';

  return source;
}

static int createProgram(const char *vpath, const char *fpath)
{
  int program, shader;

  program = glCreateProgram();

  shader = createShader(GL_VERTEX_SHADER, vpath);
  if (!shader) {
    error("No Shader.");
    return -1;
  }
  glAttachShader(program, shader);
  //glDeleteShader(shader);

  shader = createShader(GL_FRAGMENT_SHADER, fpath);
  if (!shader) {
    error("No Shader.");
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
    error("Program linking failed.\n%s", info);
    return -1;
  }

  return program;
}

static int createShader(GLenum type, const char *file)
{
  char *source = getSource(file);
  int shader;

  if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
  {
    error("Type can only be 'GL_VERTEX_SHADER' or 'GL_FRAGMENT_SHADER'.");
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
    error("Shader '%s' compilation failed.\n%s", file, info);
    return -1;
  }

  return shader;
}
