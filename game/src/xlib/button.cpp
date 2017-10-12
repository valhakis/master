#include <X11/Xlib.h>
#include <X11/Xutil.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static XFontStruct *font;
static XTextItem textItem[1];

static XColor color;
static Colormap cmap;

static struct {
  XColor lightGray;
  XColor darkGray;
} colors;

static struct {
  XGCValues lightGray;
  XGCValues darkGray;
} gcv;

static struct {
  GC lightGray;
  GC darkGray;
} gc;

struct Button {
  char label[100];
  Window rootWin;
  Window win;
  int x, y;
  unsigned int w, h;
  unsigned int depth;
  unsigned int borderWidth;
  void (*cb)();
};

static const unsigned int MAX_BUTTONS = 10;
static unsigned int CURRENT_BUTTON = 0;
static struct Button buttons[MAX_BUTTONS];

static void defaultCb() {
  printf("NO CALLBACK SET\n");
}

void ButtonInitialize(Display *dpy, int screen) {

  cmap = DefaultColormap(dpy, screen);
  XParseColor(dpy, cmap, "rgb:cc/cc/cc", &color);
  XAllocColor(dpy, cmap, &color);

  XParseColor(dpy, cmap, "rgb:ee/ee/ee", &colors.lightGray);
  XAllocColor(dpy, cmap, &colors.lightGray);
  gcv.lightGray.foreground = colors.lightGray.pixel;
  gcv.lightGray.background = color.pixel;
  gc.lightGray = XCreateGC(dpy, RootWindow(dpy, screen), GCForeground|GCBackground, &gcv.lightGray);

  XParseColor(dpy, cmap, "rgb:88/88/88", &colors.darkGray);
  XAllocColor(dpy, cmap, &colors.darkGray);
  gcv.darkGray.foreground = colors.darkGray.pixel;
  gcv.darkGray.background = color.pixel;
  gc.darkGray = XCreateGC(dpy, RootWindow(dpy, screen), GCForeground|GCBackground, &gcv.darkGray);
}

void ButtonUpdate(Display *dpy, XEvent *event, int screen) {
  for (int i=0; i<CURRENT_BUTTON; i++) {
    Button *btn = &buttons[i];
    if (event->xany.window == btn->win) {
      if (event->type == Expose) {
        XDrawLine(dpy, btn->win, gc.lightGray, 0, 0, btn->w-1, 0);
        XDrawLine(dpy, btn->win, gc.lightGray, 0, 0, 0, btn->h-1);
        XDrawLine(dpy, btn->win, gc.darkGray, btn->w-1, 0, btn->w-1, btn->h-1);
        XDrawLine(dpy, btn->win, gc.darkGray, 0, btn->h-1, btn->w-1, btn->h-1);

        // DRAW TEXT
        font = XLoadQueryFont(dpy, "7x14");
        textItem[0].chars = (char*)malloc(sizeof(char) * strlen(btn->label) + 1);
        strcpy(textItem[0].chars, btn->label);
        textItem[0].nchars = strlen(btn->label);
        textItem[0].delta = 0;
        textItem[0].font = font->fid;
        XDrawText(dpy, btn->win, DefaultGC(dpy, screen), (btn->w - XTextWidth(font, textItem[0].chars, textItem[0].nchars)) / 2, (btn->h - (font->ascent + font->descent)) / 2 + font->ascent, textItem, 1);
        XUnloadFont(dpy, font->fid);
      }
      if (event->type == ButtonPress) {
        if (event->xbutton.button == 1) {
          XDrawLine(dpy, btn->win, gc.darkGray, 0, 0, btn->w-1, 0);
          XDrawLine(dpy, btn->win, gc.darkGray, 0, 0, 0, btn->h-1);
          XDrawLine(dpy, btn->win, gc.lightGray, btn->w-1, 0, btn->w-1, btn->h-1);
          XDrawLine(dpy, btn->win, gc.lightGray, 0, btn->h-1, btn->w-1, btn->h-1);
          if (btn->cb != NULL) {
            btn->cb();
          }
        }
      }
      if (event->type == ButtonRelease) {
        if (event->xbutton.button == 1) {
          XDrawLine(dpy, btn->win, gc.lightGray, 0, 0, btn->w-1, 0);
          XDrawLine(dpy, btn->win, gc.lightGray, 0, 0, 0, btn->h-1);
          XDrawLine(dpy, btn->win, gc.darkGray, btn->w-1, 0, btn->w-1, btn->h-1);
          XDrawLine(dpy, btn->win, gc.darkGray, 0, btn->h-1, btn->w-1, btn->h-1);
        }
      }
    }
  }
}

int ButtonAdd(Window root, Display *dpy, int screen, int x, int y, int w, int h, const char *label, void (*cb)()) {
  if (CURRENT_BUTTON >= MAX_BUTTONS) {
    printf("BUTTON LIMIT REACHED\n");
    return -1;
  }
  Button *button = &buttons[CURRENT_BUTTON];

  if (label == NULL) {
    strcpy(button->label, "NO LABEL IS SET");
  } else {
    strcpy(button->label, label);
  }

  if (cb == NULL) {
    button->cb = defaultCb;
  } else {
    button->cb = cb;
  }

  button->win = XCreateSimpleWindow(dpy, root, x, y, w, h, 1, BlackPixel(dpy, screen), color.pixel);

  XSelectInput(dpy, button->win, ExposureMask | KeyPressMask | ButtonPressMask | ButtonReleaseMask);
  XMapWindow(dpy, button->win);

  XGetGeometry(dpy, button->win, &button->rootWin, &button->x, &button->y, &button->w, &button->h, &button->borderWidth, &button->depth);

  CURRENT_BUTTON += 1;

  return CURRENT_BUTTON - 1;
}

void ButtonSetCb(int index, void (*cb)()) {
  buttons[index].cb = cb;
}
