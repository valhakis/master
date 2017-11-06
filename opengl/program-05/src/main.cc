#include <stdio.h>
#include <stdlib.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "window.h"
#include "common.h"
#include "program.h"
#include "scrap.h"

static float width = 800.0f, height = 600.0f;

int main(int argc, char *argv[]) {
  window_initialize();

  GLFWwindow *window = window_return_pointer();

  program_initialize();

  int program = program_get();

  while (window_is_open()) {
    glClear(GL_COLOR_BUFFER_BIT);

    scrap_create_and_render_box();
    scrap_create_and_render_triangle();
    scrap_create_and_render_blue_triangle();
    scrap_draw_box_at_cursor();
    scrap_draw_random_lines();

    window_update();
  }

  glfwTerminate();

  return 0;
}
