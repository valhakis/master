#include <stdio.h>

#include "window.h"

int main() {
  WindowInitialize();

  while (WindowOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    glLoadIdentity();
    
    glScalef(0.2, 0.2, 0.2);
    glBegin(GL_TRIANGLES);
    glVertex2i(-1, -1);
    glVertex2i(+1, -1);
    glVertex2i(+0, +1);
    glEnd();

    WindowUpdate();
  }

  WindowDestroy();

  return 0;
}
