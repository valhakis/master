#include <X11/Xlib.h>
#include <X11/Xutil.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef void (*Callback)(void *cbdata);

typedef struct Button Button;
struct Button {
  int x;
  int y;
  Window root;
  struct {
    GC red;
    GC green;
    GC blue;
    GC lightGray;
    GC lighterGray;
    GC darkGray;
  } pens;
  struct {
    XGCValues red;
    XGCValues green;
    XGCValues blue;
    XGCValues lightGray;
    XGCValues lighterGray;
    XGCValues darkGray;
  } penValues;
  struct {
    XColor red;
    XColor green;
    XColor blue;
    XColor lightGray;
    XColor lighterGray;
    XColor darkGray;
  } colors;
  GC pen;
  Window win;
  unsigned int width;
  unsigned int height;
  unsigned int depth;
  unsigned int borderWidth;
  char * text;
  int textWidth;
  int fontAscent;
  unsigned long border;
  unsigned long background;
  unsigned long foreground;
  void *cbdata;
  Callback buttonRelease;
};

int _07_tutorial_main(int argc, char *argv[]) {
  XEvent event;
  int screen;
  Display *dpy;
  Window win;
  Colormap cmap;
  XColor color;
  XFontStruct *font;

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

  // CREATES A COLOR FOR THE PEN
  cmap = DefaultColormap(dpy, screen);
  XAllocNamedColor(dpy, cmap, "#FFFF00", &color, &color);

  // CHOOSES INPUT EVENTS
  XSelectInput(dpy, win, KeyPressMask | ExposureMask);

  // LOADS A FONT
  font = XLoadQueryFont(dpy, "-*-helvetica-*-10-*");

  if (!font) {
    fprintf(stderr, "FAILED TO LOAD FONT\n");
    return 1;
  }

  // RECEIVES THE WINDOWS GEOMETRY SUCH AS WINDOW SIZE
  Window rootReturn;
  int xReturn, yReturn;
  unsigned int width, height;
  unsigned int borderWidthReturn;
  unsigned int depthReturn;
  XGetGeometry(dpy, win, &rootReturn, &xReturn, &yReturn, &width, &height, &borderWidthReturn, &depthReturn);

  // CREATES A BUTTON
  Button *button = (Button*)malloc(sizeof(Button));
  button->win = XCreateSimpleWindow(dpy, win, 10, 10, 100, 100, 1, WhitePixel(dpy, screen), BlackPixel(dpy, screen));
  XSelectInput(dpy, button->win, ButtonPressMask | ButtonReleaseMask | StructureNotifyMask | ExposureMask | LeaveWindowMask | EnterWindowMask);
  XMapWindow(dpy, button->win);
  XGetGeometry(dpy, button->win, &button->root, &button->x, &button->y, &button->width, &button->height, &button->borderWidth, &button->depth);

  // LOAD BUTTON DARK GRAY PEN
  XAllocNamedColor(dpy, cmap, "#666666", &button->colors.darkGray, &button->colors.darkGray);
  button->penValues.darkGray.foreground = button->colors.darkGray.pixel;
  button->penValues.darkGray.line_width = 2;
  button->penValues.darkGray.line_style = LineSolid;
  button->pens.darkGray = XCreateGC(dpy, button->win, GCForeground|GCLineWidth|GCLineStyle, &button->penValues.darkGray);
  
  // LOAD BUTTON LIGHT GRAY PEN
  XAllocNamedColor(dpy, cmap, "#999999", &button->colors.lightGray, &button->colors.lightGray);
  button->penValues.lightGray.foreground = button->colors.lightGray.pixel;
  button->penValues.lightGray.line_width = 2;
  button->penValues.lightGray.line_style = LineSolid;
  button->pens.lightGray = XCreateGC(dpy, button->win, GCForeground|GCLineWidth|GCLineStyle, &button->penValues.lighterGray);

  // LOAD BUTTON LIGHTER GRAY PEN
  XAllocNamedColor(dpy, cmap, "#CCCCCC", &button->colors.lighterGray, &button->colors.lighterGray);
  button->penValues.lighterGray.foreground = button->colors.lighterGray.pixel;
  button->penValues.lighterGray.line_width = 2;
  button->penValues.lighterGray.line_style = LineSolid;
  button->pens.lighterGray = XCreateGC(dpy, button->win, GCForeground|GCLineWidth|GCLineStyle, &button->penValues.lightGray);
  
  // LOAD BUTTON RED PEN
  XAllocNamedColor(dpy, cmap, "#FF0000", &button->colors.red, &button->colors.red);
  button->penValues.red.foreground = button->colors.red.pixel;
  button->penValues.red.line_width = 2;
  button->penValues.red.line_style = LineSolid;
  button->pens.red = XCreateGC(dpy, button->win, GCForeground|GCLineWidth|GCLineStyle, &button->penValues.red);

  // LOAD BUTTON BLUE PEN
  XAllocNamedColor(dpy, cmap, "#0000FF", &button->colors.blue, &button->colors.blue);
  button->penValues.blue.foreground = button->colors.blue.pixel;
  button->penValues.blue.line_width = 2;
  button->penValues.blue.line_style = LineSolid;
  button->pens.blue = XCreateGC(dpy, button->win, GCForeground|GCLineWidth|GCLineStyle, &button->penValues.blue);

  // LOAD BUTTON GREEN PEN
  XAllocNamedColor(dpy, cmap, "#00FF00", &button->colors.green, &button->colors.green);
  button->penValues.green.foreground = button->colors.green.pixel;
  button->penValues.green.line_width = 2;
  button->penValues.green.line_style = LineSolid;
  button->pens.green = XCreateGC(dpy, button->win, GCForeground|GCLineWidth|GCLineStyle, &button->penValues.green);

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

    // MANAGES BUTTON EVENTS
    if (event.xany.window == button->win) {
      if (event.type == ConfigureNotify) {

      }
      if (event.type == Expose) {
        // DRAW BUTTON BOX
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, 0, button->width, 0); // NORTH
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, button->height-1, button->width, button->height-1); // SOUTH
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, 0, 0, button->height); // WEST
        XDrawLine(dpy, button->win, button->pens.lightGray, button->width-1, 0, button->width-1, button->height); // EAST

        // CHANGE BUTTON BORDER COLOR
        XSetWindowAttributes attrs;
        attrs.background_pixel = button->colors.lighterGray.pixel;
        attrs.border_pixel = button->colors.lightGray.pixel; 
        XChangeWindowAttributes(dpy, button->win, CWBackPixel, &attrs);

        // CHANGE BUTTON BACKGROUND COLOR
        // XSetWindowBackground(dpy, button->win, button->colors.lighterGray.pixel);
        XClearWindow(dpy, button->win);
      }
      if (event.type == EnterNotify) {
        // CHANGE BUTTON BORDER COLOR
        XSetWindowAttributes attrs;
        attrs.background_pixel = button->colors.lighterGray.pixel;
        attrs.border_pixel = button->colors.darkGray.pixel; 
        XChangeWindowAttributes(dpy, button->win, CWBorderPixel|CWBackPixel, &attrs);
        XClearWindow(dpy, button->win);
      }
      if (event.type == LeaveNotify) {
        // CHANGE BUTTON BORDER COLOR
        XSetWindowAttributes attrs;
        attrs.background_pixel = WhitePixel(dpy, screen);
        attrs.border_pixel = button->colors.lighterGray.pixel; 
        XChangeWindowAttributes(dpy, button->win, CWBorderPixel|CWBackPixel, &attrs);
        XClearWindow(dpy, button->win);
      }
      if (event.type == ButtonPress) {
        // DRAW BUTTON BOX
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, 0, button->width, 0); // NORTH
        XDrawLine(dpy, button->win, button->pens.darkGray, 0, button->height-1, button->width, button->height-1); // SOUTH
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, 0, 0, button->height); // WEST
        XDrawLine(dpy, button->win, button->pens.darkGray, button->width-1, 0, button->width-1, button->height); // EAST

        XSetWindowAttributes attrs;
        attrs.background_pixel = button->colors.darkGray.pixel;
        attrs.border_pixel = button->colors.darkGray.pixel; 
        XChangeWindowAttributes(dpy, button->win, CWBorderPixel|CWBackPixel, &attrs);
        XClearWindow(dpy, button->win);
      }
      if (event.type == ButtonRelease) {
        // DRAW BUTTON BOX
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, 0, button->width, 0); // NORTH
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, button->height-1, button->width, button->height-1); // SOUTH
        XDrawLine(dpy, button->win, button->pens.lightGray, 0, 0, 0, button->height); // WEST
        XDrawLine(dpy, button->win, button->pens.lightGray, button->width-1, 0, button->width-1, button->height); // EAST

        XSetWindowAttributes attrs;
        attrs.background_pixel = button->colors.lightGray.pixel;
        attrs.border_pixel = button->colors.darkGray.pixel; 
        XChangeWindowAttributes(dpy, button->win, CWBorderPixel|CWBackPixel, &attrs);
        XClearWindow(dpy, button->win);
      }
    }

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

  // FREES MEMORY

  XFreeGC(dpy, button->pens.red);
  XFreeGC(dpy, button->pens.green);
  XFreeGC(dpy, button->pens.blue);
  XFreeGC(dpy, button->pens.lightGray);
  XFreeGC(dpy, button->pens.lighterGray);
  XFreeGC(dpy, button->pens.darkGray);

  XFreeFont(dpy, font);
  XFreeGC(dpy, pen);
  XDestroyWindow(dpy, button->win);
  XDestroyWindow(dpy, win);

  free(button);
  // CLOSE CONNECTION TO THE DISPLAY SERVER
  XCloseDisplay(dpy);

  return 0;
}
