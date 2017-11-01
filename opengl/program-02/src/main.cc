#include <stdio.h>
#include <stdlib.h>

#include <iostream>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

char root[512];

static const unsigned int width = 800, height = 600;

static void framebuffer(GLFWwindow* window, int width, int height) {
  glViewport(0, 0, width, height);
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {

}

static void checkCompilation(int elemId, bool isProgram, GLenum type) {
  int success = GL_FALSE;
  char info[512];

  if (isProgram) {
    glGetProgramiv(elemId, type, &success);
    if (success == GL_FALSE) {
      glGetProgramInfoLog(elemId, 512, NULL, info);
      fprintf(stderr, "%s", info);
    }
  } else {
    glGetShaderiv(elemId, type, &success);
    if (success == GL_FALSE) {
      glGetShaderInfoLog(elemId, 512, NULL, info);
      fprintf(stderr, "%s", info);
    }
  }
}

static char *loadSource(const char *path) {
  char *source = NULL;
  FILE *fp = NULL;
  long bufsize;
  size_t newLen;

  char file[512];
  sprintf(file, "%s/%s", root, path);
  fp = fopen(file, "r");

  if (fp == NULL) {
    fprintf(stderr, "Failed to open '%s'.\n", path);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  bufsize = ftell(fp);
  if (bufsize == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  source = (char*)malloc(sizeof(char) * (bufsize+1));

  if (fseek(fp, 0L, SEEK_SET) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  newLen = fread(source, sizeof(char), bufsize, fp);

  if (ferror(fp) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  source[newLen++] = '\0';

  fclose(fp);

  return source;
}

int main(int argc, char *argv[]) {
  sprintf(root, "%s/master/opengl/program-02/data", getenv((char*)"HOME"));
  printf("ROOT: '%s'.\n", root);

  GLFWwindow* window;

  if (!glfwInit()) {
    fprintf(stderr, "Failed to initialize GLFW.\n");
    return -1;
  }

  // glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 2);
  // glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  //glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  //glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, false);

  window = glfwCreateWindow(width, height, "program-02", NULL, NULL);

  if (window == NULL) {
    fprintf(stderr, "Failed to create window.\n");
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);

  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    fprintf(stderr, "Failed to initialize glad.\n");
    return -1;
  }
  printf("VERSION: '%s'.\n", glGetString(GL_VERSION));

  char *vsource = loadSource("default.vs");
  int vshader = glCreateShader(GL_VERTEX_SHADER);
  return 0;
  glShaderSource(vshader, 1, &vsource, NULL);
  glCompileShader(vshader);
  checkCompilation(vshader, false, GL_COMPILE_STATUS);
  free(vsource);

  char *fsource = loadSource("default.fs");
  int fshader = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fshader, 1, &fsource, NULL);
  glCompileShader(fshader);
  checkCompilation(fshader, false, GL_COMPILE_STATUS);
  free(fsource);

  int program = glCreateProgram();

  glAttachShader(program, vshader);
  glDeleteShader(vshader);

  glAttachShader(program, fshader);
  glDeleteShader(fshader);

  glLinkProgram(program);
  checkCompilation(program, true, GL_LINK_STATUS);

  float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    +0.5f, -0.5f, 0.0f,
    +0.0f, +0.5f, 0.0f,
  };

  unsigned int vbo, vao;
  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  glViewport(0, 0, width, height);
  glClearColor(0.15f, 0.15f, 0.15f, 1.0f);

  while (!glfwWindowShouldClose(window)) {
    if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
      glfwSetWindowShouldClose(window, true);

    glClear(GL_COLOR_BUFFER_BIT);

    glUseProgram(program);
    glBindVertexArray(vao);
    glDrawArrays(GL_TRIANGLES, 0, 3);

    glfwPollEvents();
    glfwSwapBuffers(window);
  }

  glfwTerminate();

  return 0;
}
