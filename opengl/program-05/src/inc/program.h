#ifndef MY_PROGRAM_H
#define MY_PROGRAM_H

#include <stdio.h>
#include <stdlib.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

int program_initialize();
int program_get();
void program_set_m_color3f(float r, float g, float b);
void program_projection_ortho();
void program_model_translatef(float x, float y, float z);
void program_load_identity_mvp();

#endif
