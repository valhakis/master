#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <dirent.h>
#include <stdbool.h>
#include <stdarg.h>

#include "inc/common.h"
#include "inc/template.h"

int commonLoopListDirContent(const char *directoryPath)
{
  DIR *directory;
  struct dirent *entry;
}

// @ -> linebreak

int PrintV2(const char *format, ...)
{

}

int Print(const char *format, ...) {

  const char *NORMAL  = "\x1B[0m";
  const char *RED     = "\x1B[31m";
  const char *GREEN   = "\x1B[32m";
  const char *YELLOW  = "\x1B[33m";
  const char *BLUE    = "\x1B[34m";
  const char *MAGENTA = "\x1B[35m";
  const char *CYAN    = "\x1B[36m";
  const char *WHITE   = "\x1B[37m";

  //for (int x=0; x<strlen(RED); x+=1) {
    //printf("RED[%d] -> %d\n", x, RED[x]);
  //}

  char newFormat[100] = {'\0'};
  int newFormatIndex = 0;

  // commonPrintRepeat('-', 50);
  for (int i=0; i<strlen(format); i++)
  {
    char ch = format[i];

    // printf("[%d]-> ",i);

    if (ch == '|') {
      char color[100];
      int colorIndex = 0;
      newFormatIndex--;
      newFormat[newFormatIndex] = '\0';
      while (ch != '!' && ch != '\0') 
      {
        i++;
        ch = format[i];
        color[colorIndex] = ch;
        colorIndex++;
      }
      color[--colorIndex] = '\0';

      if (strcmp(color, "RED") == 0) {
        strcat(newFormat, RED);
        newFormatIndex += strlen(RED);
      } else if (strcmp(color, "R") == 0) {
        strcat(newFormat, NORMAL);
        newFormatIndex += strlen(NORMAL);
      } else if (strcmp(color, "GREEN") == 0) {
        strcat(newFormat, GREEN);
        newFormatIndex += strlen(GREEN);
      } else if (strcmp(color, "YELLOW") == 0) {
        strcat(newFormat, YELLOW);
        newFormatIndex += strlen(YELLOW);
      } else if (strcmp(color, "BLUE") == 0) {
        strcat(newFormat, BLUE);
        newFormatIndex += strlen(BLUE);
      } else if (strcmp(color, "MAGENTA") == 0) {
        strcat(newFormat, MAGENTA);
        newFormatIndex += strlen(MAGENTA);
      } else if (strcmp(color, "CYAN") == 0) {
        strcat(newFormat, CYAN);
        newFormatIndex += strlen(CYAN);
      } else if (strcmp(color, "WHITE") == 0) {
        strcat(newFormat, WHITE);
        newFormatIndex += strlen(WHITE);
      }
      continue;
    }

    /*
    printf("%d -> ", i);
    if (ch == '\n') {
      printf("%c", '@');
    } else if (ch == ' ') {
      printf("%c", '-');
    } else if (ch == '\0') {
      printf("%c", '0');
    } else {
      printf("%c", ch);
    }
    printf("\n");
    */

    newFormat[newFormatIndex] = ch;
    newFormatIndex++;

  }
  newFormat[newFormatIndex] = '\0';
  // printf("\n");
  // commonPrintRepeat('-', 50);

  // printf("Format: %s", format);
  // printf("NewFormat: %s", newFormat);

  va_list args;
  va_start(args, format);
  vfprintf(stdout, newFormat, args);
  va_end(args);
}

int main(int num_arguments, char *arguments[]) 
{
  Template template;

  // commonDisplayArguments(num_arguments, arguments);

  if (num_arguments == 5) {
    // template = TemplateCreate(arguments[3], arguments[1], arguments[2], arguments[4]);

    // template.displayInformation(&template);

    // template.listFilesInDirectory(&template);
    // template.listRecursiveInformation(&template);
  }

  // commonRecursionListDir(".", 0);

  //commonLoopListDirContent("tmp/a");

  /*
     commonCreateDirectory("tmp/b/src");
     if (!commonFileExists("tmp/b/src/main.c")) {
     commonCopy("tmp/a/src/main.c", "tmp/b/src/main.c");
     } else {
     printf("FILE 'tmp/b/src/main.c' already exists.\n");
     }
     */

  Print("Name: |BLUE! This should be blue |R! ATLEST |RED! %s |R!.\n", "William Valhakis");

  for (int i=0; i<5; i++) {
    Print("Number -> |RED! %d |R! \n", i);
  }

  //for (int i=0; i<5; i++) {
    //PrintV2("Number -> %d \n", i);
  //}
  return 0;
}

