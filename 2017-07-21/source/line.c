#include <local/line.h>
#include <stdio.h>

static GLuint program, vao, vbo;

struct {
  float model[4][4];
} matrix;

struct {
  GLint color;
  GLint model;
  GLint view;
  GLint projection;
} uniform;

static float vertices[2][3] = {
  -0.9f, -0.0f, 0.0f,
  0.9f, -0.0f, 0.0f,
};

void MatIdentity(float m[4][4])
{
  m[0][0] = 1.0f;
  m[0][1] = 0.0f;
  m[0][2] = 0.0f;
  m[0][3] = 0.0f;

  m[1][0] = 0.0f;
  m[1][1] = 1.0f;
  m[1][2] = 0.0f;
  m[1][3] = 0.0f;

  m[2][0] = 0.0f;
  m[2][1] = 0.0f;
  m[2][2] = 1.0f;
  m[2][3] = 0.0f;

  m[3][0] = 1.0f;
  m[3][1] = 0.0f;
  m[3][2] = 0.0f;
  m[3][3] = 1.0f;

}

void LineInitialize(GLuint program)
{
  program = program;

  MatIdentity(matrix.model);

  uniform.model = glGetUniformLocation(program, "model");
  
  if (uniform.model == -1) 
  {
    printf("no such uniform 'model'.\n");
  }

  uniform.color = glGetUniformLocation(program, "color");
  
  if (uniform.color == -1) 
  {
    printf("no such uniform 'color'.\n");
  }

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

}

void LineRender()
{
  float matrix[4][4] = {
    0.0f, 0.0f, 0.0f, 1.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };

  glUseProgram(program);
  glBindVertexArray(vao);

  uniform.model = glGetUniformLocation(program, "model");

  glUniformMatrix4fv(uniform.model, 1, GL_FALSE, (float*)matrix);
  glUniform3f(uniform.color, 0.0f, 0.0f, 1.0f);

  glDrawArrays(GL_LINES, 0, 2);

  glBindVertexArray(0);
  glUseProgram(0);
}
