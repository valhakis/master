#include <stdarg.h>
#include <stdio.h>

#define ANSI_COLOR_RED     "\x1b[31m"
#define ANSI_COLOR_GREEN   "\x1b[32m"
#define ANSI_COLOR_BLUE    "\x1b[34m"
#define ANSI_COLOR_YELLOW  "\x1b[33m"
#define ANSI_COLOR_MAGENTA "\x1b[35m"
#define ANSI_COLOR_CYAN    "\x1b[36m"
#define ANSI_COLOR_WHITE   "\x1b[37m"
#define ANSI_COLOR_RESET   "\x1b[0m"

enum e_color {
  RED,
  GREEN,
  BLUE,
  YELLOW,
  MAGENTA,
  CYAN,
  WHITE
};

static void Print(enum e_color color, const char *format, ...)
{
  switch (color) {
    case RED: fprintf(stdout, ANSI_COLOR_RED); break;
    case GREEN: fprintf(stdout, ANSI_COLOR_GREEN); break;
    case BLUE: fprintf(stdout, ANSI_COLOR_BLUE); break;
    case YELLOW: fprintf(stdout, ANSI_COLOR_YELLOW); break;
    case MAGENTA: fprintf(stdout, ANSI_COLOR_MAGENTA); break;
    case CYAN: fprintf(stdout, ANSI_COLOR_CYAN); break;
    case WHITE: fprintf(stdout, ANSI_COLOR_WHITE); break;
    default: break;
  }

  va_list args;
  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);

  fprintf(stdout, ANSI_COLOR_RESET);
}

int main()
{
  int marks = 75;

  switch (marks) 
  {
    case 95:
    case 90:
      printf("Excellent");
      break;
    case 75:
      printf("Very Good");
      break;
    case 60:
      printf("Good");
      break;
    case 40:
      printf("OK");
      break;
    default:
      printf("What is wrong with you.\n");
      break;
  }

}
