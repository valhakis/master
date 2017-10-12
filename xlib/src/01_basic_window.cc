#include <stdio.h>
#include <stdbool.h>
#include <X11/Xlib.h>

int _01_basic_window(int argc, char *argv[]) {
  unsigned int width = 500;
  unsigned int height = 500;
  int open = true;
  Display *dpy;
  Window win;
  long eventMask = 0;

  dpy = XOpenDisplay(NULL);
  win = XCreateSimpleWindow(
      dpy, // Display *display
      DefaultRootWindow(dpy), // Window parent
      0, // int x
      0, // int y
      width, // unsigned int width
      height, // unsigned int height
      0, // unsigned int border_width
      WhitePixel(dpy, 0), // unsigned long border
      BlackPixel(dpy, 0)// unsigned long background
      );

  eventMask |= StructureNotifyMask;
  eventMask |= KeyPressMask;

  XSelectInput(dpy, win, eventMask);
  XMapWindow(dpy, win);
  XFlush(dpy);

  while (open) {
    XEvent ev;
    XNextEvent(dpy, &ev);

    if (ev.type == ConfigureNotify) {
      if (width != ev.xconfigure.width || height != ev.xconfigure.height) {
        width = ev.xconfigure.width;
        height = ev.xconfigure.height;
        printf("RESIZED: [%d x %d].\n", width, height);
      }
    }
    if (ev.type == MapNotify) {

    }
    if (ev.type == KeyPress) {
      if (ev.xkey.keycode == 0x09) {
        open = false;
      } else {
        printf("KEYPRESS: [%x].\n", ev.xkey.keycode);
      }
    }
  }

  XCloseDisplay(dpy);
  return 0;
}
