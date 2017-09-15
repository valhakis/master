#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <linmath.h>

#include <math.h>

static int program;
static struct {
  int model;
  int view;
  int projection;
} uni;

static float speed = 0.005f;
static float angle = 0.0f;
static float offsetX = 10.0f;
static float offsetY = 10.0f;

static vec3 pos = {0.0f, 0.0f, -35.0f};

static mat4x4 model = {
  1.0f, 0.0f, 0.0f, 0.0f,
  0.0f, 1.0f, 0.0f, 0.0f,
  0.0f, 0.0f, 1.0f, 0.0f,
  0.0f, 0.0f, 0.0f, 1.0f,
};
static float view[4][4] = {
  1.0f, 0.0f, 0.0f, 0.0f,
  0.0f, 1.0f, 0.0f, 0.0f,
  0.0f, 0.0f, 1.0f, 0.0f,
  0.0f, 0.0f, 0.0f, 1.0f,
};
static float projection[4][4] = {
  1.0f, 0.0f, 0.0f, 0.0f,
  0.0f, 1.0f, 0.0f, 0.0f,
  0.0f, 0.0f, 1.0f, 0.0f,
  0.0f, 0.0f, 0.0f, 1.0f,
};
static unsigned int vbo, vao;
static float vertices[300][5];

void MiscInitExample04(int _program) {
  program = _program;

  glUseProgram(program);

  uni.model = glGetUniformLocation(program, "model");
  uni.view = glGetUniformLocation(program, "view");
  uni.projection = glGetUniformLocation(program, "projection");

  for (int i=0; i<300; i++) {
    float angle = 2 * M_PI * i / (300-1);
    float x = cosf(angle);
    float y = sinf(angle);

    vertices[i][0] = x;
    vertices[i][1] = y;
    vertices[i][2] = 0.0f;
    vertices[i][3] = 1.0f;
    vertices[i][4] = 1.0f;
  }

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao); 

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  // position attribute
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  // texture coord attribute
  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

void MiscUpdateExample04() {
  pos[0] = cosf(angle) * offsetX;
  pos[1] = sinf(angle) * offsetY;
  glBindVertexArray(vao);
  mat4x4_translate(model, pos[0], pos[1], pos[2]);
  glUniformMatrix4fv(uni.model, 1, GL_FALSE, (float*)model);
  glDrawArrays(GL_TRIANGLE_FAN, 0, 300);

  angle = glfwGetTime() * 5;
}
