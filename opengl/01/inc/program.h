#ifndef MY_PROGRAM_H
#define MY_PROGRAM_H
#include <glad/glad.h>

int ProgramInitialize(const char *vpath, const char *fpath);
unsigned int ProgramGetDefault();
int ProgramSetUniform3f(const char *name, float a, float b, float c);
int ProgramLoadOrtho();
int ProgramLoadIdentity();
int ProgramSetColor3f(float r, float g, float b);
int ProgramSetColor3fv(const float c[3]);

#endif
