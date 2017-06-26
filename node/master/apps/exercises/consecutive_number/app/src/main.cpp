#include <stdio.h>

// consecutive number

// consecutive numbers are integers

// if n is an integer, then n, n+1, and n+2 would be consecutive integers.


int numDigits (int n) {
  if (n < 10) return 1;
  if (n < 100) return 2;
  if (n < 1000) return 3;
  if (n < 10000) return 4;
  if (n < 100000) return 5;
  if (n < 1000000) return 6;
  if (n < 10000000) return 7;
  if (n < 100000000) return 8;
  if (n < 1000000000) return 9;
  return 10;
}

int pow(int a, int b)
{

}

int main()
{
  int num, x, num_digits;
  printf("num: ");
  scanf("%d", &num);

  num_digits = numDigits(num);

  for (x=num_digits; x>0; x--)
  {

  }


  return 0;
}
