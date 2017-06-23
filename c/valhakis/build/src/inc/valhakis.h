#ifndef MY_VALHAKIS_H
#define MY_VALHAKIS_H
#include <stdarg.h>
#include <stdbool.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>

#ifdef __cplusplus
extern "C" {
#endif

  void ValSample(const char *format, ...);
  void ValErr(const char *format, ...);
  char *ValReadSource(const char *file);
  void ValLog(const char *format, ...);
  int ValCreateShader(GLenum type, const char *file);
  GLFWwindow *CreateGLFWWindow(int width, int height);
  int ValCreateProgram(int vshader, int fshader);
  GLFWwindow *ValCreateLazyGLFWWindow();
  int ValLoadProgram(const char *vpath, const char *fpath);

#ifdef __cplusplus
}
#endif

#endif
