#include "inc/program.h"
#include "inc/main.h"
#include <valhakis.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static unsigned int vao;
static bool enabled = false;

void TriangleInitialize()
{
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

void TriangleRender()
{
  if (enabled) 
  {
    glUseProgram(ProgramFind("default"));
    glBindVertexArray(vao);
    glDrawArrays(GL_TRIANGLES, 0, 3);
    glBindVertexArray(0);
    glUseProgram(0);
  }
}

void TriangleTerminate()
{

}

