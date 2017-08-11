#include <app/share.h>
#include <stdio.h>
#include <string.h>

static struct Mouse mouse;

void MouseInitialize()
{
	mouse.x = 0.0f;
	mouse.y = 0.0f;
}

struct Mouse *MouseGetStructurePointer()
{
	return &mouse;
}

void MouseUpdate(float x, float y)
{
	mouse.x = x;
	mouse.y = y;

	// printf("%.2f, %.2f\n", x, y);
}

void ortho(float M[4][4], float left, float right, float bottom, float top, float near, float far) 
{
	M[0][0] = 2.0f / (right - left);
	M[0][1] = 0.0f;
	M[0][2] = 0.0f;
	M[0][3] = 0.0f;

	M[1][0] = 0.0f;
	M[1][1] = 2.0f / (top - bottom);
	M[1][2] = 0.0f;
	M[1][3] = 0.0f;

	M[2][0] = 0.0f;
	M[2][1] = 0.0f;
	M[2][2] = -2.0f / (far - near);
	M[2][3] = 0.0f;

	M[3][0] = -(right+left)/(right-left);
	M[3][1] = -(top+bottom)/(top-bottom);
	M[3][2] = -(far+near)/(far-near);
	M[3][3] = 1.0f;
}

void identity(float M[4][4])
{
	M[0][0] = 1.0f;
	M[0][1] = 0.0f;
	M[0][2] = 0.0f;
	M[0][3] = 0.0f;

	M[1][0] = 0.0f;
	M[1][1] = 1.0f;
	M[1][2] = 0.0f;
	M[1][3] = 0.0f;

	M[2][0] = 0.0f;
	M[2][1] = 0.0f;
	M[2][2] = 1.0f;
	M[2][3] = 0.0f;

	M[3][0] = 0.0f;
	M[3][1] = 0.0f;
	M[3][2] = 0.0f;
	M[3][3] = 1.0f;
}

void PrintMat(const char *title, float matrix[4][4])
{
	int a, b;

	printf("================\n== %s ==\n", title);
	for (a=0; a<4; a++) 
	{
		for (b=0; b<4; b++)
		{
			float num = matrix[a][b];

			if (num >= 0.0) {
				putchar(' ');
			}

			printf("%.2f ", num);
		}
		printf("\n");
	}
}

