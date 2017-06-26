#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#include <stdbool.h>

#define KNRM  "\x1B[0m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

int answer, result;

int MRandom(int min, int max)
{
  return rand() % max + min;
}

bool check()
{
  if (answer == result) {
    printf("%sCORRECT%s\n", KGRN, KNRM);
    return true;
  } else {
    printf("%sWRONG%s\n", KRED, KNRM);
    return false;
  }
}

bool open = true;

int main(int argc, char *argv[]) 
{
  system("clear");
  srand(time(NULL));
  while (open)
  {
    int a = MRandom(0, 10);
    int b = MRandom(0, 10);

sum:
    printf("%d + %d = ", a, b);
    scanf("%d", &answer);

    result = a + b;
    if (check() == false) {
      goto sum;
    }

prod:
    printf("%d * %d = ", a, b);
    scanf("%d", &answer);

    result = a * b;
    if (check() == false) {
      goto prod;
    }

sub:
    printf("%d - %d = ", a, b);
    scanf("%d", &answer);

    result = a - b;
    if (check() == false) {
      goto sub;
    }
  }

  return 0;
}
