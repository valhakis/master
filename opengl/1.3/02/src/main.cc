#include <stdio.h>

#include "window.h"

static float angle = 0.0f;
static float speed = 0.1f;

int main() {
  WindowInitialize();

  while (WindowOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    glLoadIdentity();
    glRotatef(angle, 0.0f, 0.0f, 1.0f);
    
    glRectf(-0.25, -0.25, 0.25, 0.25);

    angle += speed;

    WindowUpdate();
  }

  WindowDestroy();

  return 0;
}
