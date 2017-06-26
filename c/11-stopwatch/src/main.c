#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <stdbool.h>
#include <valhakis.h>
#include <unistd.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

#include <GLFW/glfw3.h>

bool open = true;

int main(int argc, char *argv[]) 
{
  clock_t start = clock(), diff;

  int last_sec = 0, last_ms;

  while (open) 
  {
    diff = clock() - start;

    int msec = diff * 1000 / CLOCKS_PER_SEC;

    int sec = msec / 1000;
    int ms = msec % 1000;

    printf("Time taken %d seconds %d milliseconds.\n", sec, ms);

    if (ms % 500 == 0 && ms > last_ms)
    {
      printf("example.\n");
      last_sec = sec;
      last_ms = ms;
    }

  }
}
