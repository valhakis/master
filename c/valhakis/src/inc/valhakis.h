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
  int ValGetUniform(int program, const char *name);
  void ValLoadVertices(const char *name, const char *path, float *vertices, size_t size);
  void ValSetMat4Identity(float mat[4][4]);
  void ValSetUniformMatrix4fv(int program, const char *name, const float *M);
  void ValSetUniform3fv(int program, const char *name, float color[3]);
  void ValMat4TransformVec3(float mat1[4][4], float vec[3]);
  void ValMultiMat4ByMat4(float C[4][4], float B[4][4]);
  void ValMat4Scale(float M[4][4], float s);
  void ValMat4SetIdentityf(int count, ...);
  void ValSetVec3(float vec[3], float x, float y, float z);
  void ValSetVec3v(float vec1[3], float vec2[3]);
  void SetVec3(float vec[3], float x, float y, float z);
  void SetUniformMatrix4fv(int program, const char *name, const float *M);
  void Mat4Translate(float mat1[4][4], float vec[3]);
  void Mat4Flip(float M[4][4]);
  void Mat4MultiMat4(float C[4][4], float B[4][4]);
  void SetUniform3fv(int program, const char *name, float color[3]);
  void Mat4Scale(float M[4][4], float s);

#ifdef __cplusplus
}
#endif

#endif
