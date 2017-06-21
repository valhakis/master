#include "inc/shared.h"
#include <GLFW/glfw3.h>

static GLFWwindow* window;

static int Error(const char *format, ...)
{

}

int Window1Initialize()
{
  if (!glfwInit())
  {
    Error("Failed to initialize GLFW.");
    return -1;
  }
}

int Window1Events()
{

}
