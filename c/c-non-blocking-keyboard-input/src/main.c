#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/select.h>
#include <termios.h>
#include <string.h>

struct termios orig_termios;

void reset_terminal_mode()
{
  tcsetattr(0, TCSANOW, &orig_termios);
}

void set_conio_terminal_mode()
{
  struct termios new_termios;

  /* take two copies */
  tcgetattr(0, &orig_termios);
  memcpy(&new_termios, &orig_termios, sizeof(new_termios));

  /* set terminal mode and register cleanup handler */
  atexit(reset_terminal_mode);
  cfmakeraw(&new_termios);
  tcsetattr(0, TCSANOW, &new_termios);
}

int kbhit()
{
  struct timeval tv = { 0L, 0L };

  fd_set fds;
  FD_ZERO(&fds);
  FD_SET(0, &fds);

  return select(1, &fds, NULL, NULL, &tv);
}

int getch()
{
  int r;

  unsigned char c;

  if ((r = read(0, &c, sizeof(c))) < 0) {
    return r;
  } else {
    return c;
  }

}

int main()
{
  set_conio_terminal_mode();

  //while (!kbhit()) {
    //printf("'%d'\n", getch());
  //}

  (void)getch();

  return 0;
}
