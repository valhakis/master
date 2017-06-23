#include <stdio.h>
#include <unistd.h>
#include <termios.h>
#include <iostream>
#include <string>

using namespace std;

int main()
{
  int ch;
  struct termios t_old, t_new;

  tcgetattr(STDIN_FILENO, &t_old);
  t_new = t_old;
  t_new.c_lflag &= ~(ICANON | ECHO);

  // ch = getchar();

  tcsetattr(STDIN_FILENO, TCSANOW, &t_old);

  return 0;
}
