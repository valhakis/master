#include <stdio.h>
#include <valhakis.h>
#include <stdbool.h>
#include "../inc/exs.h"
#include "../inc/program.h"
#include "../inc/window.h"
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>


static bool enabled = true;
static unsigned int vao;
static float model[4][4];
static float view[4][4];
static float projection[4][4];
static void render();

static void SetVec3(float *vec, float x, float y, float z)
{
  vec[0] = x; vec[1] = y; vec[2] = z;
}

static void Mat4Ortho(float M[4][4], float left, float right, float bottom, float top, float zNear, float zFar)
{

}

static void Mat4Print(const float *M)
{
  for (int x=0; x<4; x++)
  {
    for (int z=0; z<4; z++)
    {
      printf("%.2f ", *(M + x+z+x*3));
    }
    putchar('\n');
  }
  printf("-----------------------\n");
}

static void Mat4Set(float M[4][4], const float *T)
{
  memcpy(M, T, sizeof(float) * 4 * 4);
}

static void SetExampleMatrix(float M[4][4])
{

}

void ExOrthoInitialize()
{
  ExRegisterRender(render);

  float vertices[6][3];
  ValLoadVertices("TRIANGLE 2", "data/vertices", (float *)vertices, sizeof(vertices));

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
  int width, height;
  if (!enabled) 
  {
    return;
  }
  WindowGetDimensions(&width, &height);

  glUseProgram(ProgramFind("default"));
  glBindVertexArray(vao);

  ValSetMat4Identity(view);
  ValSetMat4Identity(projection);
  SetExampleMatrix(projection);
  // Mat4Set(projection, glm::value_ptr(glm::ortho(0.0f, (float)width, 0.0f, (float)height, 0.1f, 100.0f)));
  // Mat4Print((float *)projection);

  ValSetMat4Identity(model);
  // float position[3] = {100.0f, 100.0f, 0.0f};
  // ValMat4TransformVec3(model, position);
  // ValMat4Scale(model, 0.5);

  ValSetUniformMatrix4fv(ProgramFind("default"), "model", (float*) model);
  ValSetUniformMatrix4fv(ProgramFind("default"), "view", (float*) view);
  ValSetUniformMatrix4fv(ProgramFind("default"), "projection", (float*) projection);
  
  float color[3];

  SetVec3(color, 0.3f, 0.8f, 0.5f);
  ValSetUniform3fv(ProgramFind("default"), "xColor", color);

  glDrawArrays(GL_TRIANGLES, 0, 3);

  SetVec3(color, 0.8f, 0.8f, 0.5f);
  ValSetUniform3fv(ProgramFind("default"), "xColor", color);
  glDrawArrays(GL_TRIANGLES, 3, 3);

  glBindVertexArray(0);
  glUseProgram(0);
}
