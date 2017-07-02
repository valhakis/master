#include <stdio.h>
#include <math.h>
#include <stdarg.h>
#include <valhakis.h>
#include <stdbool.h>
#include "../inc/exs.h"
#include "../inc/program.h"
#include "../inc/window.h"
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

int sample()
{
  float start[3] = {};
  float end[3] = {};
  float speed = 0.01f;
  float elapsed = 0.01f;
}

static float distance(const float vec1[3], const float vec2[3])
{
  float x1 = vec1[0], y1 = vec1[1];
  float x2 = vec2[0], y2 = vec2[1];
  return sqrtf((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

static int screenWidth, screenHeight;

static float newPosition[3] = {0.0f, 0.0f, 0.0f};
static float oldPosition[3] = {0.0f, 0.0f, 0.0f};

static struct {
  float position[3];
  float positionA[3];
  float color[3];
} cursor;

static unsigned int vbos[2], ebo;
static unsigned int vaos[2];
static void render();

// A                B
// -----------------
// |                |
// |                |
// |                |
// |                |
// |                |
// |                |
// ------------------
// D                C

static float model[4][4], view[4][4], projection[4][4];

static float vertices[4][3] = {
  { -0.5f, +0.5f, +0.0f, },  // vertex 1  [A]
  { +0.5f, +0.5f, +0.0f, },  // vertex 2  [B]
  { +0.5f, -0.5f, +0.0f, },  // vertex 3  [C]
  { -0.5f, -0.5f, +0.0f, },  // vertex 4  [D]
};

static float line_vertices[2][3] = {
  -0.5f, +0.0f, +0.0f,
  +0.5f, +0.0f, +0.0f,
};

static unsigned int indices[2][3] = {
  { 0, 1, 2, }, // A - B - C
  { 0, 3, 2, }, // A - D - C
};

static bool set_vertices = true;

static void mousepress(int button, int action)
{
  if (action == GLFW_PRESS)
  {
    float vertices[2][3] = {
      newPosition[0], newPosition[1], newPosition[2],
      oldPosition[0], oldPosition[1], oldPosition[2], 
    };

    // printf("button: %d.\n", button);
    printf("[%.2f, %.2f].\n", cursor.positionA[0], cursor.positionA[1]);
    // memcpy(oldPosition, newPosition, sizeof(oldPosition));

    ValSetVec3v(newPosition, cursor.positionA);

    printf("Magnitude / Distance: %.2f.\n", distance(oldPosition, newPosition));

    set_vertices = true;
  }
}

void ExCursorInitialize()
{
  WindowRegisterMousePress(mousepress);
  WindowGetDimensions(&screenWidth, &screenHeight);
  glGenVertexArrays(2, vaos);

  glGenBuffers(2, vbos);
  glGenBuffers(1, &ebo);

  glBindVertexArray(vaos[0]);
  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(float) * 4 * 3, vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(unsigned int) * 2 * 3, indices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  glBindVertexArray(vaos[1]);
  glBindBuffer(GL_ARRAY_BUFFER, vbos[1]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(float) * 2 * 3, NULL, GL_DYNAMIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);

  glBindVertexArray(0);
  ExRegisterRender(render);
}

static void render()
{
  WindowGetCursorPosition(&cursor.position[0], &cursor.position[1]);
  cursor.positionA[0] = cursor.position[0] / (screenWidth/2) - 1.0;
  cursor.positionA[1] = -(cursor.position[1] / (screenHeight/2) - 1.0);
  cursor.positionA[2] = 0.0f;
  // printf("Cursor position: %.2f, %.2f.\n", cursor.position[0], cursor.position[1]);

  //if (oldPosition[0] < newPosition[0]) {
  //oldPosition[0] += 0.0001f;
  //} 
  //if (oldPosition[0] > newPosition[0]) {
  //oldPosition[0] -= 0.0001f;
  //}
  //if (oldPosition[1] < newPosition[1]) {
  //oldPosition[1] += 0.0001f;
  //} 
  //if (oldPosition[1] > newPosition[1]) {
  //oldPosition[1] -= 0.0001f;
  //}

  float angle = 0.0f;
  angle = atan2(newPosition[1] - oldPosition[1], newPosition[0] - oldPosition[0]);
  angle = angle * (180/M_PI);

  glUseProgram(ProgramFind("default"));
  glBindVertexArray(vaos[0]);

  ValMat4SetIdentityf(3, model, view, projection);
  ValMat4Scale(model, 0.05f);
  ValMat4TransformVec3(model, newPosition);

  ValSetVec3(cursor.color, 0.3f, 0.3f, 0.3f);
  glUniform3fv(ValGetUniform(ProgramFind("default"), "xColor"), 1, cursor.color);

  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "model"), 1, GL_FALSE, (float *)model);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "view"), 1, GL_FALSE, (float *)view);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "projection"), 1, GL_FALSE, (float *)projection);

  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

  ValMat4SetIdentityf(3, model, view, projection);
  ValMat4Scale(model, 0.05f);
  ValMat4TransformVec3(model, oldPosition);

  ValSetVec3(cursor.color, 0.3f, 0.3f, 0.3f);
  glUniform3fv(ValGetUniform(ProgramFind("default"), "xColor"), 1, cursor.color);

  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "model"), 1, GL_FALSE, (float *)model);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "view"), 1, GL_FALSE, (float *)view);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "projection"), 1, GL_FALSE, (float *)projection);

  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

  // line
  glBindVertexArray(vaos[1]);

  ValMat4SetIdentityf(3, model, view, projection);

  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "model"), 1, GL_FALSE, (float *)model);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "view"), 1, GL_FALSE, (float *)view);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "projection"), 1, GL_FALSE, (float *)projection);

  if (set_vertices)
  {
    glBindBuffer(GL_ARRAY_BUFFER, vbos[1]);
    float vertices[2][3] = {
      newPosition[0], newPosition[1], newPosition[2], 
      oldPosition[0], oldPosition[1], oldPosition[2], 
    };
    glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(vertices), vertices);
    set_vertices = false;
  }

  glDrawArrays(GL_LINES, 0, 2);

  glBindVertexArray(0);
  glUseProgram(0);
}

