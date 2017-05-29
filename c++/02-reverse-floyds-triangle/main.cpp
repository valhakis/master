#include <iostream>
#include <stdio.h>
/* Floyd's triangle | Robert Floyd
 * - Right aligned triangular array of natural numbers.
 * - Starting with the number 1 in the top left corner.
 */

using namespace std;

int main()
{
  int rows = 4, i, j, n = 1;
  // rows: 4

  // 1
  // 2 3
  // 4 5 6
  // 7 8 9 10

  // 7 8 9 10
  // 4 5 6
  // 2 3
  // 1


  // rows: 4
  // 1      1
  // 2 3    1+1 1+1+1
  // 4 5 6  1+1+1+1

  for (i=1; i<=rows; i++) {
    for (j=0; j<i; j++) {
      printf("%d ", n);
      n++;
    }
    printf("\n");
  }

  // 4 -> 3 -> 2 -> 1 -> 0

  // n: 11
  //
  // 4  4 3 2 1   7 8 9 10    10 9 8 7    10
  // 3  3 2 1     4 5 6       6 5 4       6
  // 2  2 1       2 3         3 2         3
  // 1  1         1           1           1
  //

  // -3 -1 +1 + 3

  cout << endl;

  for (i=rows; i>=1; i--) {
    for (j=i; j>0; j--) {
      n--;
      printf("%d ", n-i+1+(((j-i)*-1)*2));
    }
    printf("\n");
  }

  cout << endl;
  i=7;

  // 1
  // 2 3
  // 4 5 6
  // 7 8 9 10

  int k;

  int min = 1;
  for (int i=1; i<=7; i++) {
    for (int j=1; j<=min; j++) {
      min += 1;
      printf("%d ", i);
    }
    printf("\n");
  }

  return 0;
}
