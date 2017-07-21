#ifndef MY_LINE_H
#define MY_LINE_H

#include <glad/glad.h>
struct {
  GLuint program;
  GLuint vao, vbo;
  float vertices[2];
} line;

void LineInitialize(GLuint program);
void LineRender();

#endif
