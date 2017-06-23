#ifndef T_WINDOW_H
#define T_WINDOW_H

// #include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "app.h"

typedef struct TWindow {
  GLFWwindow *window;
  int (*events)();
} TWindow;

TWindow TWindowCreate(const char *title);
int TWindowInitialization(int argc, char *argv[], App *app);
int TWindowDestruction();
#endif
