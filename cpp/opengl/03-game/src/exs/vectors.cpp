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

struct Rectangle {
  float position[3];
  float width;
  float height;
  float speed;
};

static float SetVec3v(float vec1[3], float vec2[3])
{
  vec1[0] = vec2[0]; vec1[1] = vec2[1]; vec1[2] = vec2[2];
}

static void Mat4MultiVec4(float R[4], const float M[4][4], const float V[4])
{
  R[0] = M[0][0]*V[0] + M[0][1]*V[1] + M[0][2]*V[2] + M[0][3]*V[3];
  R[1] = M[1][0]*V[0] + M[1][1]*V[1] + M[1][2]*V[2] + M[1][3]*V[3];
  R[2] = M[2][0]*V[0] + M[2][1]*V[1] + M[2][2]*V[2] + M[2][3]*V[3];
  R[3] = M[3][0]*V[0] + M[3][1]*V[1] + M[3][2]*V[2] + M[3][3]*V[3];
}

static void Mat4MultiVec3(float R[3], const float M[4][4], const float V[3])
{
  R[0] = M[0][0]*V[0] + M[0][1]*V[1] + M[0][2]*V[2] + M[0][3]*1.0f;
  R[1] = M[1][0]*V[0] + M[1][1]*V[1] + M[1][2]*V[2] + M[1][3]*1.0f;
  R[2] = M[2][0]*V[0] + M[2][1]*V[1] + M[2][2]*V[2] + M[2][3]*1.0f;
  R[3] = M[3][0]*V[0] + M[3][1]*V[1] + M[3][2]*V[2] + M[3][3]*1.0f;
}

static float black[3] = {0.3f, 0.3f, 0.3f};

static bool *keys;

static float vertices[4][3];
static bool is_collision = false;
static struct Rectangle rect1;
static struct Rectangle rect2;

static void render();

static unsigned int vao;

