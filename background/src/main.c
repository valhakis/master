#include <X11/Xlib.h>
#include <X11/Xatom.h>
#include <stdio.h>
#include <stdarg.h>
#include <stdlib.h>
#include <string.h>

int mIndex = 0;

int mStepX = 300;
int mStepY = 20;
int mStartX = 10;
int mStartY = 50;

int mX = -1;
int mY = -1;

void mprintf(int s, Display *d, Window w, const char* format, ...) {

  if (mIndex % 30 == 0 && mIndex != 0) {
    mY = mStartY;
    mX += mStepX;
  }

  if (mX == -1 || mY == -1) {
    mX = mStartX;
    mY = mStartY;
  }

  char buffer[1024] = {'\0'};
  char bufferBefore[512] = {'\0'};
  char bufferArguments[512] = {'\0'};

  va_list args;
  sprintf( bufferBefore, "[%d] MESSAGE: ", mIndex);
  va_start( args, format );
  vsprintf( bufferArguments, format, args );
  va_end( args );

  strcat(buffer, bufferBefore);
  strcat(buffer, bufferArguments);

  XFillRectangle(d, w, DefaultGC(d, s), mX, mY - 8, 5, 5);
  XDrawString(d, w, DefaultGC(d, s), mX + 15, mY, buffer, strlen(buffer));

  mY += mStepY;

  mIndex += 1;
}

int main(void) {
  Display *d;
  Window w;
  XEvent e;
  char *msg = "Hello, World!";
  int s;

  d = XOpenDisplay(NULL);
  if (d == NULL) {
    fprintf(stderr, "Cannot open display\n");
    exit(1);
  }

  s = DefaultScreen(d);
  w = XCreateSimpleWindow(d, RootWindow(d, s), 10, 10, 100, 100, 1,
      BlackPixel(d, s), WhitePixel(d, s));
  XSelectInput(d, w, ExposureMask | KeyPressMask);
  XMapWindow(d, w);

  Atom atoms[2] = {
    XInternAtom(d, "_NET_WM_STATE_FULLSCREEN", False),
    None
  };

  XChangeProperty(d, w, XInternAtom(d, "_NET_WM_STATE", False), XA_ATOM, 32, PropModeReplace, (unsigned char*)atoms, 1);

  while (1) {
    XNextEvent(d, &e);
    if (e.type == Expose) {
      // XFillRectangle(d, w, DefaultGC(d, s), 20, 20, 10, 10);
      //XDrawString(d, w, DefaultGC(d, s), 10, 50, msg, strlen(msg));
      //char str[100];
      //strcpy(str, "i3 bind key");
      //XDrawString(d, w, DefaultGC(d, s), 10, 100, str, strlen(str));
      //strcpy(str, "i3 reload configuration: $mod+Shift+w or r");
      //XDrawString(d, w, DefaultGC(d, s), 10, 120, str, strlen(str));
      //strcpy(str, "i3 exit: $mod+Shift+e");
      //XDrawString(d, w, DefaultGC(d, s), 10, 140, str, strlen(str));

      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);
      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);
      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);
      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);
      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);
      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);
    }
    if (e.type == KeyPress) {

      const int COMMA = 32;

      int key = e.xkey.keycode;
      mprintf(s, d, w, "WHAT IS HAPPENING: %d.", 25);

      printf("key: %d %c.\n", e.xkey.keycode, e.xkey.keycode);
      if (e.xkey.keycode == 9) break;
    }
  }

  XCloseDisplay(d);
  return 0;
}
