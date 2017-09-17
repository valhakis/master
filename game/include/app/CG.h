#ifndef MY_CG_H
#define MY_CG_H

#include <GLFW/glfw3.h>

int CGCreateShader(const char* filePath, const char* typeName);
char* CGLoadSource(const char* filePath);
int CGLoadShader(const char *location);
char* CGGetDataLoc(const char *filePath);
void CGToUpper(char *str);
void CGUniform3f(int program, const char *name, float r, float g, float b);
void CGInitialize(GLFWwindow* window);
void CGGetWindowDimensions(int *width, int *height);
void CGMatrix4fv(int program, const char *name, float *m);
void CGMakeWindow(GLFWwindow* win, int width, int height);
bool CGWindowIsOpen();
void CGWindowUpdate();
void CGTerminate();
#endif
