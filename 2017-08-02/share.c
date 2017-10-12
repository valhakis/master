#include <app/share.h>
#include <stdlib.h>
#include <unistd.h>

#include <stdio.h>
#include <stdarg.h>
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

int error(const char *format, ...)
{
	va_list args;
	fprintf(stderr, IRED);
	fprintf(stderr, "ERROR: ");
	fprintf(stderr, KNRM);
	va_start(args, format);
	vfprintf(stderr, format, args);
	va_end(args);
	fprintf(stderr, "\n");
	return -1;
}

int success(const char *format, ...)
{
	va_list args;
	fprintf(stdout, IGRN);
	fprintf(stdout, "SUCCESS: ");
	fprintf(stdout, KNRM);
	va_start(args, format);
	vfprintf(stdout, format, args);
	va_end(args);
	fprintf(stdout, "\n");
	return 0;
}

char *load_source(const char *path)
{
	char *source = NULL;
	FILE *fp = NULL;
	long bufsize = -1;
	size_t newLen;

	if ((fp = fopen(path, "r")) == NULL) {
		error("Unable to read file '%s'.", path);
		return NULL;
	}

	if (fseek(fp, 0L, SEEK_END) != 0) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}

	bufsize = ftell(fp);

	if (bufsize == -1) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}

	source = malloc(sizeof(char) * (bufsize + 1));

	if (fseek(fp, 0L, SEEK_SET) != 0) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}

	newLen = fread(source, sizeof(char), bufsize, fp);

	if (ferror(fp) != 0) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}
	source[newLen++] = '\0';

	return source;

	// free source later;
}

