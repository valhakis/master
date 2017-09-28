#include <stdio.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "app/CG.h"
#include "codemath.h"

static void BUTTON_1() {
  printf("BUTTON_1 CALLED\n");
}

int _codemath_main(int argc, char *argv[]) {
  printf("codemath main\n");

  GLFWwindow* window;

  CGMakeWindow(&window, 500, 500);

  glfwSetWindowTitle(window, "CODEMATH");

  int program = CGLoadShader("codemath");
  CMButtonInitialize(program);

  CMButtonMake(5, 5, 200, 30, "BUTTON 1", BUTTON_1);
  CMButtonMake(5, 40, 200, 30, "BUTTON 2", BUTTON_1);
  CMButtonMake(5, 75, 200, 30, "BUTTON 3", BUTTON_1);

  while (CGWindowIsOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);
    CMButtonUpdate();

    glUseProgram(program);

    CGWindowUpdate();
  }

  glfwTerminate();

  return 0;
}
