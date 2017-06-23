#include <stdio.h>
#include <unistd.h>
#include <iostream>
#include <string>
#include <curses.h>

using namespace std;

const unsigned int ENTER = 10;

int main()
{
  initscr();
  // clear();
  // noecho();
  char ch;

  //ch = getch();

  //printf("CHARACTER: %d\n", ch);

  //if (true) return 0;

  string password = "";
  cout << "Password: ";
  ch = getch();

  while (ch != ENTER)  {
    password.push_back(ch);
    printf("*");
    ch = getch();
  }

  if (password == "minuparool5") {
    printf("PASSWORD IS CORRECT!\n");
  } else {
    printf("PASSWORD IS NOT CORRECT!\n");
  }

  return 0;
}
