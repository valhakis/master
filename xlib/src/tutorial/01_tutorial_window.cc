#include <X11/Xlib.h>
#include <X11/Xutil.h>

#include <stdio.h>

int _01_tutorial_main(int argc, char *argv[]) {
  XEvent event;
  int screen;
  Display *dpy;
  Window win;

  // CONNECTS TO THE DISPLAY SERVER
  dpy = XOpenDisplay(NULL);

  if (dpy == NULL) {
    fprintf(stderr, "FAILED TO CONNECT TO THE DISPLAY SERVER\n");
    return 1;
  }

  screen = DefaultScreen(dpy);

  // CREATES A WINDOW
  win = XCreateSimpleWindow(dpy, DefaultRootWindow(dpy), 0, 0, 500, 500, 1, WhitePixel(dpy, 0), BlackPixel(dpy, 0));

  // ASK WINDOW TO BE FIXED SIZE
  XSizeHints *hints = XAllocSizeHints();
  hints->flags = PAllHints;
  hints->x = 1;
  hints->y = 1;
  hints->min_width = 500;
  hints->min_height = 500;
  hints->max_width = 500;
  hints->max_height = 500;
  XSetWMNormalHints(dpy, win, hints);

  // CHOOSES INPUT EVENTS
  XSelectInput(dpy, win, KeyPressMask);

  // DISPLAYS THE WINDOW
  XMapWindow(dpy, win);

  while (1) {
    XNextEvent(dpy, &event);

    // MANAGES KEY PRESS EVENT
    if (event.type == KeyPress) {
      int key = event.xkey.keycode;
      if (key == 9) {
        break;
      }
    }
  }

  // CLOSE CONNECTION TO THE DISPLAY SERVER
  XCloseDisplay(dpy);

  return 0;
}
