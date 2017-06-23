#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include "inc/shared.h"
#include "inc/window1.h"
#include <string.h>

static char errname[512];

static int open = true;

int main(int argc, char *argv[]) 
{
  Error = ShareSetError("MAIN", errname);

  if (Window1Initialize() < 0)
  {
    Error("Failed to initialize Window1.\n");
    return -1;
  }

  while (open)
  {
    Window1Events();
  }

  return 0;
}

