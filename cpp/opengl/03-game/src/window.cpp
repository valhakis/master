#include "inc/window.h"
#include "inc/main.h"

#include <valhakis.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

static GLFWwindow *window;
static const int width = 500, height = 500;
static bool keys[1024];

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mod);

void WindowInitialize()
{
  glfwInit();
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  window = glfwCreateWindow(width, height, "Window", NULL, NULL);
  if (window == NULL)
  {
    ValErr("Failed to initialize GLFW window.\n");
    glfwTerminate();
    exit(EXIT_FAILURE);
  }

  glfwSetKeyCallback(window, keyboard);
  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    ValErr("Failed to initialize GLAD.\n");
    exit(EXIT_FAILURE);
  }
}

void WindowEvents()
{
  glfwPollEvents();

  if (glfwWindowShouldClose(window))
  {
    MainClose();
  }
  glfwSwapBuffers(window);
}

void WindowTerminate()
{
  glfwTerminate();
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mod)
{
  if (action == GLFW_PRESS)
  {
    keys[key] = 1;
  }

  if (action == GLFW_RELEASE)
  {
    keys[key] = 0;
  }

  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
  {
    glfwSetWindowShouldClose(window, true);
  }
}

void WindowGetKeysPtr(bool **keysPtr)
{
  *keysPtr = (bool*)&keys;
}
