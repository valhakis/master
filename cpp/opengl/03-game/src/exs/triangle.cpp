#include <stdio.h>
#include <valhakis.h>
#include <stdbool.h>
#include "../inc/exs.h"
#include "../inc/program.h"

static void render();
static bool enabled = true;
static unsigned int vao;

static float model[4][4];
static float view[4][4];
static float projection[4][4];

static float red[3] = {1.0f, 0.0f, 0.0f};

void ExTriangleInitialize()
{
  ExRegisterRender(render);

  float vertices[3][3];
  ValLoadVertices("TRIANGLE", "data/vertices", (float *)vertices, sizeof(vertices));

  unsigned int vbo;

  // x. generate buffers and arrays
  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  // x. copy vertices array in a vertex buffer for OpenGL to use
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  // x. set the vertex attributes pointers
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);  
  // x. unbind vao and vbo
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

static void render()
{
  if (!enabled) 
  {
    return;
  }

  glUseProgram(ProgramFind("default"));
  glBindVertexArray(vao);

  ValSetMat4Identity(model);
  ValSetMat4Identity(view);
  ValSetMat4Identity(projection);

  float position[3] = {0.0f, -1.4f, 0.0f};
  ValMat4TransformVec3(model, position);
  ValMat4Scale(model, 0.5);

  ValSetUniform3fv(ProgramFind("default"), "xColor", red);

  ValSetUniformMatrix4fv(ProgramFind("default"), "model", (float*) model);
  ValSetUniformMatrix4fv(ProgramFind("default"), "view", (float*) view);
  ValSetUniformMatrix4fv(ProgramFind("default"), "projection", (float*) projection);

  glDrawArrays(GL_TRIANGLES, 0, 3);
  glBindVertexArray(0);
  glUseProgram(0);
}
