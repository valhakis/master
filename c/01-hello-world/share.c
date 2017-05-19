#include <stdio.h>

#define NEWLINE '\n'
extern int number;
extern int speed;

int share() 
{
   printf("Number: %d, (size) -> %d, (speed) -> %d%c", number, sizeof(number), speed, NEWLINE);
}
