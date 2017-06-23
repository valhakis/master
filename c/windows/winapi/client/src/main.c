#include <stdio.h>
#include <string.h>
#include "inc/functions.h"

int CreateSocket()
{

}

int main(int argc, char *argv[])
{
  char *executable = GetExecutable(argc, argv);

  CreateSocket();

  printf("Executable: %s.\n", executable);
  return 0;
}
