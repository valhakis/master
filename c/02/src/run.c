#include <stdbool.h>
#include <string.h>
#include <time.h>
#include <unistd.h>
#include <stdlib.h>
#include <stdio.h>
#include "inc/share.h"

static bool open = true;

static int Index = 0;

static void Sleep() 
{
  struct timespec rqtp, rmtp;

  rqtp.tv_sec = 0; // seconds
  rqtp.tv_nsec = 90000000; // nanoseconds

  rmtp.tv_sec = 1;
  rmtp.tv_nsec = 1000; 

  if (nanosleep(&rqtp, &rmtp) == -1) {
    printf("Nanosleep Failure!\n");
  }

  // printf("SEC: %d, NSEC: %d\n", rmtp.tv_sec, rmtp.tv_nsec);
  // printf("SEC: %d, NSEC: %d\n", rqtp.tv_sec, rqtp.tv_nsec);
}

int Stop(bool *open)
{
  *open = false;
}

static int InitItems(char items[10][10])
{
  int x = 0;
  int i = 0;

  for (x=0; x<10; x++)
  {
    for (i=0; i<10; i++)
    {
      items[x][i] = ' ';
    }
    items[x][i - 1] = '\0';
  }
}

static int RandomizeItems(char items[10][10])
{
  char characters[] = {
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
  };

  int x = 0, i = 0;

  for (x=0; x<10; x++)
  {
    for (i=0; i<10-1; i++)
    {
      int rndom = Random(0, strlen((char*)characters));
      items[x][i] = characters[rndom];
    }
  }
}

char items[10][10];

int RunLoop(int times)
{
  system("clear");

  open = true;
  Index = 0;

  InitItems(items);

  int frame = 0;

  while (open) 
  {
    int random = Random(0, 10);

    RandomizeItems(items);

    printf("Open: [%d] [%d] (%d) {%s}\n", frame, Index, random, items[Index]);

    Index += 1, frame += 1;

    if (Index >= 10) {
      Index = 0;
      system("clear");
    }

    Sleep();

    if (frame >= times) {
      Stop(&open);
      break;
    }
  }
}
