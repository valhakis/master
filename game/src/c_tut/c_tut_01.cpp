#include <stdio.h>
#include <string.h>

// DAILY TODO TO LEARN WHERE AND HOW

// 1. TODO: Show me how you can define a string ?
// string = 'okei';
//
// 2. TODO: What is the length of the string ?
// 'william' -> 7
//
// 3. TODO: How to compare strings ?
// 'william' == 'william'
// 'william' != 'albert'
//
// 4. TODO: Will you concatenate two strings ?
// str1 = 'william'
// str2 = 'valhakis'
// str = str1 + ' ' + str2
//
// 5. TODO: How to copy one string to another ?
// str1 = 'william'
// str2 = str1
//
// 6. TODO: How to use memset ?
// str[50] = {'a', 'b', 'c', ...};
// str -> {'\0', '\0', '\0', ...}
//
// 7. TODO: How to use memccpy ?
// str1[256];
// str2[256] = {"ONE TWO : THREE FOUR"}; 
// memccpy str1 str2 ':'
// str1 -> 'ONE TWO :'

int _c_tut_01_main(int argc, char *argv[]) {

  // 1. TODO: char *str = "what a string";
  {
    printf("SIZE OF CHAR: %d.\n", sizeof(char));
  }

  {
    char * name = (char *)"William Valhakis";

    // 2. TODO: strlen(str);
    int size = sizeof(name);
    int len = strlen(name);

    printf("NAME: (size -> %d, len -> %d) '%s'.\n", size, len, name);
  }

  {
    char name[17] = { 'W', 'i', 'l', 'l', 'i', 'a', 'm', ' ', 'V', 'a', 'l', 'h', 'a', 'k', 'i', 's'};
    int size = sizeof(name);
    int len = strlen(name);

    printf("NAME: (size -> %d, len -> %d) '%s'.\n", size, len, name);
  }

  {
    char name[17] = "William Valhakis";

    int size = sizeof(name);
    int len = strlen(name);

    printf("NAME: (size -> %d, len -> %d) '%s'.\n", size, len, name);
  }

  {
    char name[] = "Albert Einstein";

    int size = sizeof(name);
    int len = strlen(name);

    printf("NAME: (size -> %d, len -> %d) '%s'.\n", size, len, name);
  }

  {
    char name[16] = "Albert Einstein";

    int size = sizeof(name);
    int len = strlen(name);

    printf("NAME: (size -> %d, len -> %d) '%s'.\n", size, len, name);
  }

  {
    char str[256] = {'\0'};
    const char *str1 = "Name: ";
    const char *name = "William Valhakis";

    strcat(str, str1);
    strcat(str, name);

    printf("STR: '%s'.\n", str);
  }

  {
    const char ch = 'V';
    const char *str = "Valhakis";
    char str1[80] = {"William Valhakis"};
    char str2[80] = {'\0'};
    strcpy(str2, str1);

    printf("STR1: '%s'.\n", str1);
    printf("STR2: '%s'.\n", str2);

    if (strcmp(str1, str2) == 0) {  
      printf("STR1 equals STR2\n");
    }

    printf("CHARACTER '%c' in '%s' is at position: %x.\n", ch, str1, strchr(str1, ch));
    printf("STRING '%s' in '%s' is at position: %x.\n", str, str1, strstr(str1, str));
  }

  {
    // copy memory area
    // void *memccpy(void *restrict, const void *restrict, int, size_t);
    char msg[256] = "This is the string: not copied";
    char buffer[256] = {'\0'};
    memset(buffer, '\0', 256);
    memccpy(buffer, msg, ':', 256);
    printf("BUFFER: '%s'.\n", buffer);

    memset(buffer, '\0', 256);
    strcpy(msg, "ONE TWO THREE FOUR # FIVE SIX SEVEN EIGHT NINE");
    memccpy(buffer, msg, '#', 256);
    printf("BUFFER: '%s'.\n", buffer);
  }

  return 0;
}
