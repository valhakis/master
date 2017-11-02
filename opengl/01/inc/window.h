#ifndef MY_WINDOW_H
#define MY_WINDOW_H

#include <GLFW/glfw3.h>

int WindowCreate(int width, int height);
int WindowUpdate();
int WindowOpen();
int WindowDestroy();
float WindowGetMouseY();
float WindowGetMouseX();
float WindowGetWidth();
float WindowGetHeight();
int WindowRegisterMouseButtonCallback(void (*callback)(int button, int action, int mods, float x, float y));

#endif
