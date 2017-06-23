#include <stdio.h>

char *GetExecutable(int argc, char *argv[])
{
  if (argc != 2) {
    printf("You need to specify the executable name.\n");
  }

  return argv[1];
}
