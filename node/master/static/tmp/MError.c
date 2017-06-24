#include <stdio.h>
#include <stdarg.h>

void ValLog(const char *format, ...);
void ValErr(const char *format, ...);

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

void ValErr(const char *format, ...)
{
  va_list args;
  fprintf(stderr, KRED);
  fprintf(stderr, "ERROR: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
}

void ValLog(const char *format, ...)
{
  va_list args;
  fprintf(stderr, KBLU);
  fprintf(stderr, "LOG: ");
  fprintf(stderr, KNRM);
  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);
}
