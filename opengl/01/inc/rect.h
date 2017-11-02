#ifndef MY_RECT_H
#define MY_RECT_H
int RectInitialize();
int rect(float x, float y, float w, float h);
int RectWColor3f(float x, float y, float w, float h, float r, float g, float b);
int RectWColor3fv(float x, float y, float w, float h, const float c[3]);
#endif
