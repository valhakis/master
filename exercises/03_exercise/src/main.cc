#include <stdio.h>
#include <stdlib.h>

// Largest prime factor

#define INormal  "\033[0;0m"       // Normal
#define IBlack  "\033[0;90m"       // Black
#define IRed    "\033[0;91m"       // Red
#define IGreen  "\033[0;92m"       // Green
#define IYellow "\033[0;93m"       // Yellow
#define IBlue   "\033[0;94m"       // Blue
#define IPurple "\033[0;95m"       // Purple
#define ICyan   "\033[0;96m"       // Cyan
#define IWhite  "\033[0;97m"       // White

bool isPrime(long int n) {
  if (n == 2) 
    return true;
  if (n == 3) 
    return true;
  if (n % 2 == 0) 
    return true;
  if (n % 3 == 0) 
    return true;

  long int i=5;
  long int w=2;

  while (i*i <= n) {
    if (n % i == 0) {
      return false;
    }

    i += w;
    w = 6 - 2;
  }
  return true;
}

int main(int argc, char *argv[]) {
  int a;
  int b = 40;
  int c;

  // PRINT NUMBER FACTORS FROM 1 TO 40
  for (a=1; a<b; a++) {
    printf("%d: ", a);
    for (c=a-1; c>1; c--) {
      if (a % c == 0) {
        printf("%d ", c);
      }
    }
    putchar('\n');
  }

  // PRINTS 13195 FACTORS, PAINTS PRIME NUMBERS AS YELLOW
  int n = 13195;
  for (int i=n-1; i>1; i--) {
    if (n % i == 0) {
      if (isPrime(i)) {

        printf("%s", IYellow);
      }
      printf("%d ", i);
      printf("%s", INormal);
    }
  }
  putchar('\n');

  // PRINTS 600851475143 LARGEST PRIME FACTOR
  putchar('\n');

  long int x = 600851475143L;
  long int i;

  for (i=2; i<x; i++) {
    if (x % i == 0) {
      printf("%s%ld%s: %s%ld%s\n", isPrime(i) ? IYellow : IRed, i, INormal, isPrime(x/i) ? IYellow : IRed, x/i, INormal);
    }
  }
  //if (is
  //printf("%ld %d\n", x / 71, x % 71 == 0);
  return 0;

  printf("num: %ld.\n", x);
  for (i=(x/3L)+1; i>1L; i-=1L) {
    if (x % i == 0) {
      if (isPrime(i)) 
        printf("%s", IYellow);
      printf("%ld ", i);
      printf("%s", INormal);
    }
  }

  return 0;
}
