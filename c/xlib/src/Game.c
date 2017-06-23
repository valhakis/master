#include <GLFW/glfw3.h>
#include <stdio.h>

GLFWwindow* window;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods) 
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, GL_TRUE);
  }
}

int GameInitialize()
{
}

int GameStart()
{
  if (!glfwInit()) {
    printf("Unable to initialize glfw.\n");
    return -1;
  }

  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);

  if (!window) {
    glfwTerminate();
    printf("Unable to create window.\n");
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwMakeContextCurrent(window);

  while (!glfwWindowShouldClose(window))
  {
    glClear(GL_COLOR_BUFFER_BIT);

    glfwSwapBuffers(window);

    glfwPollEvents();
  }

  glfwTerminate();
}
