#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <stdbool.h>
#include <unistd.h>
#include "default.h"
#include <X11/Xlib.h>
#include <X11/Xutil.h>

bool open = true;

int *arr;

typedef struct Button Button;
struct Button {
  int x;
};

int NumButtons = 0;
Button **AllButtons;

Button *ButtonCreate(int x, int y, int w, int h, const char *label) {
  // Button *btn = (Button*)malloc(sizeof(Button));

  // AllButtons[0] = btn;
  // printf("ALL BUTTONS: '%x'.\n", AllButtons[0]);
  // AllButtons[NumButtons] = btn;

  // NumButtons += 1;
  // return btn;
}

int _master_execute(int argc, char *argv[]) {

  Button **buttons;

  for (int i=0; i<100; i++) {
    if (i == 0) {
      buttons = (Button**)malloc(sizeof(Button*));
    } else {
      buttons = (Button**)realloc(buttons, sizeof(Button*)*(i+1));
    }
    Button *btn = (Button*)malloc(sizeof(Button));
    *(buttons+i) = btn;
  }

  printf("SINGLE_BUTTON: '%d' bits\n", sizeof(Button));
  printf("ALL_BUTTONS: '%d' bits\n", sizeof(Button)*100);
  printf("BUTTONS_POINTER: '%d' bits\n", sizeof(Button*)*100);
  Button bns[100];
  printf("BNS: '%d' bits\n", sizeof(bns));


  for (int i=0; i<100; i++) {
    free(*(buttons+i));
  }

  free(buttons);

  return 0;

  unsigned int width = 500;
  unsigned int height = 500;

  // MAKES CONNECTION TO THE DISPLAY
  Display *dpy = XOpenDisplay(NULL);

  XColor color;
  Colormap cmap = DefaultColormap(dpy, 0);

  XParseColor(dpy, cmap, "#FF3333", &color);
  XAllocColor(dpy, cmap, &color);

  // CREATES WINDOW
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

  Button *button = ButtonCreate(10, 10, 100, 50, "BUTTON 1");

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

  // CHOOSES INPUT EVENTS
  XSelectInput(dpy, win, StructureNotifyMask | KeyPressMask | KeyReleaseMask | ExposureMask);
  XSetForeground(dpy, XDefaultGC(dpy, XDefaultScreen(dpy)), WhitePixel(dpy, DefaultScreen(dpy)));
  XSetBackground(dpy, XDefaultGC(dpy, XDefaultScreen(dpy)), BlackPixel(dpy, DefaultScreen(dpy)));

  // SHOWS THE WINDOW
  XMapWindow(dpy, win);
  XFlush(dpy);

  XClearWindow(dpy, win);

  while (open) {
    XEvent ev;

    // CATCHES THE NEXT OCCURRING EVENT
    XNextEvent(dpy, &ev);

    if (ev.type == ConfigureNotify) {
      if (width != ev.xconfigure.width || height != ev.xconfigure.height) {
        width = ev.xconfigure.width;
        height = ev.xconfigure.height;
        printf("RESIZED: [%d x %d].\n", width, height);
      }
    }

    // WHEN WINDOW IS EXPOSED
    if (ev.type == Expose) {

    }

    // WHEN WINDOW IS CREATED
    if (ev.type == MapNotify) {

    }

    // MANAGES KEY PRESS INPUT
    if (ev.type == KeyPress) {
      if (ev.xkey.keycode == 0x09) {
        open = false;
      } else {
        printf("KEYPRESS: [%x].\n", ev.xkey.keycode);
      }
    }
  }

  //free(button);
  //free(AllButtons);
  XDestroyWindow(dpy, win);
  // CLOSES THE DISPLAY
  XCloseDisplay(dpy);

  return 0;
}
