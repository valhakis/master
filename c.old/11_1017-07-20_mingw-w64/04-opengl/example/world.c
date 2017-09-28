#include <stdio.h>
#include <stdarg.h>

#define KNRM  "\x1B[0m"  // normal
#define KRED  "\x1B[31m" // red
#define KGRN  "\x1B[32m" // green
#define KYEL  "\x1B[33m" // yellow
#define KBLU  "\x1B[34m" // blue
#define KMAG  "\x1B[35m" // magenta
#define KCYN  "\x1B[36m" // cyan
#define KWHT  "\x1B[37m" // white

#define IBLK "\033[0;90m" // black
#define IRED "\033[0;91m" // red
#define IGRN "\033[0;92m" // green
#define IYEL "\033[0;93m" // yellow
#define IBLU "\033[0;94m" // blue
#define IPUR "\033[0;95m" // purple
#define ICYN "\033[0;96m" // cyan
#define IWHT "\033[0;97m" // white

int error(const char *format, ...)
{
  va_list args;

  printf("%sERROR:%s ", IRED, KNRM);
  va_start(args, format);
  vprintf(format, args);
  va_end(args);
  printf("\n");

  return -1;
}

int print(const char *format, ...)
{
  va_list args;

  printf("%sLOG:%s ", IPUR, KNRM);
  va_start(args, format);
  vprintf(format, args);
  va_end(args);
  printf("\n");

  return -1;
}
