#ifndef MY_VALHAKIS_H
#define MY_VALHAKIS_H
#include <stdarg.h>
void ValSample(const char *format, ...);
void ValErr(const char *format, ...);
char *ValReadSource(const char *file);
void ValLog(const char *format, ...);
#endif
