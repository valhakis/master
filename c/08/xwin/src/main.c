#include <stdio.h>
#include <stdlib.h>
#include <valhakis.h>
#include <string.h>
#include <X11/Xutil.h>
#include <X11/Xresource.h>
#include <X11/Xlib.h>
#include <unistd.h>
#include <stdbool.h>

XContext context;
bool open = true;
int width = 800, height = 600;
int screen;
Display *display;
int blackPixel, whitePixel;
Window window, root; // PS: Window is drawable too
GC gc;
XrmDatabase xrm_db;
XFontSet font_set;
XFontStruct *font;
const char *fontname = "-*-helvetica-*-10-*";
char *text = "Welcome to hell bitches.";
int text_width;
int text_x, text_y;
XGCValues GCValues;
XEvent xevent;
Atom deleteWindow;
unsigned long background, border;
XColor color;
Pixmap pixmap;
Colormap cmap;
XColor color1, color2;
unsigned int depth;

typedef void (*Callback)(void *cbdata);

typedef struct Button Button;
struct Button {
  XChar2b * text;
  int text_width;
  int font_ascent;
  int width, height;
  unsigned long border, background, foreground;
  void *cbdata;
  Callback buttonRelease;
};

void createButton(Window parent, char *text, int x, int y, int width, int height)
{
  Button *button;
  Window win;

  win = XCreateSimpleWindow(display, parent, x, y, width, height, 2, border, background);

  button = calloc(sizeof(*button), 1);

  XSelectInput(display, win, ButtonPressMask|ButtonReleaseMask|StructureNotifyMask|ExposureMask|LeaveWindowMask|EnterWindowMask);

  XSaveContext(display, win, context, (XPointer)button);
  XMapWindow(display, win);
}

void buttonExpose(Button *button, XEvent *xevent) {
  if (!button) return;
  printf("EXPOSE.\n");
  XDrawLine(xevent->xany.display, xevent->xany.window, DefaultGC(xevent->xany.display, DefaultScreen(xevent->xany.display)), 0, 0, button->width, button->height);
  XDrawLine(xevent->xany.display, xevent->xany.window, DefaultGC(xevent->xany.display, DefaultScreen(xevent->xany.display)), button->width, 0, 0, button->height);
}

int XChar2bLen(XChar2b *string)
{
  int j=0;
  for (j=0; string[j].byte1 || string[j].byte2; j++);
  return j;
}

int utf8toXChar2b(XChar2b *output_r, int outsize, const char *input, int inlen)
{
  int j, k;
  for (j=0, k=0; j<inlen && k <outsize; j++)
  {
    unsigned char c = input[j];
    if (c < 128)
    {
      output_r[k].byte1 = 0;
      output_r[k].byte2 = c;
    }
    else if (c < 0xC0)
    {
      /* we're inside a character we don't know */
      continue;
    }
    else
    {
      switch(c&0xF0)
      {
        /* two bytes 5+6 = 11 bits */
        case 0xC0: 
        case 0xD0:
          if (inlen < j+1)
          {
            return k;
          }
          output_r[k].byte1 = (c&0x1C) >> 2;
          j++;
          output_r[k].byte2 = ((c&0x3) << 6) + (input[j]&0x3F);
          k++;
          break;
          /* three bytes 4+6+6 = 16 bits */
        case 0xE0:
          if (inlen < j+2)
          {
            return k;
          }
          j++;
          output_r[k].byte1 = ((c&0xF) << 4) + ((input[j]&0x3C) >> 2);
          c = input[j];
          j++;
          output_r[k].byte2 = ((c&0x3) << 6) + (input[j]&0x3F);
          k++;
          break;
        case 0xFF:
          continue;
      }
    }
    output_r[k].byte2 = 0;
    output_r[k].byte1 = 0;
  }
  return k;
}

struct Box
{
  int x, y;
};

struct Box BoxCreate(int x, int y)
{
  struct Box box;

  box.x = x, box.y = y;

  return box;
}

