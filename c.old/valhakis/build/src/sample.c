#include <stdio.h>
#include <stdarg.h>

void ValSample(const char *format, ...)
{
  va_list args;
  fprintf(stdout, "VALHAKIS: ");
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
}
