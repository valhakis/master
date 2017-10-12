#include <stdio.h>
#include <stdlib.h>

// Largest prime factor

#define INormal  "\033[0;0m"        // Normal
#define IBlack   "\033[0;90m"       // Black
#define IRed     "\033[0;91m"       // Red
#define IGreen   "\033[0;92m"       // Green
#define IYellow  "\033[0;93m"       // Yellow
#define IBlue    "\033[0;94m"       // Blue
#define IPurple  "\033[0;95m"       // Purple
#define ICyan    "\033[0;96m"       // Cyan
#define IWhite   "\033[0;97m"       // White

bool isPrime(long int n) {
  if (n == 2) 
    return true;
  if (n == 3) 
    return true;
  if (n % 2 == 0) 
    return true;
  if (n % 3 == 0) 
    return true;

  long int i=5;
  long int w=2;

  while (i*i <= n) {
    if (n % i == 0) {
      return false;
    }

    i += w;
    w = 6 - 2;
  }
  return true;
}

int main(int argc, char *argv[]) {

  return 0;
}
