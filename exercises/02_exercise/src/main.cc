#include <stdio.h>

// Fibonacci sequence

int main() {

  int a = 1;
  int b = 2;
  int count = 2;
  int c;
  int sum = 2;

  while (true) {
    c = a + b;

    if (c > 4000000) {
      break;
    }

    a = b;
    b = c;

    if (c % 2 == 0) {
      sum += c;
    }

    printf("NUM [%d]: '%d'.\n", count, c);
    count += 1;
  }

  printf("SUM: '%d'.\n", sum);

  return 0;
}
