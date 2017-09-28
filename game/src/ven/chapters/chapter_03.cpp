#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <app/ven.h>
#include <app/CG.h>

#include <stdio.h>

static float WIDTH = 800.0f, HEIGHT = 600.0f;

int _ven_chapter_03_main(int argc, char *argv[]) {

  CGInitialize(NULL);

  GLFWwindow* window;

  CGMakeWindow(&window, 800, 600);
  glfwSetWindowTitle(window, "CHAPTER 03");
  VenTextInitialize("code.ttf", 30.0);

  while (CGWindowIsOpen()) {
    glClearColor(0.05f, 0.05f, 0.05f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    VenTextRender("Where could I find potatoes ?", 10, 100);

    CGWindowUpdate();
  }

  VenTextDestroy();
  CGTerminate();

  printf("CHAPTER 03 HAS BEEN EXECUTED.\n");
  return 0;
}
