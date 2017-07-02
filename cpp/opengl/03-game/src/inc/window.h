#pragma once

void WindowInitialize();
void WindowEvents();
void WindowTerminate();
void WindowGetKeysPtr(bool **keys);
void WindowGetDimensions(int *width, int *height);
void WindowGetCursorPosition(float *x, float *y);
void WindowRegisterMousePress(void (*callback)(int button, int action));
