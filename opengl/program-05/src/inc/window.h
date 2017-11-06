#ifndef MY_WINDOW_H
#define MY_WINDOW_H

#include <glad/glad.h>
#include <GLFW/glfw3.h>

int window_initialize();
GLFWwindow* window_return_pointer();
bool window_is_open();
int window_update();
int window_get_mouse_position(float *mouse_x, float *mouse_y);

#endif
