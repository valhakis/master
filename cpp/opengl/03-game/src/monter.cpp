#include "inc/monster.h"
#include "inc/program.h"
#include "inc/window.h"
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <valhakis.h>
#include <stdlib.h>
#include <stdio.h>
#include <math.h>
#include <string.h>

struct Monster {
  float position[3];
  float color[3];
  float speed;
  float rotation[3];
};

static void Set3f(float vec[3], float x, float y, float z)
{
  vec[0] = x, vec[1] = y, vec[2] = z;
}

static void SetMat4Identity(float mat[4][4])
{
  mat[0][0] = 1.0f; mat[0][1] = 0.0f; mat[0][2] = 0.0f; mat[0][3] = 0.0f;
  mat[1][0] = 0.0f; mat[1][1] = 1.0f; mat[1][2] = 0.0f; mat[1][3] = 0.0f;
  mat[2][0] = 0.0f; mat[2][1] = 0.0f; mat[2][2] = 1.0f; mat[2][3] = 0.0f;
  mat[3][0] = 0.0f; mat[3][1] = 0.0f; mat[3][2] = 0.0f; mat[3][3] = 1.0f;
}

// [0][0] [0][1] [0][2] [0][3]    [0][0] [0][1] [0][2] [0][3]
// [1][0] [1][1] [1][2] [1][3]    [1][0] [1][1] [1][2] [1][3] 
// [2][0] [2][1] [2][2] [2][3]    [2][0] [2][1] [2][2] [2][3] 
// [3][0] [3][1] [3][2] [3][3]    [3][0] [3][1] [3][2] [3][3] 

// [0][0] = A[0][0]*B[0][0] + A[0][1]*B[1][0] + A[0][2]*B[2][0] + A[0][3]*B[3][0]
// [0][1] = A[0][0]*B[0][1] + A[0][1]*B[1][1] + A[0][2]*B[2][1] + A[0][3]*B[3][1]
// [0][1] = A[0][0]*B[0][2] + A[0][1]*B[1][2] + A[0][2]*B[2][2] + A[0][3]*B[3][2]
// [0][1] = A[0][0]*B[0][3] + A[0][1]*B[1][3] + A[0][2]*B[2][3] + A[0][3]*B[3][3]

// [1][0] = A[1][0]*B[0][0] + A[1][1]*B[1][0] + A[1][2]*B[2][0] + A[1][3]*B[3][0]
// [1][1] = A[1][0]*B[0][1] + A[1][1]*B[1][1] + A[1][2]*B[2][1] + A[1][3]*B[3][1]
// [1][1] = A[1][0]*B[0][2] + A[1][1]*B[1][2] + A[1][2]*B[2][2] + A[1][3]*B[3][2]
// [1][1] = A[1][0]*B[0][3] + A[1][1]*B[1][3] + A[1][2]*B[2][3] + A[1][3]*B[3][3]

// [2][0] = A[2][0]*B[0][0] + A[2][1]*B[1][0] + A[2][2]*B[2][0] + A[2][3]*B[3][0]
// [2][1] = A[2][0]*B[0][1] + A[2][1]*B[1][1] + A[2][2]*B[2][1] + A[2][3]*B[3][1]
// [2][1] = A[2][0]*B[0][2] + A[2][1]*B[1][2] + A[2][2]*B[2][2] + A[2][3]*B[3][2]
// [2][1] = A[2][0]*B[0][3] + A[2][1]*B[1][3] + A[2][2]*B[2][3] + A[2][3]*B[3][3]

// [3][0] = A[3][0]*B[0][0] + A[3][1]*B[1][0] + A[3][2]*B[2][0] + A[3][3]*B[3][0]
// [3][1] = A[3][0]*B[0][1] + A[3][1]*B[1][1] + A[3][2]*B[2][1] + A[3][3]*B[3][1]
// [3][1] = A[3][0]*B[0][2] + A[3][1]*B[1][2] + A[3][2]*B[2][2] + A[3][3]*B[3][2]
// [3][1] = A[3][0]*B[0][3] + A[3][1]*B[1][3] + A[3][2]*B[2][3] + A[3][3]*B[3][3]

