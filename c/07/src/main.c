#include <X11/Xlib.h>
#include <stdio.h>
#include <unistd.h>
#include <stdlib.h>
#include <valhakis.h>

Window root, window;
Display *display;
bool open = true;
int screen;
XEvent xevent;

int main(int argc, char *argv[]) 
{
  display = XOpenDisplay(NULL);
  screen = DefaultScreen(display);

  int blackPixel = BlackPixel(display, screen);
  int whitePixel = WhitePixel(display, screen);


  root = DefaultRootWindow(display);

  window = XCreateSimpleWindow(display, root, 0, 0, 200, 100, 0, blackPixel, whitePixel);

  // gc -> Graphic Context
  GC gc = XCreateGC(display, window, 0, NULL);

  Atom deleteWindow = XInternAtom(display, "WM_DELETE_WINDOW", 0);
  XSetWMProtocols(display, window, &deleteWindow, 1);

  XSelectInput(display, window, StructureNotifyMask|ButtonPressMask|KeyPressMask);

  XMapWindow(display, window);

  XSetForeground(display, gc, whitePixel);

  while (open)
  {
    XNextEvent(display, &xevent);

    if (xevent.type == MapNotify)
    {
    }
    else if (xevent.type == ConfigureNotify)
    {
      int width = xevent.xconfigure.width;
      int height = xevent.xconfigure.height;
      printf("SIZE CHANGED TO: %d by %d.\n", width, height);
    }
    else if (xevent.type == ButtonPress)
    {
      open = false;
    }
    else if (xevent.type == Expose)
    {
      XFillRectangle(display, window, gc, 20, 20, 10, 10);
    }
    else if (xevent.type == KeyPress)
    {
      int keycode = xevent.xkey.keycode;
      if (keycode == 9)
      {
        open = false;
      } else {
        printf("KEYCODE: %d.\n", keycode);
      }
    }

    // XDrawLine(display, window, gc, 10, 60, 180, 20);
    // XFlush(display);
  }

  XDestroyWindow(display, window);
  XCloseDisplay(display);
  return 0;
}

