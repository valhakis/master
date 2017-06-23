#include <X11/Xlib.h>
#include <assert.h>
#include <unistd.h>
#include <stdbool.h>
#include <stdlib.h>
#include <stdio.h>

#include "inc/xwindow.h"

static unsigned int frame;

static bool open;
static Display *display;
static int blackPixel;
static int whitePixel;
static Window window;
static Window rootWindow;
static GC gc;

XWindow XWindowCreate()
{
  XWindow xWindow;

  open = true;

  display = XOpenDisplay(NULL);

  blackPixel = BlackPixel(display, DefaultScreen(display));
  whitePixel = WhitePixel(display, DefaultScreen(display));

  rootWindow = DefaultRootWindow(display);

  // gc = XCreateGC(display, window, 0, 0);

  window = XCreateSimpleWindow(display, rootWindow, 0, 0, 200, 100, 0, blackPixel, whitePixel);

  XSelectInput(display, window, StructureNotifyMask);

  XMapWindow(display, window);

  // XSetForeground(display, gc, whitePixel);

  /*
  while (open) {
    printf("FRAME: %d\n", ++frame);
    XEvent event;
    XNextEvent(display, &event);

    //if (event.type == MapNotify) {
    //printf("MapNotify");
    //}

    //XDrawLine(display, window, gc, 10, 60, 180, 20);
    //XFlush(display);

    sleep(1);
  }
  */

  return xWindow;
}
