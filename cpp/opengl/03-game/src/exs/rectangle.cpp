#include <stdio.h>
#include <valhakis.h>
#include <stdbool.h>
#include "../inc/exs.h"
#include "../inc/program.h"

static void render();
static bool enabled = true;
static float model[4][4];
static float view[4][4];
static float projection[4][4];
static float yellow[3] = {1.0f, 1.0f, 0.0f};

void ExRectangleInitialize()
{
  ExRegisterRender(render);
}

static void render()
{
  if (!enabled) 
  {
    return;
  }

  glUseProgram(ProgramFind("default"));
  glBindVertexArray(ProgramFindVao("rectangle"));

  ValSetMat4Identity(model);
  ValSetMat4Identity(view);
  ValSetMat4Identity(projection);

  float position[3] = {1.5f, -1.4f, 0.0f};
  ValMat4TransformVec3(model, position);
  ValMat4Scale(model, 0.25);

  ValSetUniform3fv(ProgramFind("default"), "xColor", yellow);

  ValSetUniformMatrix4fv(ProgramFind("default"), "model", (float*) model);
  ValSetUniformMatrix4fv(ProgramFind("default"), "view", (float*) view);
  ValSetUniformMatrix4fv(ProgramFind("default"), "projection", (float*) projection);

  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  glBindVertexArray(0);
  glUseProgram(0);
}
