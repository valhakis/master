#include <iostream>

#include "includes/input.h"

int a, b, sum;


void example()
{
  using namespace std;
  cout << "a: ";
  cin >> a;
  cout << "b: ";
  cin >> b;

  sum = a + b;

  cout << "sum: " << sum << endl;
}

int main()
{

  InputLoop();

  // example();

  std::cout << "WHAT IS THIS SHIT" << std::endl;
  return 0;
}
