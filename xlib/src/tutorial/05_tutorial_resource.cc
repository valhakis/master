#include <X11/Xlib.h>
#include <X11/Xutil.h>
#include <X11/Xresource.h>

#include <stdio.h>
#include <string.h>

int _05_tutorial_main(int argc, char *argv[]) {
  XEvent event;
  int screen;
  Display *dpy;
  Window win;
  Colormap cmap;
  XColor color;
  XFontStruct *font;
  XrmDatabase db;
  char *xrmType;
  XrmValue xrmValue;

  // CONNECTS TO THE DISPLAY SERVER
  dpy = XOpenDisplay(NULL);

  if (dpy == NULL) {
    fprintf(stderr, "FAILED TO CONNECT TO THE DISPLAY SERVER\n");
    return 1;
  }

  // RETURNS THE SCREEN REFERENCED TO THE DISPLAY
  screen = DefaultScreen(dpy);

  // INITIALIZES AND RECEIVES THE RESOURCE MANAGER DATABASE AND RESOURCES
  XrmInitialize();
  db = XrmGetFileDatabase("/home/viktor/master/xlib/data/resources");

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

  // CREATES A COLOR FOR THE PEN
  cmap = DefaultColormap(dpy, screen);

  // LOAD AND CREATE COLOR FROM RESOURCE FILE
  if (!XrmGetResource(db, "xlib.color", "xlib.color", &xrmType, &xrmValue)) {
    fprintf(stderr, "FAILED TO LOAD RESOURCE FROM RESOURCE MANAGER\n");
    return 1;
  }
  if (!XAllocNamedColor(dpy, cmap, xrmValue.addr, &color, &color)) {
    fprintf(stderr, "FAILED TO ALLOCATE COLOR\n");
    return 1;
  }

  // CHOOSES INPUT EVENTS
  XSelectInput(dpy, win, KeyPressMask | ExposureMask);

  // LOAD AND CREATE FONT FROM RESOURCE FILE
  if (!XrmGetResource(db, "xlib.font", "xlib.Font", &xrmType, &xrmValue)) {
    fprintf(stderr, "FAILED TO LOAD RESOURCE FROM RESOURCE MANAGER\n");
    return 1;
  }
  font = XLoadQueryFont(dpy, xrmValue.addr);

  if (!font) {
    fprintf(stderr, "FAILED TO LOAD FONT\n");
    return 1;
  }

  // RECEIVES THE WINDOWS GEOMETRY SUCH AS WINDOW SIZE
  Window *rootReturn;
  int xReturn, yReturn;
  unsigned int width, height;
  unsigned int borderWidthReturn;
  unsigned int depthReturn;
  XGetGeometry(dpy, win, rootReturn, &xReturn, &yReturn, &width, &height, &borderWidthReturn, &depthReturn);

  // CREATES A PEN TO DRAW LINES AND TEXT WITH
  XGCValues penValues;
  penValues.foreground = color.pixel;
  penValues.line_width = 2;
  penValues.line_style = LineSolid;
  penValues.font = font->fid;
  GC pen = XCreateGC(dpy, win, GCForeground|GCLineWidth|GCLineStyle|GCFont, &penValues);

  // DISPLAYS THE WINDOW
  XMapWindow(dpy, win);

  while (1) {
    XNextEvent(dpy, &event);

    // MANAGES WINDOW EXPOSURE EVENT
    if (event.type == Expose) {

      // DRAWS TEXT IN THE MIDDLE OF THE WINDOW
      int textWidth = XTextWidth(font, "WINDOW IS AWESOME", strlen("WINDOW IS AWESOME"));
      int x = (width - textWidth) / 2;
      int y = (height + font->ascent) / 2;
      XDrawString(dpy, win, pen, x, y, "WINDOW IS AWESOME", strlen("WINDOW IS AWESOME"));
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
