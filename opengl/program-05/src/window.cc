#include <stdio.h>
#include <stdlib.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "window.h"

static GLFWwindow* window;
static const unsigned int width = 800, height = 600;
static void framebuffer(GLFWwindow* window, int width, int height);
static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods);
static void local_cursor_position_callback(GLFWwindow* window, double x, double y);

static float mouse_x = 0.0f;
static float mouse_y = 0.0f;

GLFWwindow* window_return_pointer() {
  return window;
}

int window_initialize() {

  if (!glfwInit()) {
    fprintf(stderr, "Failed to initialize GLFW.\n");
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, false);

  window = glfwCreateWindow(width, height, "program-02", NULL, NULL);

  if (window == NULL) {
    fprintf(stderr, "Failed to create window.\n");
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);
  glfwSetCursorPosCallback(window, local_cursor_position_callback);

  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    fprintf(stderr, "Failed to initialize glad.\n");
    return -1;
  }

  glViewport(0, 0, width, height);
  glClearColor(0.15f, 0.15f, 0.15f, 1.0f);

  return 0;
}

int window_update() {
  if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
    glfwSetWindowShouldClose(window, true);

  glfwPollEvents();
  glfwSwapBuffers(window);
}

bool window_is_open() {
  return !glfwWindowShouldClose(window);
}

int window_get_mouse_position(float *mouse_x_ptr, float *mouse_y_ptr) {
  *mouse_x_ptr = mouse_x;
  *mouse_y_ptr = mouse_y;
}

static void framebuffer(GLFWwindow* window, int width, int height) {
  glViewport(0, 0, width, height);
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {

}

static void local_cursor_position_callback(GLFWwindow* window, double x, double y) {
  mouse_x = (float)x;
  mouse_y = (float)-(y-height);
}
