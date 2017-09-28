#include <stdio.h>
#include <stdbool.h>
#include <GLFW/glfw3.h>

#ifdef _WIN32
#include "windows.h"
#endif

const unsigned int WIDTH = 800;
const unsigned int HEIGHT = 600;

bool open = true;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
  {
    glfwSetWindowShouldClose(window, true);
  }
}

int main(int argc, char *argv[])
{
  printf("START OF THE APPLICATION.\n");
  GLFWwindow* window;

  glfwInit();

  window = glfwCreateWindow(WIDTH, HEIGHT, "Window", NULL, NULL);
  glfwSetKeyCallback(window, keyboard);
  glfwMakeContextCurrent(window);

  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);

  while (open)
  {
    glfwPollEvents();

    glClear(GL_COLOR_BUFFER_BIT);

    glfwSwapBuffers(window);
    if (glfwWindowShouldClose(window)) {
      open = false;
    }
  }

  glfwTerminate();

  return 0;
}
