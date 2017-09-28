#ifndef MY_CODEMATH_H
#define MY_CODEMATH_H
void CMButtonInitialize(int program);
void CMButtonUpdate();
void CMButtonMake(int x, int y, int w, int h, const char *label, void (*cb)());
#endif
