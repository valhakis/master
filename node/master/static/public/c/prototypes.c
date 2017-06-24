#include <glad/glad.h>
#include <valhakis.h>

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
