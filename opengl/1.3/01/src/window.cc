#define GLFW_EXPOSE_NATIVE_X11

#include <stdio.h>
#include <stdlib.h>

#include "window.h"
#include <GLFW/glfw3native.h>

static GLFWwindow* window;
static Window xwin;
static Display *xdpy;
static XEvent xevent;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods);
static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos);

int WindowInitialize() {
  if (!glfwInit()) {
    printf("Glfw initialization failed.\n");
    exit(EXIT_FAILURE);
  }

  glfwWindowHint(GLFW_RESIZABLE, false);
  
  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  
  glfwSetKeyCallback(window, keyboard);
  glfwSetCursorPosCallback(window, cursor_position_callback);

  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    fprintf(stderr, "Failed to initialize glad.\n");
    return -1;
  }
  printf("VERSION: '%s'.\n", glGetString(GL_VERSION));

  xdpy = glfwGetX11Display();
  xwin = glfwGetX11Window(window);

  return 0;
}

int WindowOpen() {
  return !glfwWindowShouldClose(window);
}

int WindowUpdate() {
  XNextEvent(xdpy, &xevent);
  if (xevent.type == KeyPress) {
    /* exit on esc key press */
    if (xevent.xkey.keycode == 0x09) {
      glfwSetWindowShouldClose(window, true);
    }
  }

  if (xevent.type == MotionNotify) {
    printf("motion: %d %d.\n", xevent.xmotion.x, xevent.xmotion.y);
  }

  glfwSwapBuffers(window);
  glfwPollEvents();
  return 0;
}

int WindowDestroy() {
  glfwTerminate();
}

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods) {
  if (action == GLFW_PRESS) {
    printf("KEY: '%d'.\n", key);
  }
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos) {
  // printf("position: %.2f %.2f.\n", xpos, ypos);
}
