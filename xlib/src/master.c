#define SIMPLE_WINDOW 1

#include <string.h>
#include <stdio.h>
#include <stdarg.h>
#include <stdbool.h>
#include <unistd.h>
#include <app/default.h>
#include <X11/Xlib.h>

bool open = true;

int _master_execute(int argc, char *argv[]) {

  unsigned int width = 500;
  unsigned int height = 500;
  Display *dpy = XOpenDisplay(NULL);
  XColor color;
  Colormap cmap = DefaultColormap(dpy, 0);
  char red[] = "#FF0000";

  XParseColor(dpy, cmap, red, &color);
  XAllocColor(dpy, cmap, &color);

#if SIMPLE_WINDOW == 1
  Window win = XCreateSimpleWindow(
      dpy, // Display *display
      DefaultRootWindow(dpy), // Window parent
      0, // int x
      0, // int y
      width, // unsigned int width
      height, // unsigned int height
      0, // unsigned int border_width
      WhitePixel(dpy, 0), // unsigned long border
      color.pixel // unsigned long background
      );
#elif SIMPLE_WINDOW == 0
  Window win = XCreateWindow(
      dpy, // Display *display 
      DefaultRootWindow(dpy), // Window parent 
      0, // int x 
      0, // int y 
      500, // unsigned int width 
      500, // unsigned int height 
      0, // unsigned int border_width 
      CopyFromParent, // int depth 
      CopyFromParent, // unsigned int class 
      CopyFromParent, // Visual *visual
      0, // unsigned long valuemask 
      0 // XSetWindowAttributes *attributes 
      );
#endif

  long eventMask = 0;
  eventMask |= StructureNotifyMask;
  eventMask |= KeyPressMask;
  eventMask |= KeyReleaseMask;

  XSelectInput(dpy, win, eventMask);
  XSetForeground(dpy, XDefaultGC(dpy, XDefaultScreen(dpy)), WhitePixel(dpy, DefaultScreen(dpy)));
  XSetBackground(dpy, XDefaultGC(dpy, XDefaultScreen(dpy)), BlackPixel(dpy, DefaultScreen(dpy)));

  XMapWindow(dpy, win);
  XFlush(dpy);

  XClearWindow(dpy, win);

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
