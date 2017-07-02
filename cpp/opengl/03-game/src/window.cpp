#include "inc/window.h"
#include "inc/main.h"

#include <valhakis.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

static struct {
  int count;
  void (*callbacks[10])(int button, int state);
} mouse;

static float mouseX, mouseY;
static GLFWwindow *window;
static const int width = 500, height = 500;
static bool keys[1024];

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mod);
static void cursor_position(GLFWwindow* window, double xpos, double ypos);
static void mouse_button_callback(GLFWwindow* window, int button, int action, int mod);
static void framebuffer_size(GLFWwindow* window, int width, int height);

void WindowInitialize()
{
  mouse.count = 0;

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

  glfwSetFramebufferSizeCallback(window, framebuffer_size);
  glfwSetKeyCallback(window, keyboard);
  glfwSetCursorPosCallback(window, cursor_position);
  glfwSetMouseButtonCallback(window, mouse_button_callback);
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

void WindowGetDimensions(int *width, int *height)
{
  glfwGetFramebufferSize(window, width, height);
}

void WindowGetCursorPosition(float *x, float *y)
{
  *x = mouseX;
  *y = mouseY;
}

static void cursor_position(GLFWwindow* window, double xpos, double ypos)
{

  mouseX = (float)xpos;
  mouseY = (float)ypos;
}

static void mouse_button_callback(GLFWwindow* window, int button, int action, int mod)
{
  for (int x=0; x<mouse.count; x++)
  {
    if (mouse.callbacks[x])
    {
      mouse.callbacks[x](button, action);
    }
  }
}

void WindowRegisterMousePress(void (*callback)(int button, int action))
{
  mouse.callbacks[mouse.count] = callback;
  mouse.count += 1;
}

static void framebuffer_size(GLFWwindow* window, int width, int height)
{
  glViewport(0, 0, width, height);
}
