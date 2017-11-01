#include <stdio.h>

#include "window.h"

static GLFWwindow* window;

static float mouseX = 0.0f, mouseY = 0.0f;

static float width = 800.0f;
static float height = 600.0f;

static float centerX = width / 2;
static float centerY = height / 2;

static float angle = 0.0f;
static float speed = 0.5f;

static void mousemove(GLFWwindow* window, double xpos, double ypos);

int main() {
  WindowInitialize();

  window = WindowReturn();
  glfwSetCursorPosCallback(window, mousemove);

  glViewport(0, 0, width, height);

  while (WindowOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(0, width, 0, height, -1, +1);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glTranslatef(mouseX, mouseY, 0.0f);
    glRotatef(angle, 0.0f, 0.0f, 1.0f);

    glRecti(-25, -25, 25, 25);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    for (int i=0; i<=height; i += 20) {
      glBegin(GL_LINES);
      glVertex2f(0, i);
      glVertex2f(width, i);
      glEnd();
    }

    for (int i=0; i<=width; i += 20) {
      glBegin(GL_LINES);
      glVertex2f(i, 0);
      glVertex2f(i, height);
      glEnd();
    }

    angle += speed;

    WindowUpdate();
  }

  WindowDestroy();

  return 0;
}

static void mousemove(GLFWwindow* window, double xpos, double ypos) {
  mouseX = (float) xpos;
  mouseY = -((float)ypos-height);
};
