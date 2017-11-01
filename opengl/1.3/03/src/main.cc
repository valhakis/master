#include <stdio.h>

#include "window.h"

static float width = 800.0f;
static float height = 600.0f;

static float centerX = width / 2;
static float centerY = height / 2;

static float angle = 0.0f;
static float speed = 0.5f;

int main() {
  WindowInitialize();

  while (WindowOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(0, width, 0, height, -1, +1);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glTranslatef(centerX, centerY, 0.0f);
    glRotatef(angle, 0.0f, 0.0f, 1.0f);
    
    glRecti(-25, -25, 25, 25);

    angle += speed;

    WindowUpdate();
  }

  WindowDestroy();

  return 0;
}
