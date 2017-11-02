#include "program.h"

static unsigned int vao, vbo;

int RectInitialize() {
  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(float)*6*3, NULL, GL_DYNAMIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

int rect(float x, float y, float w, float h) {

  float vertices[6][3] = {
    x, y, 0.0f,
    x+w, y, 0.0f,
    x, y+h, 0.0f,

    x+w, y, 0.0f,
    x+w, y+h, 0.0f,
    x, y+h, 0.0f,
  };

  glUseProgram(ProgramGetDefault());
  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(vertices), vertices);

  ProgramLoadOrtho();
  glDrawArrays(GL_TRIANGLES, 0, 6);
}

int RectWColor3f(float x, float y, float w, float h, float r, float g, float b) {
  ProgramSetColor3f(r, g, b);
  rect(x, y, w, h);
}

int RectWColor3fv(float x, float y, float w, float h, const float c[3]) {
  ProgramSetColor3fv(c);
  rect(x, y, w, h);
}
