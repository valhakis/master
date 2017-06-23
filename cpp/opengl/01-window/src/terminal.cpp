#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <fcntl.h>
#include <valhakis.h>
#include <string.h>
#include <stdbool.h>
// int masterfd = open("/dev/pts/2", O_RDWR|O_NOCTTY);
// dev/pts/<n>
// read(masterfd, &buffer, 1)
// write(masterfd, &buffer, 1)

int TerminalInitialize()
{
  FILE *termin, *termout;

  if ((termin = fopen("tmp/termin", "r")) == NULL)
  {
    ValErr("Failed to open 'tmp/termin'.\n");
    exit(EXIT_FAILURE);
  }

  if ((termout = fopen("tmp/termout", "r")) == NULL)
  {
    ValErr("Failed to open 'tmp/termout'.\n");
    exit(EXIT_FAILURE);
  }

  fclose(termin);
  fclose(termout);

  exit(EXIT_SUCCESS);
  return 0;
}