static float model[4][4] = {
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

static float distance(const float vec1[3], const float vec2[3])
{
  float x1 = vec1[0], y1 = vec1[1];
  float x2 = vec2[0], y2 = vec2[1];
  return sqrtf((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));
}

static void SetVec3(float vec[3], float x, float y, float z)
{
  vec[0] = x, vec[1] = y, vec[2] = z;
}

static void example(int count, ...)
{
  va_list arguments;
  va_start(arguments, count);
  for (int x=0; x<count; x++)
  {
    float *p = va_arg(arguments, float*);
    p[0]  = 1.0f, p[1]  = 0.0f, p[2]  = 0.0f, p[3]  = 0.0f;
    p[4]  = 0.0f, p[5]  = 1.0f, p[6]  = 0.0f, p[7]  = 0.0f;
    p[8]  = 0.0f, p[9]  = 0.0f, p[10] = 1.0f, p[11] = 0.0f;
    p[12] = 0.0f, p[13] = 0.0f, p[14] = 0.0f, p[15] = 1.0f;
  }
  va_end(arguments);
}

void ExVectorsInitialize()
{
  SetVec3(rect1.position, 0.5f, 0.0f, 0.0f);
  SetVec3(rect2.position, -0.5f, -0.5f, 0.0f);

  rect1.speed = 0.001f;
  rect2.speed = 0.001f;

  // from Polar Coordinates (r, θ) to Cartesian Coordinates (x, y)
  // x = r * cos(θ);
  // y = r * sin(θ);

  // from Cartesian Coordinates (x, y) to Polar Coordinates (r, θ);
  // r = sqrtf(x^2 + y^2);
  // θ = tan^-1 * (y / x);

  float tmp_vertices[4][3] = { 
    { -0.5f, 0.5f, 0.0f }, // vector 1   [A]
    { 0.5f, 0.5f, 0.0f }, // vector 2  [B]
    { 0.5f, -0.5f, 0.0f }, // vector 3  [C]
    { -0.5f, -0.5f, 0.0f }, // vector 4  [D]
  };
  memcpy(vertices, tmp_vertices, sizeof(vertices));
  unsigned int indices[2][3] = {
    0, 1, 2,
    0, 3, 2
  };

  // A                B
  // -----------------
  // |                |
  // |                |
  // |                |
  // |                |
  // |                |
  // |                |
  // ------------------
  // C                D

  float AB = distance(vertices[0], vertices[1]);
  float BD = distance(vertices[1], vertices[2]);
  float DC = distance(vertices[2], vertices[3]);
  float CA = distance(vertices[3], vertices[0]);

  rect1.width = AB;
  rect1.height = CA;

  rect2.width = AB;
  rect2.height = CA;

  // printf("AB: %.2f.\n", AB);
  // printf("BD: %.2f.\n", BD);
  // printf("DC: %.2f.\n", DC);
  // printf("CA: %.2f.\n", CA);

  float *vec1 = (float*)&vertices[0];
  float *vec2 = (float*)&vertices[1];

  float x1 = vec1[0]; float y1 = vec1[1];
  float x2 = vec2[0]; float y2 = vec2[1];

  // float distance = sqrtf((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1));

  // printf("vec1 magnitude: %.2f.\n", sqrtf(vec1[0]*vec1[0] + vec1[1]*vec1[1] + vec1[2]*vec1[2]));
  // printf("vec2 magnitude: %.2f.\n", sqrtf(vec2[0]*vec2[0] + vec2[1]*vec2[1] + vec2[2]*vec2[2]));
  // printf("vec1 + vec2: [%.2f, %.2f, %.2f].\n", vec1[0]+vec2[0], vec1[1]+vec2[1], vec1[2]+vec2[2]);
  // printf("vec1 + (- vec2): [%.2f, %.2f, %.2f].\n", vec1[0]+(-vec2[0]), vec1[1]+(-vec2[1]), vec1[2]+(-vec2[2]));
  // printf("vec1 * 3: [%.2f, %.2f, %.2f].\n", vec1[0]*3, vec1[1]*3, vec1[2]*3);
  // printf("Distance: %.2f.\n", distance);

  glGenVertexArrays(1, &vao);

  unsigned int vbo, ebo;
  glGenBuffers(1, &vbo);
  glGenBuffers(1, &ebo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(float) * 4 * 3, vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(unsigned int) * 2 * 3, indices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  ExRegisterRender(render);
}

static void render()
{
  WindowGetKeysPtr(&keys);

  if (keys[GLFW_KEY_I])
  {
    rect1.position[1] += rect1.speed;
  }
  if (keys[GLFW_KEY_J])
  {
    rect1.position[0] -= rect1.speed;
  }
  if (keys[GLFW_KEY_L])
  {
    rect1.position[0] += rect1.speed;
  }
  if (keys[GLFW_KEY_K])
  {
    rect1.position[1] -= rect1.speed;
  }

  if (keys[GLFW_KEY_W])
  {
    rect2.position[1] += rect2.speed;
  }
  if (keys[GLFW_KEY_A])
  {
    rect2.position[0] -= rect2.speed;
  }
  if (keys[GLFW_KEY_S])
  {
    rect2.position[1] -= rect2.speed;
  }
  if (keys[GLFW_KEY_D])
  {
    rect2.position[0] += rect2.speed;
  }

  bool x_collision = rect1.position[0]-rect1.width/2 + rect1.width >= rect2.position[0]-rect2.width/2 && rect2.position[0]-rect2.width/2 + rect2.width >= rect1.position[0]-rect1.width/2;
  bool y_collision = rect1.position[1]-rect1.height/2 + rect1.height >= rect2.position[1]-rect2.height/2 && rect2.position[1]-rect2.height/2 + rect2.height >= rect1.position[1]-rect1.width/2;

  if (x_collision)
  {
    // printf("x collision.\n");
  } else {
    // printf("not x collision.\n");
  }

  if (y_collision)
  {
    // printf("y collision.\n");
  } else {
    // printf("not y collision.\n");
  }

  if (x_collision && y_collision)
    is_collision = true;
  else
    is_collision = false;

  if (is_collision)
  {
    // printf("collision.\n");
  } else {
    // printf("not collision.\n");
  }

  glUseProgram(ProgramFind("default"));
  glBindVertexArray(vao);
  float color[3];
  float position[3];

  glPointSize(10);

  ValMat4SetIdentityf(3, model, view, projection);

  // rectangle 1

  if (is_collision)
  {
    SetVec3v(color, black);
  } else {
    SetVec3(color, 0.3f, 0.3f, 1.0f);
  }
  ValMat4Scale(model, 0.2f);
  ValMat4TransformVec3(model, rect1.position);

  // rect1.width = 1.0f * 3.0f;

  float vert1[3] = {vertices[0][0], vertices[0][1], vertices[0][2]};

  float M[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  ValMat4Scale(M, 0.2f);

  // printf("---------------------\n");
  //for (int x=0; x<4; x++)
  //{
    //for (int s=0; s<4; s++)
    //{
      //printf("%.2f ", M[x][s]);
    //}
    //putchar('\n');
  //}
  float A[3], *V = vertices[0];
  A[0] = M[0][0]*V[0] + M[0][1]*V[1] + M[0][2]*V[2] + M[0][3]*1.0f;
  A[1] = M[1][0]*V[0] + M[1][1]*V[1] + M[1][2]*V[2] + M[1][3]*1.0f;
  A[2] = 0.0f;

  // printf("A: [%.2f, %.2f, %.2f].\n", A[0], A[1], A[2]);

  float B[3];
  V = vertices[1];
  B[0] = M[0][0]*V[0] + M[0][1]*V[1] + M[0][2]*V[2] + M[0][3]*1.0f;
  B[1] = M[1][0]*V[0] + M[1][1]*V[1] + M[1][2]*V[2] + M[1][3]*1.0f;
  B[2] = 0.0f;

  // printf("B: [%.2f, %.2f, %.2f].\n", B[0], B[1], B[2]);

  float C[3];
  V = vertices[3];
  C[0] = M[0][0]*V[0] + M[0][1]*V[1] + M[0][2]*V[2] + M[0][3]*1.0f;
  C[1] = M[1][0]*V[0] + M[1][1]*V[1] + M[1][2]*V[2] + M[1][3]*1.0f;
  C[2] = 0.0f;

  // printf("C: [%.2f, %.2f, %.2f].\n", C[0], C[1], C[2]);

  rect1.width = distance(A, B);
  rect1.height = distance(A, C);
  // printf("RECT 1: [%.2f, %.2f].\n", rect1.width, rect1.height);
  // printf("RECT 2: [%.2f, %.2f].\n", rect2.width, rect2.height);

  // ValMat4Scale(M, 0.2f);

  //float result[3];
  //Mat4MultiVec3(result, M, vert1);
  //float A[3];
  //Mat4MultiVec3(A, M, vertices[0]);
  //A[0] = M[0][0]*vertices[0][0] + M[0][1]*vertices[0][1] + M[0][2]*vertices[0][2];
  //printf("A: [%.2f, %.2f, %.2f].\n", A[0]);
  //float B[3] = {vertices[1][0], vertices[1][1], vertices[1][2]};
  //Mat4MultiVec3(B, M, B);
  //float C[3] = {vertices[3][0], vertices[3][1], vertices[3][2]};
  //Mat4MultiVec3(C, M, C);
  //float AB = distance(A, B);
  //printf("B: [%.2f, %.2f, %.2f].\n", B[0], B[1], B[2]);
  //printf("C: [%.2f, %.2f, %.2f].\n", C[0], C[1], C[2]);
  //printf("rect1.width: %.2f.\n", rect1.width);
  //printf("rect1.height: %.2f.\n", rect1.height);
  //rect1.width = distance(A, B);
  //rect1.height = distance(A, C);

  // A                B
  // -----------------
  // |                |
  // |                |
  // |                |
  // |                |
  // |                |
  // |                |
  // ------------------
  // C                D

  // mat4 model * vector 1
  // mat4 model * vector 2
  // mat4 model * vector 3

  //float CA = distance(vertices[3], vertices[0]);

  //rect1.width = AB;
  //rect1.height = CA;

  //rect2.width = AB;
  //rect2.height = CA;

  glUniform3fv(ValGetUniform(ProgramFind("default"), "xColor"), 1, color);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "model"), 1, GL_FALSE, (float *)model);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "view"), 1, GL_FALSE, (float *)view);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "projection"), 1, GL_FALSE, (float *)projection);

  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  SetVec3(color, 0.3f, 0.3f, 0.3f);
  glUniform3fv(ValGetUniform(ProgramFind("default"), "xColor"), 1, color);
  glDrawArrays(GL_POINTS, 0, 4);

  // rectangle 2

  ValMat4SetIdentityf(3, model, view, projection);

  if (is_collision)
  {
    SetVec3v(color, black);
  } else {
    SetVec3(color, 0.9f, 0.3f, 0.3f);
  }
  ValMat4TransformVec3(model, rect2.position);

  glUniform3fv(ValGetUniform(ProgramFind("default"), "xColor"), 1, color);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "model"), 1, GL_FALSE, (float *)model);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "view"), 1, GL_FALSE, (float *)view);
  glUniformMatrix4fv(ValGetUniform(ProgramFind("default"), "projection"), 1, GL_FALSE, (float *)projection);

  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  SetVec3(color, 0.3f, 0.3f, 0.3f);
  glUniform3fv(ValGetUniform(ProgramFind("default"), "xColor"), 1, color);
  glDrawArrays(GL_POINTS, 0, 4);

  glBindVertexArray(0);
  glUseProgram(0);
}
