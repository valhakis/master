#include <stdarg.h>
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
