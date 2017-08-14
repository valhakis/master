#ifndef MY_SHARE_H
#define MY_SHARE_H

#define create_shader_debug 0
#define MY_GL_VERSION 3

#define KNRM  "\x1B[0m"
#define KBLK  "\x1B[30m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

#define IBLK  "\x1B[90m"
#define IRED  "\x1B[91m"
#define IGRN  "\x1B[92m"
#define IYEL  "\x1B[93m"
#define IBLU  "\x1B[94m"
#define IMAG  "\x1B[95m"
#define ICYN  "\x1B[96m"
#define IWHT  "\x1B[97m"

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
int error(const char *format, ...);
int success(const char *format, ...);
char *load_source(const char *path);

#endif
