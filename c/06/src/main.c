#include <stdio.h>
#include <unistd.h>
#include <time.h>
#include <stdlib.h>
#include <stdbool.h>

bool open = true;

struct Point {
  int x;
  int y;
};

const int MAX_X = 20, MAX_Y = 15;

void ResetFrames(char frames[MAX_X][MAX_Y])
{
  int x = 0, y = 0;
  for (y=0; y<MAX_Y; y++)
  {
    for (x=0; x<MAX_X; x++)
    {
      frames[x][y] = 'X';
    }
  }
}

void RenderFrames(char frames[MAX_X][MAX_Y])
{
  int x = 0, y = 0;
  for (y=0; y<MAX_Y; y++)
  {
    for (x=0; x<MAX_X; x++)
    {
      printf("%c ", frames[x][y]);
    }
    putchar('\n');
  }
}

int Sleep(int ms)
{
  // 1000 * 1000 * 1000 = 1000 000 000
  struct timespec tim1, tim2;

  tim1.tv_sec = 0;
  tim1.tv_nsec = (long)ms * 1000L * 1000L;

  if (nanosleep(&tim1, &tim2) < 0)
  {
    printf("Nanosleep failed.\n");
    return -1;
  }

  return 0;
}

int main(int argc, char *argv[]) 
{
  char frames[MAX_X][MAX_Y];

  ResetFrames(frames);

  struct Point point;

  point.x = 2;
  point.y = 4;

  int Index = 0;

  point.x = 0;
  point.y = 0;

  while (open)
  {
    system("clear");
    printf("Current index: %d.\n", Index);

    if (point.x >= MAX_X) point.x = MAX_X - 1;
    if (point.y >= MAX_Y) point.y = MAX_Y - 1;

    frames[point.x][point.y] = 'O';

    RenderFrames(frames);
    ResetFrames(frames);

    putchar('\n');
    Sleep(100);
    Index += 1;

    if (Index > 300) break;
  }

  return 0;
}

