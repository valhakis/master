#pragma once
#include <glad/glad.h>

int MisOpen();
int MClose();
int MError(const char *format, ...);
int MInitializeGLFW();
int MTerminate();
int MGLFWEvents();
char *MLoadSource(const char *path);
int MCreateProgram(const char *vpath, const char *fpath);
int MCreateShader(GLenum type, const char *path);
