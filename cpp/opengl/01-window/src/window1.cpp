#define GLFW_EXPOSE_NATIVE_X11 1

#include <valhakis.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <GLFW/glfw3native.h>
#include <stdio.h>
#include "inc/share.h"
#include "inc/main.h"

static GLFWwindow *window;
static int WIDTH = 800, HEIGHT = 600;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod);
static void framebuffer(GLFWwindow* window, int width, int height);

static int program;
static unsigned int VBO, VAO;

int Window1Initialize()
{
  if (!glfwInit())
  {
    ShareError("Failed to initialize GLFW.");
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  window = glfwCreateWindow(WIDTH, HEIGHT, "Win", NULL, NULL);

  if (window == NULL)
  {
    ShareError("Failed to create window in GLFW.");
    return -1;
  }
  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);
  glfwMakeContextCurrent(window);

  glfwSetWindowPos(window, 0, 0);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    ShareError("Failed to initialize glad.");
    return -1;
  }

  glViewport(0, 0, WIDTH, HEIGHT);

  int vshader = ValCreateShader(GL_VERTEX_SHADER, "data/default.vs");
  int fshader = ValCreateShader(GL_FRAGMENT_SHADER, "data/default.fs");
  program = ValCreateProgram(vshader, fshader);

  float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    0.5f, -0.5f, 0.0f,
    0.0f, 0.5f, 0.0f,
  };

  VBO, VAO;
  glGenVertexArrays(1, &VAO);
  glGenBuffers(1, &VBO);
  glBindVertexArray(VAO);
  glBindBuffer(GL_ARRAY_BUFFER, VBO);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 

  return 0;
}

int Window1Events()
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);

  glUseProgram(program);
  glBindVertexArray(VAO); 
  glDrawArrays(GL_TRIANGLES, 0, 3);

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
}
