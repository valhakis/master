#include <glad/glad.h>

static int program;

static unsigned int vao;
static unsigned int vbo;

static float vertices[5] = {
  0.0f, 0.0f, 0.0f,   0.0f, 0.0f,
};

float matrix[4][4] = {
  1.0f, 0.0f, 0.0f, 0.0f,
  0.0f, 1.0f, 0.0f, 0.0f,
  0.0f, 0.0f, 1.0f, 0.0f,
  0.0f, 0.0f, 0.0f, 1.0f,
};

struct {
  int model;
  int view;
  int projection;
} uni;

enum Uniform {
  UNIFORM_MODEL = 0,
  UNIFORM_VIEW = 1,
  UNIFORM_PROJECTION = 2
};

static void LoadIdentity(enum Uniform uniform) {
  switch (uniform) {
    case UNIFORM_MODEL: glUniformMatrix4fv(uni.model, 1, GL_FALSE, (float*)matrix); break;
    case UNIFORM_VIEW: glUniformMatrix4fv(uni.view, 1, GL_FALSE, (float*)matrix); break;
    case UNIFORM_PROJECTION: glUniformMatrix4fv(uni.projection, 1, GL_FALSE, (float*)matrix); break;
    default: break;
  }
}

void MiscCenterDotInitialize(int _program) {
  program = _program;
  glUseProgram(program);

  uni.model = glGetUniformLocation(program, "model");
  uni.view = glGetUniformLocation(program, "view");
  uni.projection = glGetUniformLocation(program, "projection");

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  glBindVertexArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
}

void MiscCenterDotUpdate() {
  glUseProgram(program);
  glBindVertexArray(vao);
  LoadIdentity(UNIFORM_MODEL);
  LoadIdentity(UNIFORM_VIEW);
  LoadIdentity(UNIFORM_PROJECTION);

  glPointSize(3.0f);
  glDrawArrays(GL_POINTS, 0, 1);
  glPointSize(1.0f);

  glBindVertexArray(0);
}
