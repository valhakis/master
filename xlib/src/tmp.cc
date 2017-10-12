#include <X11/Xlib.h>

int _temp_main(int argc, char *argv[]) {

  Display *dpy;
  int screen;

  dpy = XOpenDisplay(NULL);
  screen = XDefaultScreen(dpy);

  XSetWindowAttributes attrs;
  attrs.background_pixel = XWhitePixel(dpy, screen);

  return 0;
}
