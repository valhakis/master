#include <X11/Xlib.h>
#include <X11/Xutil.h>

#include <stdio.h>

Colormap cmap;

XColor color;

static struct {
  XColor red;
  XColor green;
  XColor blue;
  XColor yellow;
} colors;

int _03_text_render(int argc, char *argv[]) {

  Window win;
  XEvent event;
  Display *dpy;

  // CREATES WINDOW AND INITIALIZES DISPLAY
  dpy = XOpenDisplay(NULL);
  int screen = DefaultScreen(dpy);

  win = XCreateSimpleWindow(dpy, DefaultRootWindow(dpy), 0, 0, 500, 500, 1, WhitePixel(dpy, 0), BlackPixel(dpy, 0));
  XStoreName(dpy, win, "WINDOW");

  // SET FIXED WINDOW SIZE
  XSizeHints *hints = XAllocSizeHints();
  hints->flags = PAllHints;
  hints->x = 1;
  hints->y = 1;
  hints->min_width = 500;
  hints->min_height = 500;
  hints->max_width = 500;
  hints->max_height = 500;
  XSetWMNormalHints(dpy, win, hints);

  // CHOOSEN INPUT MASKS
  XSelectInput(dpy, win, ExposureMask | StructureNotifyMask | KeyPressMask | KeyReleaseMask | ButtonPressMask | ButtonReleaseMask | EnterWindowMask | LeaveWindowMask);

  // DISPLAYS THE WINDOW
  XMapWindow(dpy, win);

  // LISTS ALL THE AVAILABLE FONTS
  int count;
  char **fonts = XListFonts(dpy, "*courier*", 9000, &count);
  for (int i=0; i<count; i++) {
    // printf("FONT: '%s'.\n", fonts[i]);
  }
  printf("Number of fonts: %d.\n", count);

  // LOADS FONT
  Font font = XLoadFont(dpy, "*helvetica*");

  XTextItem *items;

  // LOADS COLOR 
  cmap = DefaultColormap(dpy, screen);
  XAllocNamedColor(dpy, cmap, "red", &colors.red, &colors.red);

  XFlush(dpy);
  while (1) {
    XNextEvent(dpy, &event);

    if (event.type == Expose) {
      // DRAWS RED BOX WITH LINES
      XAllocNamedColor(dpy, cmap, "#FFFF00", &color, &color);
      XSetForeground(dpy, DefaultGC(dpy, screen), color.pixel);
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 0, 499, 0); // NORTH
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 499, 499, 499); // SOUTH
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 0, 0, 499); // WEST
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 499, 0, 499, 499); // EAST
    }

    // MANAGES WINDOW ENTER EVENT
    if (event.type == EnterNotify) {
      // DRAWS BLUE BOX WITH LINES
      XAllocNamedColor(dpy, cmap, "#0000FF", &color, &color);
      XSetForeground(dpy, DefaultGC(dpy, screen), color.pixel);
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 0, 499, 0); // NORTH
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 499, 499, 499); // SOUTH
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 0, 0, 499); // WEST
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 499, 0, 499, 499); // EAST
    }

    // MANAGES WINDOW LEAVE EVENT
    if (event.type == LeaveNotify) {
      // DRAWS BLUE BOX WITH LINES
      XAllocNamedColor(dpy, cmap, "#FF0000", &color, &color);
      XSetForeground(dpy, DefaultGC(dpy, screen), color.pixel);
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 0, 499, 0); // NORTH
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 499, 499, 499); // SOUTH
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 0, 0, 0, 499); // WEST
      XDrawLine(dpy, win, DefaultGC(dpy, screen), 499, 0, 499, 499); // EAST
    }

    // MANAGES KEYPRESS EVENT
    if (event.type == KeyPress) {
      int key = event.xkey.keycode;

      if (key == 9) {

        break;

      }

    }

    // MANAGES MOUSE BUTTON PRESS EVENT
    if (event.type == ButtonPress) {
      int button = event.xbutton.button;
      if (button == Button1) {
        XAllocNamedColor(dpy, cmap, "#FFFF00", &color, &color);
        XSetForeground(dpy, DefaultGC(dpy, screen), color.pixel);
        XDrawPoint(dpy, win, DefaultGC(dpy, screen), event.xbutton.x, event.xbutton.y);
      }
    }
  }

  XCloseDisplay(dpy);

  return 0;
}
