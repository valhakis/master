#include <stdio.h>
#include <GLFW/glfw3.h>
#include <valhakis.h>

GLFWwindow *window;

int main()
{
  if (!glfwInit())
  {
    MError("Failed to initialize GLFW.");
    return -1;
  }

  return 0;
}
