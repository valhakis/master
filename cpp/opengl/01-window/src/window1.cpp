#define GLFW_EXPOSE_NATIVE_X11 1

#include <valhakis.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <GLFW/glfw3native.h>
#include <stdio.h>
#include <string.h>
#include "inc/share.h"
#include "inc/main.h"
#include "inc/window1.h"
#include "inc/window2.h"
#include "inc/settings.h"

static struct {
  bool triangle;
  bool rectangle;
} Global;

static struct Settings *settings;

static GLFWwindow *window;
static int WIDTH = 500, HEIGHT = 500;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod);
static void framebuffer(GLFWwindow* window, int width, int height);
static void initializeGlobal();
static int initializeTriangle(unsigned int *vao, unsigned int *vbo);
static int drawTriangle(int *program, unsigned int *vao);
static int drawRectangle(int *program, unsigned int *vao);
static int initializeWindow(GLFWwindow** window);
static int initializeRectangle(unsigned int *vao, unsigned int *vbo, unsigned int *ebo);
static void initializeGlobal();
static int createProgram(int *program, const char *vpath, const char *fpath);

static int defaultProgram;
static int programs[MAX_PROGRAMS];
static unsigned int triangleVBO, triangleVAO;
static unsigned int rectangleVBO, rectangleVAO, rectangleEBO;

static int init1()
{
  // printf("INIT 1 HAS BEEN EXECUTED.\n");
}

static int render1()
{
  // printf("RENDER 1 HAS BEEN EXECUTED.\n");
}

static int init2()
{
  // printf("INIT 2 HAS BEEN EXECUTED.\n");
}

static int render2()
{
  // printf("RENDER 2 HAS BEEN EXECUTED.\n");
}

static struct {
  int index;
  int (*inits[10])();
  int (*renders[10])();
} Exercises;

int Window1Register(int (*init)(), int (*render)())
{
  Exercises.inits[Exercises.index] = init;
  Exercises.renders[Exercises.index] = render;
  Exercises.index += 1;

  if (Exercises.index > 9)
  {
    printf("MAYBE THE EXERCISES / REGISTER LIMIT HAS REACHED.\n");
  }
}

int Window1Initialize()
{
  settings = SettingsGet();
  initializeGlobal();

  /* setup window */
  if (initializeWindow(&window) > 0)
  {
    ShareError("Failed to initialize window in window1.\n");
    return -1;
  }

  /* setup defaultProgram */
  createProgram(&defaultProgram, "data/default.vs", "data/default.fs");
  // defaultProgram = ValLoadProgram("data/default.vs", "data/default.fs");


  Exercises.index = 0;
  // Window1Register(init1, render1);
  // Window1Register(init2, render2);

  programs[0] = ValLoadProgram("data/default.vs", "data/default.fs");
  programs[1] = 2;
  programs[2] = 3;

  Window1Exercise01(&defaultProgram);
  Window1Exercise02();

  int x=0;
  for (x=0; x<Exercises.index; x++)
  {
    if (Exercises.inits[x])
    {
      Exercises.inits[x]();
    }
  }

  /* setup triangle */
  initializeTriangle(&triangleVAO, &triangleVBO);

  /* setup rectangle */
  initializeRectangle(&rectangleVAO, &rectangleVBO, &rectangleEBO);

  return 0;
}

int Window1Events()
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);


  glUseProgram(defaultProgram);
  glUseProgram(0);
  int x=0;
  for (x=0; x<Exercises.index; x++)
  {
    if (settings->window1Exercises[x] == true)
    {
      if (Exercises.renders[x])
      {
        Exercises.renders[x]();
      }
    }
  }

  if (settings->triangle)
  {
    drawTriangle(&defaultProgram, &triangleVAO);
  }

  if (settings->rectangle)
  {
    drawRectangle(&defaultProgram, &rectangleVAO);
  }

  glfwSwapBuffers(window);
  glfwPollEvents();

  if (glfwWindowShouldClose(window))
  {
    MainClose();
  }

}

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
  {
    glfwSetWindowShouldClose(window, true);
  }
}

static void framebuffer(GLFWwindow* window, int width, int height)
{
  glViewport(0, 0, width, height);
}

