#include <stdio.h>
#include <stdlib.h>

#include "window.h"

static GLFWwindow* window;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods);

int WindowInitialize() {
  if (!glfwInit()) {
    printf("Glfw initialization failed.\n");
    exit(EXIT_FAILURE);
  }

  glfwWindowHint(GLFW_RESIZABLE, false);
  
  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  
  glfwSetKeyCallback(window, keyboard);

  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    fprintf(stderr, "Failed to initialize glad.\n");
    return -1;
  }
  printf("VERSION: '%s'.\n", glGetString(GL_VERSION));

  return 0;
}

int WindowOpen() {
  return !glfwWindowShouldClose(window);
}

int WindowUpdate() {
  glfwSwapBuffers(window);
  glfwPollEvents();
  return 0;
}

int WindowDestroy() {
  glfwTerminate();
}

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}
