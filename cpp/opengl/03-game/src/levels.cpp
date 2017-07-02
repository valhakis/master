#include <stdio.h>
#include <math.h>
#include <string.h>
#include <valhakis.h>
#include "inc/exs.h"
#include "inc/program.h"

static enum {
  CIRCLE_VBO = 0
} Vbos;

static void PrintVertices(float *vertices, size_t size);
static void LevelsRender();

static int num_segments = 20;
static float model[4][4], view[4][4], projection[4][4];
static unsigned int vaos[2], vbos[2], ebos[2];
static float color[3];
static int program;
static float vertices[6][3] = {

  // B                C
  // -----------------
  // |                |
  // |                |
  // |                |
  // |                |
  // |                |
  // |                |
  // ------------------
  // A                D

  // rectangle
  -0.5f, -0.5f, 0.0f, // A
  -0.5f, +0.5f, 0.0f, // B
  +0.5f, +0.5f, 0.0f, // C
  +0.5f, -0.5f, 0.0f, // D

  // E ------------- F

  // a line
  -1.0f, 0.0f, 0.0f, // E
  +1.0f, 0.0f, 0.0f, // F
};

static unsigned int indices[2][3] = {
  0, 1, 2,
  0, 3, 2,
};

void LevelsInitialize()
{
  ExRegisterRender(LevelsRender);
  program = ProgramFind("default");

  glGenVertexArrays(2, vaos);
  glGenBuffers(2, vbos);
  glGenBuffers(2, ebos);

  glBindBuffer(GL_ARRAY_BUFFER, vbos[CIRCLE_VBO]);
  float r = 0.9f;

  float vertices[num_segments][3];

  // create circle vbo
  for (int n=0; n<num_segments; n++)
  {
    float theta = 2.0f * M_PI * float(n) / float(num_segments);
    float x = r * cosf(theta);
    float y = r * sinf(theta);

    vertices[n][0] = x;
    vertices[n][1] = y;
    vertices[n][2] = 0.0f;
  }
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  PrintVertices((float *)vertices, sizeof(vertices));

  glBindVertexArray(vaos[0]);
  glBindBuffer(GL_ARRAY_BUFFER, vbos[CIRCLE_VBO]);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindVertexArray(0);
}

static void LevelsRender()
{
  glUseProgram(program);
  glBindVertexArray(vaos[0]);
  ValMat4SetIdentityf(3, model, view, projection);
  SetVec3(color, 1.0f, 1.0f, 0.0f);

  SetUniformMatrix4fv(program, "model", (float*)model);
  SetUniformMatrix4fv(program, "view", (float*)view);
  SetUniformMatrix4fv(program, "projection", (float*)projection);

  SetUniform3fv(program, "xColor", color);
  for (int n=0; n<num_segments; n++)
  {
    glDrawArrays(GL_POINTS, n, 1);
  }

  // draw circle
  SetVec3(color, 1.0f, 0.0f, 0.0f);

  SetUniformMatrix4fv(program, "model", (float*)model);
  SetUniformMatrix4fv(program, "view", (float*)view);
  SetUniformMatrix4fv(program, "projection", (float*)projection);

  SetUniform3fv(program, "xColor", color);

  glDrawArrays(GL_LINE_LOOP, 0, num_segments);

  glBindVertexArray(0);
  glUseProgram(0);
}

static void PrintVertices(float *vertices, size_t size)
{
  float V[size][3];
  memcpy(V, vertices, sizeof(V));
  int count = size / (sizeof(float) * 3);
  for (int n=0; n<count; n++)
  {
    printf("vertex[%d]: {%.2f, %.2f, %.2f}\n", n, V[n][0], V[n][1], V[n][2]);
  }
  // printf("count: %d.\n", count);
}
