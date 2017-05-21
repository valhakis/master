#include <stdio.h>
#include <stdlib.h>
#include <float.h>

#include "share.h"

#define NEWLINE '\n'
extern int number;
extern int numbers[10];
extern const int speed;

static int localRand(int min, int max)
{
   return rand() % max + min;
}

int main(int argc, char *argv[]) 
{
   int i, j;
   initialization();

   printf("SPEED IS %d\n", speed);

   number = localRand(1, 10);

   share();

   for (i=0; i<10; i++) {
      numbers[i] = localRand(1, 10);
   }

   for (i=0; i<10; i++) {
      printf("(%d) -> (%d)\n", i, numbers[i]);
   }

   return 0;
}

