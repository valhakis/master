#include <stdio.h>
#include <stdbool.h>
#include <GLFW/glfw3.h>
#include "world.h"

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod);

int main(int argc, char *argv[])
{
  GLFWwindow* window;

  if (!glfwInit()) 
  {
    return -1;
  }

  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);

  if (!window)
  {
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwMakeContextCurrent(window);

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
