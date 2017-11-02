#include <glad/glad.h>
#include "program.h"

static unsigned int vao, vbo;

int ScrapInitialize() {
  float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    +0.5f, -0.5f, 0.0f,
    +0.0f, +0.5f, 0.0f,
  };

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

int ScrapUpdate() {

  glUseProgram(ProgramGetDefault());
  glBindVertexArray(vao);

  ProgramLoadIdentity();
  ProgramSetUniform3f("mColor", 1.0f, 0.0f, 0.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);
}
