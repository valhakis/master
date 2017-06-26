#include <stdio.h>
#include "include/Master.h"
#include "include/Game.h"

int main(int argc, char *argv[])
{
  MasterInitialize();
  GameInitialize();

  while (MasterRunning()) 
  {
    MasterEvents();
  }

  return 0;
}
