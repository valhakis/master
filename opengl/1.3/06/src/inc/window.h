#ifndef MY_WINDOW_h
#define MY_WINDOW_h

#include <glad/glad.h>
#include <GLFW/glfw3.h>

int WindowInitialize();
int WindowOpen();
int WindowUpdate();
int WindowDestroy();
GLFWwindow* WindowReturn();

#endif
