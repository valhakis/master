#include <stdio.h>

int (*GetPrint(const char *word))(const char *)
{
  int print (const char *msg)
  {
    printf("[%s]: %s.\n", word, msg);
  }

  int (*Print)() = &print;

  return Print;
}

int main(int argc, char *argv[]) 
{
  int (*Print1)() = GetPrint("ONE");
  int (*Print2)() = GetPrint("TWO");

  Print1("SAMPLE STRING"); // should output: [ONE]: SAMPLE STRING.
  Print2("SAMPLE STRING"); // should output: [TWO]: SAMPLE STRING.

  return 0;
}

