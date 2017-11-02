#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[]) {

  int n, *a = NULL;

  printf("num integers: ");
  scanf("%d", &n);

  a = (int*)malloc(sizeof(int) * n);

  for (int i=0; i<n; i++) {
    printf("num: ");
    scanf("%d", &a[i]);
  }

  for (int i=0; i<n; i++) {
    printf("%d\t", a[i]);
  }
  printf("\n");

  return 0;
}
