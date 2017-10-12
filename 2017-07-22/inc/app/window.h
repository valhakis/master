#ifndef MY_WINDOW_H	
#define MY_WINDOW_H	

#include <windows.h>
#include <stdbool.h>

int WindowInitialize(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine,  int nCmdShow);
bool WindowEvents();
void ImageLoad(HWND hwnd);

#endif
