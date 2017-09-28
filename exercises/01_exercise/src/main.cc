#include <stdio.h>

// natural numbers below 10
//
// 3 + 5 + 6 + 9 = 23

int main() {

  int sum = 0;
  int i;
  int m = 1000;

  for (i=1; i<m; i++) {
    bool multiple = i % 3 == 0 || i % 5 == 0;
    if (multiple) {
      sum += i;
    }
    printf("%s%d %s\n", i < 10 ? "0" : "" ,i, multiple ? "MULTIPLE" : "");
  }
  printf("SUM: '%d'.\n", sum);

  return 0;
}
