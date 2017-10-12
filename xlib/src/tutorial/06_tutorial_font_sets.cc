#include <X11/Xlib.h>
#include <X11/Xutil.h>
#include <X11/Xresource.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <locale.h>

int _06_tutorial_main(int argc, char *argv[]) {
  XEvent event;
  int screen;
  Display *dpy;
  Window win;
  Colormap cmap;
  XColor color;
  XFontStruct **fonts;
  XFontSet font = NULL;
  int fontsCount;
  char **fontNames;
  XrmDatabase db;
  char *xrmType;
  XrmValue xrmValue;
  const char *text = "WINDOW IS AWESOME Ã±";

  setlocale(LC_ALL, getenv("LANG"));

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
  if (!XrmGetResource(db, "tutorial06.color", "tutorial06.color", &xrmType, &xrmValue)) {
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
  int nMissing;
  char **missing;
  char *defString;
  font = XCreateFontSet(dpy, xrmValue.addr, &missing, &nMissing, &defString);

  if (!font) {
    fprintf(stderr, "FAILED TO LOAD FONT\n");
    return 1;
  }

  int textWidth = Xutf8TextEscapement(font, text, strlen(text));
  fontsCount = XFontsOfFontSet(font, &fonts, &fontNames);
  int fontAscent = 0;
  for (int i=0; i<fontsCount; i+=1) {
    if (fontAscent < fonts[i]->ascent) {
      fontAscent = fonts[i]->ascent;
      printf("FONT: '%s'.\n", fontNames[i]);
    }
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
  GC pen = XCreateGC(dpy, win, GCForeground|GCLineWidth|GCLineStyle, &penValues);

  // DISPLAYS THE WINDOW
  XMapWindow(dpy, win);

  while (1) {
    XNextEvent(dpy, &event);

    // MANAGES WINDOW EXPOSURE EVENT
    if (event.type == Expose) {

      // DRAWS TEXT IN THE MIDDLE OF THE WINDOW
      int x = (width - textWidth) / 2;
      int y = (height + fontAscent) / 2;
      Xutf8DrawString(dpy, win, font, pen, x, y, text, strlen(text));
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
