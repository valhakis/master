#include <stdio.h>

#include "program.h"
#include "window.h"
#include "scrap.h"

int scrap_create_and_render_box() {

  static bool done = false;
  static int program = program_get();

  static float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    +0.5f, -0.5f, 0.0f,
    +0.5f, +0.5f, 0.0f,
    -0.5f, +0.5f, 0.0f,
  };

  static unsigned int indices[] = {
    0, 1, 2,
    0, 2, 3,
  };

  static unsigned int vbo, vao, ebo;
  if (!done) {
    glGenVertexArrays(1, &vao);
    glGenBuffers(1, &vbo);
    glGenBuffers(1, &ebo);

    glBindVertexArray(vao);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);

    glBindBuffer(GL_ARRAY_BUFFER, 0);
    glBindVertexArray(0);
    done = true;
  }

  glUseProgram(program);
  glBindVertexArray(vao);

  program_load_identity_mvp();

  program_set_m_color3f(1.0f, 0.0f, 0.0f);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

  return 0;
}

int scrap_create_and_render_triangle() {
  static bool done = false;
  static float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    +0.5f, -0.5f, 0.0f,
    +0.0f, +0.5f, 0.0f,
  };
  static uint vbo, vao;
  static int program = program_get();

  if (!done) {
    glGenVertexArrays(1, &vao);
    glGenBuffers(1, &vbo);

    glBindVertexArray(vao);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    glBindVertexArray(0);

    done = true;
  }
  glUseProgram(program);
  glBindVertexArray(vao);

  program_load_identity_mvp();

  program_set_m_color3f(1.0f, 0.0f, 0.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  glBindVertexArray(0);
  glUseProgram(0);

  return 0;
}

int scrap_create_and_render_blue_triangle() {
  static bool done = false;
  static float vertices[] = {
    -0.25, -0.25, 0.0f,
    +0.25, -0.25, 0.0f,
    +0.0f, +0.25, 0.0f,
  };
  static uint vbo, vao;
  static int program = program_get();

  if (!done) {
    glGenVertexArrays(1, &vao);
    glGenBuffers(1, &vbo);

    glBindVertexArray(vao);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);
    glBindVertexArray(0);

    done = true;
  }
  glUseProgram(program);
  glBindVertexArray(vao);

  program_load_identity_mvp();

  program_set_m_color3f(0.0f, 0.0f, 1.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  glBindVertexArray(0);
  glUseProgram(0);

  return 0;
}

int scrap_draw_box_at_cursor() {
  static int program = program_get();
  static float done = false;
  static float mouse_x, mouse_y;
  static uint vbo, vao, ebo;

  static float vertices[] = {
    -50.0f, -50.0f, 0.0f,
    +50.0f, -50.0f, 0.0f,
    +50.0f, +50.0f, 0.0f,
    -50.0f, +50.0f, 0.0f,
  };

  static unsigned int indices[] = {
    0, 1, 2,
    0, 2, 3,
  };

  if (!done) {
    glGenVertexArrays(1, &vao);
    glGenBuffers(1, &vbo);
    glGenBuffers(1, &ebo);

    glBindVertexArray(vao);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

    glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
    glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
    glEnableVertexAttribArray(0);

    glBindBuffer(GL_ARRAY_BUFFER, 0);
    glBindVertexArray(0);

    done = true;
  }

  window_get_mouse_position(&mouse_x, &mouse_y);
  // printf("mouse: [%.2f, %.2f].\n", mouse_x, mouse_y);

  glUseProgram(program);
  glBindVertexArray(vao);

  program_load_identity_mvp();

  program_projection_ortho();
  program_model_translatef(mouse_x, mouse_y, 0.0f);
  program_set_m_color3f(1.0f, 1.0f, 0.0f);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

  return 0;
}

void scrap_draw_random_lines() {
  static float done = false;

  if (!done) {
    done = true;
  }

  return;
}

