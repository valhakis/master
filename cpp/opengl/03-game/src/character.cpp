#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include "inc/exs.h"
#include "inc/program.h"
#include "inc/window.h"
#include <valhakis.h>
#include <string.h>
#include <math.h>

static struct {
  float color[3];
  float speed;
  float position[3];
} character;

static void DrawLines();
static void CharacterDraw();
static void CharacterRender();
static void InitializeVao();
static void CharacterMovement();
static bool *keys;

static int program;
static unsigned int vaos[2], vbos[2], ebos[2];

static float model[4][4], view[4][4], projection[4][4];

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

  // a line
  -1.0f, 0.0f, 0.0f, // E
  +1.0f, 0.0f, 0.0f, // F
};

static unsigned int indices[2][3] = {
  0, 1, 2,
  0, 3, 2,
};

void CharacterInitialize()
{
  WindowGetKeysPtr(&keys);

  // set up character structure
  SetVec3(character.position, 0.0f, 0.5f, 0.0f);
  SetVec3(character.color, 0.0f, 1.0f, 0.0f);
  character.speed = 0.0003f;

  glGenVertexArrays(2, vaos);
  glGenBuffers(2, ebos);
  glGenBuffers(2, vbos);

  InitializeVao();

  program = ProgramFind("default");
  ExRegisterRender(CharacterRender);
}

static void CharacterRender()
{
  glUseProgram(program);

  glBindVertexArray(vaos[0]);

  CharacterDraw();
  DrawLines();

  CharacterMovement();

  glBindVertexArray(0);
  glUseProgram(0);
}

static void InitializeVao()
{
  // set up vbo
  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ARRAY_BUFFER, 0);

  // set up ebo
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebos[0]);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, vbos[0]);

  // set up vao
  glBindVertexArray(vaos[0]);
  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebos[0]);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindVertexArray(0);
}

static void CharacterDraw()
{
  ValMat4SetIdentityf(3, model, view, projection);
  SetUniform3fv(program, "xColor", character.color);
  Mat4Scale(model, 0.1f);
  Mat4Translate(model, character.position);

  // glDrawElements(enum mode, sizei count, enum type, void *indices);
  SetUniformMatrix4fv(program, "model", (float*)model);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  // glDrawArrays(enum mode, int first, sizei count);
}

static void DrawLines()
{
  float color[3];
  SetVec3(color, 0.0f, 0.0f, 1.0f);

  ValMat4SetIdentityf(3, model, view, projection);

  // draw line
  SetUniformMatrix4fv(program, "model", (float*)model);
  SetUniform3fv(program, "xColor", color);
  glDrawArrays(GL_LINES, 4, 2);

  ValMat4SetIdentityf(3, model, view, projection);
  //           |
  //           X
  //           |
  //           |
  //           |
  // ---O-------------O----
  //           |    
  //           |
  //           |
  //           X
  //           |

  float A = 90.0f;
  A = A * M_PI / 180.0f;

  float Rx[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, cosf(A), -sinf(A), 0.0f,
    0.0f, sinf(A), cosf(A), 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  Mat4Flip(Rx);

  float Ry[4][4] = {
    cosf(A), 0.0f, sinf(A), 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    -sinf(A), 0.0f, cosf(A), 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  Mat4Flip(Ry);

  float Rz[4][4] = {
    cosf(A), -sinf(A), 0.0f, 0.0f,
    sinf(A), cosf(A), 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  Mat4Flip(Rz);

  Mat4MultiMat4(model, Rz);

  // rotation matrix
  // R = [cos($), -sin($)]
  // R = [sin($), cos($)]


  SetVec3(color, 1.0f, 0.0f, 0.0f);

  // draw second line
  SetUniformMatrix4fv(program, "model", (float*)model);
  SetUniform3fv(program, "xColor", color);
  glDrawArrays(GL_LINES, 4, 2);
}

static void CharacterMovement()
{
  if (keys[GLFW_KEY_W] || keys[GLFW_KEY_I])
  {
    character.position[1] += character.speed;
  }
  if (keys[GLFW_KEY_A] || keys[GLFW_KEY_J])
  {
    character.position[0] -= character.speed;
  }
  if (keys[GLFW_KEY_S] || keys[GLFW_KEY_K])
  {
    character.position[1] -= character.speed;
  }
  if (keys[GLFW_KEY_D] || keys[GLFW_KEY_L])
  {
    character.position[0] += character.speed;
  }
}