int main(int argc, char *argv[]) 
{
  XrmInitialize();

  struct Box box = BoxCreate(500, 500);

  display = XOpenDisplay(NULL);

  xrm_db = XrmGetDatabase(display);

  screen = DefaultScreen(display);

  if (!(font = XLoadQueryFont(display, fontname)))
  {
    ValErr("Failed to load font '%s', using fixed font.\n", fontname);
    font = XLoadQueryFont(display, "fixed");
  }

  blackPixel = BlackPixel(display, screen);
  whitePixel = WhitePixel(display, screen);

  cmap = DefaultColormap(display, screen);
  XAllocNamedColor(display, cmap, "Red", &color1, &color2);

  //background = blackPixel;
  background = color1.pixel;

  // border = whitePixel;
  border = blackPixel;

  root = DefaultRootWindow(display);

  window = XCreateSimpleWindow(display, root, 0, 0, width, height, whitePixel, border, background);

  deleteWindow = XInternAtom(display, "WM_DELETE_WINDOW", 0);
  XSetWMProtocols(display, window, &deleteWindow, 1);

  context = XUniqueContext();
  XSaveContext(display, window, context, (XPointer)&window);

  XSelectInput(display, window, ExposureMask|StructureNotifyMask|KeyPressMask|ButtonPressMask|KeyReleaseMask|PointerMotionMask);
  XMapWindow(display, window);


  GCValues.font = font->fid;
  GCValues.foreground = whitePixel;
  GCValues.line_width = 4;
  GCValues.line_style = LineSolid;
  gc = XCreateGC(display, window, GCForeground|GCLineWidth|GCLineStyle|GCFont, &GCValues);
  text_width = XTextWidth(font, text, strlen(text));
  // gc = XCreateGC(display, window, 0, NULL);
  // gc = XDefaultGC(display, screen);
  createButton(window, "BUTTON", 100, 400, 150, 150);

  XSetForeground(display, gc, whitePixel);
  // XSetBackground(display, gc, blackPixel);

  depth = DefaultDepth(display, screen);
  pixmap = XCreatePixmap(display, window, width, height, depth);

  Button *button;
  Window buttonWindow;

  int button_width = 100;
  int button_height = 100;
  int button_x = 300;
  int button_y = 300;

  background = blackPixel;

  buttonWindow = XCreateSimpleWindow(display, window, button_x, button_y, button_width, button_height, 2, border, background);
  XSelectInput(display, buttonWindow, ButtonPressMask|ButtonReleaseMask|StructureNotifyMask|ExposureMask|LeaveWindowMask|EnterWindowMask);
  XSaveContext(display, buttonWindow, context, (XPointer)button);
  XMapWindow(display, buttonWindow);

  while (open)
  {
    // Button *button = NULL;
    XNextEvent(display, &xevent);
    //XFindContext(display, window, context, (XPointer*)&button);

    if (xevent.type == MapNotify)
    {
    } 
    else if (xevent.type == ConfigureNotify)
    {
      if (width != xevent.xconfigure.width || height != xevent.xconfigure.height)
      {
        width = xevent.xconfigure.width;
        height = xevent.xconfigure.height;
        printf("Size has changed to %d by %d.\n", width, height);
      }
    }
    else if (xevent.type == Expose)
    {
      //if (button)
      //{
        buttonExpose(button, &xevent);
        // GC gc = DefaultGC(display, screen);
      //}
      XDrawString(display, buttonWindow, gc, 0, 0, "BUTTON", strlen("BUTTON"));

      printf("EXPOSE\n");
      GC gc = DefaultGC(xevent.xany.display, DefaultScreen(xevent.xany.display));
      XDrawString(xevent.xany.display, xevent.xany.window, gc, 20, 20, "BUTTON", strlen("BUTTON"));

      for (int x=50; x<100; x += 2)
      {
        for (int y=50; y<100; y += 2)
        {
          XDrawPoint(display, window, gc, x, y);
        }
      }

      int x1, y1, x2, y2;

      XDrawLine(display, window, gc, 0, 0, width/2-text_width/2, height/2);
      XDrawLine(display, window, gc, width, 0, width/2+text_width/2, height/2);
      XDrawLine(display, window, gc, 0, height, width/2-text_width/2, height/2);
      XDrawLine(display, window, gc, width, height, width/2+text_width/2, height/2);
      text_x = (width - text_width) / 2;
      text_y = (height + font->ascent) / 2;
      XDrawString(display, xevent.xany.window, gc, text_x, text_y, text, strlen(text));

      XDrawString(display, window, gc, 10, 300, "Sample", strlen("Sample"));
      XFillRectangle(display, window, gc, 20, 20, 10, 10);
      x1 = 10, y1 = 60, x2 = 180, y2 = 20;
      XDrawLine(display, window, gc, x1, y1, x2, y2);
      x1 = 200, y1 = 200, x2 = 600, y2 = 200;
      XDrawLine(display, window, gc, x1, y1, x2, y2);
      XFlush(display);
    }
    else if (xevent.type == KeyPress)
    {
      int key = xevent.xkey.keycode;

      if (key == 9) {
        open = false;
      } else {
        printf("Key: %d.\n", key);
      }
    }
    else if (xevent.type == KeyRelease)
    {
      int key = xevent.xkey.keycode;

      if (key == 9) {
        // open = false;
      } else {
        printf("Key: %d.\n", key);
      }
    }
    else if (xevent.type == MotionNotify)
    {
      int x = xevent.xmotion.x;
      int y = xevent.xmotion.y;

      printf("Mouse moved to %d %d.\n", x, y);
      XDrawPoint(display, window, gc, x, y);
    }
    else if (xevent.type == ButtonPress)
    {
      // XClearWindow(display, window);
      XClearWindow(display, xevent.xany.window);
    }
  }

  XDestroyWindow(display, window);
  XCloseDisplay(display);

  return 0;
}

