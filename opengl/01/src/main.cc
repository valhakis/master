
#include <stdio.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "mouse.h"
#include "window.h"
#include "program.h"
#include "scrap.h"
#include "page.h"

#include "rect.h"

int main(int argc, char *argv[]) {

  WindowCreate(800, 600);

  ProgramInitialize("default.vs", "default.fs");

  RectInitialize();

  PageInitialize();
  ScrapInitialize();

  glClearColor(0.15f, 0.15f, 0.15f, 1.0f);

  while (WindowOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    // ProgramSetColor3f(1.0f, 1.0f, 0.0f);
    RectWColor3f(MouseX()-5, MouseY()-5, 10, 10, 1.0f, 1.0f, 0.0f);

    switch(PageGetCurrentIndex()) {
      case 0:
        ScrapUpdate();
        break;
      case 1:
        rect((WindowGetWidth() / 2) - 25.0f, (WindowGetHeight() / 2) - 25.0f, 50.0f, 50.0f);
        break;
      case 2:
        // line(0, 0, 500, 500);
        break;
      default:
        break;
    }

    PageUpdate();

    WindowUpdate();
  }

  WindowDestroy();

  return 0;
}