static void Mat4Flip(float M[4][4])
{
  // [0][0] [0][1] [0][2] [0][3]    [0][0] [1][0] [2][0] [3][0]
  // [1][0] [1][1] [1][2] [1][3]    [0][1] [1][1] [2][1] [3][1] 
  // [2][0] [2][1] [2][2] [2][3]    [0][2] [1][2] [2][2] [3][2] 
  // [3][0] [3][1] [3][2] [3][3]    [0][3] [1][3] [2][3] [3][3] 

  float T[4][4];
  memcpy(T, M, sizeof(T));

  M[0][0] = T[0][0], M[0][1] = T[1][0], M[0][2] = T[2][0], M[0][3] = T[3][0];
  M[1][0] = T[0][1], M[1][1] = T[1][1], M[1][2] = T[2][1], M[1][3] = T[3][1];
  M[2][0] = T[0][2], M[2][1] = T[1][2], M[2][2] = T[2][2], M[2][3] = T[3][2];
  M[3][0] = T[0][3], M[3][1] = T[1][3], M[3][2] = T[2][3], M[3][3] = T[3][3];
}

static void MultiMat4ByMat4(float C[4][4], float B[4][4])
{
  float A[4][4];
  memcpy(A, C, sizeof(A));

  C[0][0] = A[0][0]*B[0][0] + A[0][1]*B[1][0] + A[0][2]*B[2][0] + A[0][3]*B[3][0];
  C[0][1] = A[0][0]*B[0][1] + A[0][1]*B[1][1] + A[0][2]*B[2][1] + A[0][3]*B[3][1];
  C[0][2] = A[0][0]*B[0][2] + A[0][1]*B[1][2] + A[0][2]*B[2][2] + A[0][3]*B[3][2];
  C[0][3] = A[0][0]*B[0][3] + A[0][1]*B[1][3] + A[0][2]*B[2][3] + A[0][3]*B[3][3];

  C[1][0] = A[1][0]*B[0][0] + A[1][1]*B[1][0] + A[1][2]*B[2][0] + A[1][3]*B[3][0];
  C[1][1] = A[1][0]*B[0][1] + A[1][1]*B[1][1] + A[1][2]*B[2][1] + A[1][3]*B[3][1];
  C[1][2] = A[1][0]*B[0][2] + A[1][1]*B[1][2] + A[1][2]*B[2][2] + A[1][3]*B[3][2];
  C[1][3] = A[1][0]*B[0][3] + A[1][1]*B[1][3] + A[1][2]*B[2][3] + A[1][3]*B[3][3];

  C[2][0] = A[2][0]*B[0][0] + A[2][1]*B[1][0] + A[2][2]*B[2][0] + A[2][3]*B[3][0];
  C[2][1] = A[2][0]*B[0][1] + A[2][1]*B[1][1] + A[2][2]*B[2][1] + A[2][3]*B[3][1];
  C[2][2] = A[2][0]*B[0][2] + A[2][1]*B[1][2] + A[2][2]*B[2][2] + A[2][3]*B[3][2];
  C[2][3] = A[2][0]*B[0][3] + A[2][1]*B[1][3] + A[2][2]*B[2][3] + A[2][3]*B[3][3];

  C[3][0] = A[3][0]*B[0][0] + A[3][1]*B[1][0] + A[3][2]*B[2][0] + A[3][3]*B[3][0];
  C[3][1] = A[3][0]*B[0][1] + A[3][1]*B[1][1] + A[3][2]*B[2][1] + A[3][3]*B[3][1];
  C[3][2] = A[3][0]*B[0][2] + A[3][1]*B[1][2] + A[3][2]*B[2][2] + A[3][3]*B[3][2];
  C[3][3] = A[3][0]*B[0][3] + A[3][1]*B[1][3] + A[3][2]*B[2][3] + A[3][3]*B[3][3];
}

