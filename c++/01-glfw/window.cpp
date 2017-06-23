#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <stdio.h>
#include <stdlib.h>
#include "master.h"

static GLFWwindow* window;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
    glfwSetWindowShouldClose(window, GL_TRUE);
  if (key == GLFW_KEY_F1 && action == GLFW_PRESS)
    MasterStart();
}

int WindowInitialize()
{
  /* Initialize the library */
  if (!glfwInit())
    return -1;

  /* Create a windowed mode window and its OpenGL context */
  window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
  if (!window)
  {
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  /* Make the window's context current */
  glfwMakeContextCurrent(window);

  // glewExperimental = GL_TRUE;
  // glewInit();
}

int WindowOpen()
{
  return !glfwWindowShouldClose(window);
}

int WindowUpdate()
{
  /* Swap front and back buffers */
  glfwSwapBuffers(window);
  /* Poll for and process events */
  glfwPollEvents();
}

int WindowTerminate()
{
  glfwTerminate();
}

int GlewInitialize()
{
  glewExperimental = GL_TRUE;
  glewInit();
}
