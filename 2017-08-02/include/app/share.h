#ifndef MY_SHARE_H
#define MY_SHARE_H

struct Mouse {
	float x;
	float y;
};

void ortho(float M[4][4], float left, float right, float bottom, float top, float near, float far);
void identity(float M[4][4]);
void PrintMat(const char *title, float matrix[4][4]);

void MouseInitialize();
struct Mouse *MouseGetStructurePointer();
void MouseUpdate(float x, float y);

#endif