static void Mat4RotateX(float M[4][4], float a)
{
  float T[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, cosf(a), -sinf(a), 0.0f,
    0.0f, sinf(a), cosf(a), 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  Mat4Flip(M);
  MultiMat4ByMat4(M, T);
}

static void Mat4RotateY(float M[4][4], float a)
{
  float T[4][4] = {
    cosf(a), 0.0f, sinf(a), 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    -sinf(a), 0.0f, cosf(a), 1.0f,
  };
  Mat4Flip(M);
  MultiMat4ByMat4(M, T);
}

static void Mat4RotateZ(float M[4][4], float a)
{
  float T[4][4] = {
    cosf(a), -sinf(a), 0.0f, 0.0f,
    sinf(a), cosf(a), 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  Mat4Flip(M);
  MultiMat4ByMat4(M, T);
}

static void Mat4Scale(float M[4][4], float s)
{
  float T[4][4] = {
    s, 0.0f, 0.0f, 0.0f,
    0.0f, s, 0.0f, 0.0f,
    0.0f, 0.0f, s, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  MultiMat4ByMat4(M, T);
}

static void Mat4TransformVec3(float mat1[4][4], float vec[3])
{
  float mat2[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    vec[0], vec[1], vec[2], 1.0f,
  };
  MultiMat4ByMat4(mat1, mat2);
}

static Monster monster;
static int program;
static unsigned int vao;
static int uniform_xColor;
static int uni_model;
static int uni_view;
static int uni_projection;
static bool *keys;

static float model[4][4];
static float view[4][4];
static float projection[4][4];

void MonsterInitialize()
{
  Set3f(monster.position, 0.0f, 0.0f, 0.0f);
  Set3f(monster.rotation, 0.0f, 0.0f, 0.0f);
  Set3f(monster.color, 1.0f, 1.0f, 0.0f);
  monster.speed = 0.0005f;

  program = ProgramFind("default");
  WindowGetKeysPtr(&keys);

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

  // x. load uniform xColor
  uniform_xColor = ValGetUniform(program, "xColor");
  uni_model = ValGetUniform(program, "model");
  uni_view = ValGetUniform(program, "view");
  uni_projection = ValGetUniform(program, "projection");
}

void MonsterRender() 
{
  float time = glfwGetTime();

  glUseProgram(program);
  glBindVertexArray(vao);

  SetMat4Identity(model);
  SetMat4Identity(view);
  SetMat4Identity(projection);

  if (keys[GLFW_KEY_W]) {
    monster.position[1] += monster.speed;
  }
  if (keys[GLFW_KEY_A]) {
    monster.position[0] -= monster.speed;
  }
  if (keys[GLFW_KEY_S]) {
    monster.position[1] -= monster.speed;
  }
  if (keys[GLFW_KEY_D]) {
    monster.position[0] += monster.speed;
  }

  if (keys[GLFW_KEY_Q]) {
    monster.rotation[0] += monster.speed;
  }
  if (keys[GLFW_KEY_E]) {
    monster.rotation[0] -= monster.speed;
  }

  if (keys[GLFW_KEY_Z]) {
    monster.rotation[1] += monster.speed;
  }
  if (keys[GLFW_KEY_X]) {
    monster.rotation[1] -= monster.speed;
  }

  if (keys[GLFW_KEY_R]) {
    monster.rotation[2] += monster.speed;
  }
  if (keys[GLFW_KEY_T]) {
    monster.rotation[2] -= monster.speed;
  }

  Mat4RotateX(model, monster.rotation[0]);
  Mat4RotateY(model, monster.rotation[1]);
  Mat4RotateZ(model, monster.rotation[2]);
  Mat4Scale(model, 0.2f);
  Mat4TransformVec3(model, monster.position);

  Set3f(monster.color, cos(time)/2.0f+0.5f, 1.0f, sinf(time)/2.0f+0.5f);
  glUniform3fv(uniform_xColor, 1, monster.color);

  glUniformMatrix4fv(uni_model, 1, GL_FALSE, (float*)model);
  glUniformMatrix4fv(uni_view, 1, GL_FALSE, (float*)view);
  glUniformMatrix4fv(uni_projection, 1, GL_FALSE, (float*)projection);

  glDrawArrays(GL_TRIANGLES, 0, 3);
  glBindVertexArray(0);
  glUseProgram(0);
}
