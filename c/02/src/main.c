#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <stdlib.h>
#include <time.h>
#include <stdbool.h>
#include "inc/share.h"
#include "inc/run.h"
#include "inc/window.h"

#define null NULL

bool open = true;

static int Index = 0;

const char *number = "52";
const char *number1 = "43.654";

int main(int argc, char *argv[]) 
{
  char input[512];

  int status = mkdir("tmp", S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH);
  printf("STATUS: %d\n", status);

  unsigned int seed = time(null);
  srand(seed);

  printf("Seed: %d\n", seed);

  if (atoi(number) == 52) {
    printf("Number %s is 52.\n", number);
  }

  if (atof(number1) == 43.654) {
    printf("Number [%.3f] %s is 43.654.\n", atof(number1), number1);
  }

  // compute quotient and reminder of an integer division.
  div_t div1 = div(2, 2);

  printf("Quot: %d, Rem: %d\n", div1.quot, div1.rem);

  while (open)
  {
    int random = Random(0, 10);
    // printf("Open: %d, %d\n", Index, random);

    printf("input > ");
    fgets(input, 512, stdin);

    if (compare(input, "exit\n")) {
      exit(EXIT_SUCCESS);
    }

    if (compare(input, "quit\n")) {
      exit(EXIT_SUCCESS);
    }

    int ret;
    if (cmp(input, "run loop", &ret)) {
      RunLoop(ret);
    }

    if (compare(input, "run loop\n")) {
      RunLoop(20);
    }

    int argc;
    char argv[50][500];

    if (cmp_args(input, "mkdir", &argc, argv)) {
      const char *foldername = argv[0];
      if (foldername) {
        char path[500];
        printf("Folder Name: %s\n", foldername);
        sprintf(path, "tmp/%s", foldername);
        int status = mkdir(path, S_IRWXU | S_IRWXG | S_IROTH | S_IXOTH);
        printf("STATUS: %d\n", status);
      }
    }

    if (cmp_args(input, "window", &argc, argv)) {
      WindowInitialize();
    }

    Index += 1;
    // sleep(1);
  }

  exit(EXIT_SUCCESS);
}

