#include <stdio.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

using namespace glm;

void MyOrtho(float M[4][4], float left, float right, float bottom, float top, float near, float far) 
{
	M[0][0] = 2 / (right - left);
	M[0][1] = 0.0f;
	M[0][2] = 0.0f;
	M[0][3] = 0.0f;

	M[1][0] = 0.0f;
	M[1][1] = 2 / (top - bottom);
	M[1][2] = 0.0f;
	M[1][3] = 0.0f;

	M[2][0] = 0.0f;
	M[2][1] = 0.0f;
	M[2][2] = -2 / (far - near);
	M[2][3] = 0.0f;

	M[3][0] = -(right+left)/(right-left);
	M[3][1] = -(top+bottom)/(top-bottom);
	M[3][2] = -(far+near)/(far-near);
	M[3][3] = 1.0f;
}

void PrintMat(const char *title, float *matrix)
{
	// [0][0] [0][1] [0][2] [0][3]
	// [1][0] [1][1] [1][2] [1][3]
	// [2][0] [2][1] [2][2] [2][3]
	// [3][0] [3][1] [3][2] [3][3]

	float mutrix[4][4];
	memcpy(mutrix, matrix, sizeof(mutrix));

	int a, b;

	printf("================\n== %s ==\n", title);
	for (a=0; a<4; a++) 
	{
		for (b=0; b<4; b++)
		{
			float num = mutrix[a][b];

			if (num >= 0.0) {
				putchar(' ');
			}

			printf("%.2f ", num);
		}
		printf("\n");
	}
}

int main()
{
	mat4 matrix1 = ortho(0.0f, 800.0f, 0.0f, 600.0f, 0.1f, 100.0f);
	float matrix2[4][4];
	MyOrtho(matrix2, 0.0f, 800.0f, 0.0f, 600.0f, 0.1f, 100.0f);

	PrintMat("matrix 1", value_ptr(matrix1));
	PrintMat("matrix 2", (float*)matrix2);

	return 0;
}
