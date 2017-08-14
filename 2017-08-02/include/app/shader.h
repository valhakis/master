#ifndef MY_SHADER_H
#define MY_SHADER_H

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int create_program(const char *vpath, const char *fpath);
int create_shader(GLenum type, const char *path);

#endif
