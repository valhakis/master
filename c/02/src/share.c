#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>
#include <string.h>

int Random(int min, int max)
{
   return rand() % max + min;
}

bool compare(const char *str1, const char *str2) 
{
  return strcmp(str1, str2) == 0 ? true : false;
}

bool cmp(const char *input, const char *str, int *ptr) 
{
  if (strncmp(input, str, strlen(str)) == 0)
  {
    int x = 0, i = 0;
    char num_str[100];

    for (x=strlen(str) + 1, i=0; x<strlen(input) - 1; x++, i++)
    {
      num_str[i] = input[x];
    }
    num_str[i] = '\0';

    int num = atoi(num_str);

    *ptr = num;
    return true;
  }

  return false;
}

int cmp_args(const char *input, const char *str, int *argc, char argv[50][500])
{
  if (strncmp(input, str, strlen(str)) == 0) {
    int x = 0, w = 0, i = 0;

    for (x=strlen(str) + 1; x<strlen(input) - 1; x++) 
    {
      argv[w][i] = input[x];
      i++;

      if (input[x] == ' ') {
        argv[w][i] = '\0';
        i = 0;
        w += 1;
      }
    }

    *argc = w;
    return true;
  }
  return false;
}
