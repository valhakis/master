#include <windows.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>

void error(const char *format, ...)
{
  HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
  CONSOLE_SCREEN_BUFFER_INFO consoleInfo;
  WORD saved_attributes;

  /* Save current attributes */
  GetConsoleScreenBufferInfo(hConsole, &consoleInfo);
  saved_attributes = consoleInfo.wAttributes;
  SetConsoleTextAttribute(hConsole, FOREGROUND_RED);

  va_list args;
  fprintf(stderr, "--------------------------------------------------\n");
  fprintf(stderr, "ERROR: ");

  /* restore original attributes */
  SetConsoleTextAttribute(hConsole, saved_attributes);

  va_start(args, format);
  vfprintf(stderr, format, args);
  va_end(args);

  exit(EXIT_FAILURE);
}

void success(const char *format, ...)
{
  HANDLE hConsole = GetStdHandle(STD_OUTPUT_HANDLE);
  CONSOLE_SCREEN_BUFFER_INFO consoleInfo;
  WORD saved_attributes;

  /* Save current attributes */
  GetConsoleScreenBufferInfo(hConsole, &consoleInfo);
  saved_attributes = consoleInfo.wAttributes;
  SetConsoleTextAttribute(hConsole, FOREGROUND_GREEN);


  va_list args;
  fprintf(stdout, "--------------------------------------------------\n");
  fprintf(stdout, "SUCCESS: ");

  /* restore original attributes */
  SetConsoleTextAttribute(hConsole, saved_attributes);

  va_start(args, format);
  vfprintf(stdout, format, args);
  va_end(args);
}

