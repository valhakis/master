#ifndef MY_COMMON_H
#define MY_COMMON_H
#include <glad/glad.h>

char *loadSource(const char *path);
void checkCompilation(int elemId, bool isProgram, GLenum type);
void setVec3f(float vec[3], float a, float b, float c);
bool PointRectCollision(float x, float y, float w, float h, float px, float py);

#endif
