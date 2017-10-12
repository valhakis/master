#include <X11/Xlib.h>
#include <X11/Xutil.h>

#include <stdio.h>

int _02_tutorial_main(int argc, char *argv[]) {
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
  XSelectInput(dpy, win, KeyPressMask | ExposureMask);

  // CREATES A PEN TO DRAW LINES WITH
  XGCValues penValues;
  penValues.foreground = WhitePixel(dpy, screen);
  penValues.line_width = 2;
  penValues.line_style = LineSolid;
  GC pen = XCreateGC(dpy, win, GCForeground|GCLineWidth|GCLineStyle,&penValues);

  // DISPLAYS THE WINDOW
  XMapWindow(dpy, win);

  while (1) {
    XNextEvent(dpy, &event);

    // MANAGES WINDOW EXPOSURE EVENT
    if (event.type == Expose) {
      // DRAWS A LINE 
      XDrawLine(dpy, win, pen, 10, 100, 480, 100);
      XDrawLine(dpy, win, pen, 10, 110, 480, 110);
    }

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
