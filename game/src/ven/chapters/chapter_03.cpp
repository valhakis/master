#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <app/ven.h>
#include <app/CG.h>

#include <stdio.h>

static float WIDTH = 800.0f, HEIGHT = 600.0f;

int _ven_chapter_03_main(int argc, char *argv[]) {

  CGInitialize(NULL);

  CGMakeWindow(NULL, 800, 600);
  VenTextInitialize("code.ttf", 30.0);

  while (CGWindowIsOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    VenTextRender("WHAT IS TREE", 0, 0);

    CGWindowUpdate();
  }

  VenTextDestroy();
  CGTerminate();

  printf("CHAPTER 03 HAS BEEN EXECUTED.\n");
  return 0;
}
