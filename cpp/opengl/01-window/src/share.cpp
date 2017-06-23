#include <stdarg.h>
#include <valhakis.h>
#include <string.h>
#include <stdio.h>

const char* KNRM = "\x1B[0m";
const char* KRED = "\x1B[31m";
const char* KGRN = "\x1B[32m";
const char* KYEL = "\x1B[33m";
const char* KBLU = "\x1B[34m";
const char* KMAG = "\x1B[35m";
const char* KCYN = "\x1B[36m";
const char* KWHT = "\x1B[37m";

int ShareError(const char *format, ...)
{
  va_list args;
  fprintf(stderr, "%sERROR: %s", KRED, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
  fprintf(stderr, "\n");
}

int ShareLoadVertices(float *vertices, size_t size, const char *path, const char *section)
{
  FILE *fp;

  if ((fp = fopen(path, "r")) == NULL)
  {
    ValErr("Failed to open file '%s'.\n", path);
    return -1;
  }

  char buffer[512];
  while (fgets(buffer, 512, fp))
  {
    buffer[strlen(buffer) - 1] = '\0';
    if (strcmp(buffer, section) == 0)
    {
      break;
    }
  }

  int x;
  for (x=0; x<size/sizeof(*vertices); x++)
  {
    fscanf(fp, "%f", vertices + x);
  }
  fclose(fp);

  return 0;
}

int ShareLoadIndices(unsigned int *indices, size_t size, const char *path, const char *section)
{
  FILE *fp;

  if ((fp = fopen(path, "r")) == NULL)
  {
    ValErr("Failed to open file '%s'.\n", path);
    return -1;
  }

  char buffer[512];
  while (fgets(buffer, 512, fp))
  {
    buffer[strlen(buffer) - 1] = '\0';
    if (strcmp(buffer, section) == 0)
    {
      break;
    }
  }

  int x;
  for (x=0; x<size/sizeof(*indices); x++)
  {
    fscanf(fp, "%u", indices + x);
  }
  printf("\n");
  fclose(fp);

  return 0;
}

int ShareLoadDefaultTriangleVertices(float *vertices)
{
  ShareLoadVertices(vertices, 3 * 3 * sizeof(float), "data/vertices.dat", "DEFAULT TRIANGLE");
}
