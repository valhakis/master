#include <iostream>

/* validate if given input year is leap or not. */

int main()
{
  int year = 2009;

  bool isLeap = false;

  if (year % 4 != 0) {
    isLeap = false;
  } else if (year % 100 != 0) {
    isLeap = true;
  } else if (year % 400 != 0) {
    isLeap = false;
  } else {
    isLeap = true;
  }

  std::cout << "Year " << year << " is " << (isLeap ? "leap" : "common") << " year." << std::endl;
  return 0;
}
