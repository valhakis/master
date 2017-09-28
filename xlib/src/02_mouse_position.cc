#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <X11/Xlib.h>

int _02_mouse_position(int argc, char *argv[]) {
  unsigned int width = 500;
  unsigned int height = 500;
  int open = true;
  Display *dpy;
  Window win;
  long eventMask = 0;
  Window winReturned;
  Window *rootWindows;
  bool result;
  unsigned int maskReturn;
  int rootX, rootY;
  int winX, winY;

  dpy = XOpenDisplay(NULL);

  printf("NUMBER OF SCREENS: [%d].\n", XScreenCount(dpy));
  rootWindows = (Window*)malloc(sizeof(Window) * XScreenCount(dpy));

  for (int i=0; i<XScreenCount(dpy); i++) {
    rootWindows[i] = XRootWindow(dpy, i);
  }
  for (int i=0; i<XScreenCount(dpy); i++) {
    result = XQueryPointer(dpy, rootWindows[i], &winReturned, &winReturned, &rootX, &rootY, &winX, &winY, &maskReturn);
    if (result) break;
  }

  if (!result) {
    printf("NO MOUSE FOUND\n");
  }

  printf("MOUSE IS AT: [%d x %d].\n", rootX, rootY);

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

  free(rootWindows);
  XCloseDisplay(dpy);
  return 0;
}
