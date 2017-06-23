<<<<<<< HEAD
#pragma once

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int ShareError(const char *format, ...);
int ShareLoadVertices(float *vertices, size_t size, const char *path, const char *section);
int ShareLoadIndices(unsigned int *indices, size_t size, const char *path, const char *section);
int ShareLoadDefaultTriangleVertices(float *vertices);
=======
#pragma once

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int ShareError(const char *format, ...);
int ShareLoadVertices(float *vertices, size_t size, const char *path, const char *section);
>>>>>>> 0b8937f71d8fb659b6f2dce2f77abd8176dfb9d9