int Window1Process(const char *text)
{
  printf("I have to process: '%s'.\n", text);
  if (strcmp(text, "triangle") == 0)
  {
    settings->triangle = !settings->triangle;
    Window2AddAtCursor("TRIANGLE HAS SET TO: %s.\n", settings->triangle ? "ON" : "OFF");
  } else if (strcmp(text, "rectangle") == 0) {
    settings->rectangle = !settings->rectangle;
    Window2AddAtCursor("RECTANGLE HAS SET TO: %s.\n", settings->rectangle ? "ON" : "OFF");
  } else if (strcmp(text, "exit") == 0) {
    MainClose();
  } else if (strcmp(text, "version") == 0) {
    int major, minor;
    glGetIntegerv(GL_MAJOR_VERSION, &major);
    glGetIntegerv(GL_MINOR_VERSION, &minor);
    Window2AddAtCursor("OpenGL Version: %d:%d.\n", major, minor);
    Window2AddAtCursor("OpenGL Version: %s.\n", glGetString(GL_VERSION));
    Window2AddAtCursor("OpenGL Vendor: %s.\n", glGetString(GL_VENDOR));
    Window2AddAtCursor("OpenGL Shading Language Version: %s.\n", glGetString(GL_SHADING_LANGUAGE_VERSION));
  } else if (strcmp(text, "clear") == 0) {
    Window2Clear();
  }

}

static int initializeTriangle(unsigned int *vao, unsigned int *vbo)
{
  float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    0.5f, -0.5f, 0.0f,
    0.0f, 0.5f, 0.0f,
  };

  glGenVertexArrays(1, vao);
  glGenBuffers(1, vbo);

  glBindVertexArray(*vao);
  glBindBuffer(GL_ARRAY_BUFFER, *vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 
}

static int drawTriangle(int *program, unsigned int *vao)
{
  glUseProgram(*program);
  glBindVertexArray(*vao); 
  glDrawArrays(GL_TRIANGLES, 0, 3);
  glUseProgram(0);
}

static int initializeWindow(GLFWwindow** window)
{
  if (!glfwInit())
  {
    ShareError("Failed to initialize GLFW.");
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  *window = glfwCreateWindow(WIDTH, HEIGHT, "Win", NULL, NULL);

  if (*window == NULL)
  {
    ShareError("Failed to create window in GLFW.");
    return -1;
  }
  glfwSetKeyCallback(*window, keyboard);
  glfwSetFramebufferSizeCallback(*window, framebuffer);
  glfwMakeContextCurrent(*window);

  glfwSetWindowPos(*window, 0, 0);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    ShareError("Failed to initialize glad.");
    return -1;
  }

  glViewport(0, 0, WIDTH, HEIGHT);
  return 0;
}

static void initializeGlobal()
{
  Global.triangle = false;
  Global.rectangle = false;
}

static int initializeRectangle(unsigned int *vao, unsigned int *vbo, unsigned int *ebo)
{
  float vertices[] = {
    0.5f, 0.5f, 0.0f,
    0.5f, -0.5f, 0.0f,
    -0.5f, -0.5f, 0.0f,
    -0.5f, 0.5f, 0.0f
  };
  unsigned int indices[] = {
    0, 1, 3, // 1. triangle
    1, 2, 3, // 2. triangle
  };

  glGenVertexArrays(1, vao);
  glGenBuffers(1, vbo);
  glGenBuffers(1, ebo);

  glBindVertexArray(*vao);
  glBindBuffer(GL_ARRAY_BUFFER, *vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, *ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindVertexArray(0); 
}

static int drawRectangle(int *program, unsigned int *vao)
{
  glUseProgram(*program);
  glBindVertexArray(*vao);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  glUseProgram(0);
}

static int createProgram(int *program, const char *vpath, const char *fpath)
{
  int vshader = ValCreateShader(GL_VERTEX_SHADER, vpath);
  int fshader = ValCreateShader(GL_FRAGMENT_SHADER, fpath);
  *program = ValCreateProgram(vshader, fshader);
}


int Window1GetMonitorDimensions(int *width, int *height)
{
  const GLFWvidmode *mode = glfwGetVideoMode(glfwGetPrimaryMonitor());
  *width = mode->width;
  *height = mode->height;
}
