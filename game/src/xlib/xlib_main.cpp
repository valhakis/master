/* # BASIC ITEMS
 * @item 1. Display
 * @item 2. Screen
 * @item 3. Window
 * @item 4. Event 
 */

/* Application is the client.
 * Display is the xserver.
 */

// REGULAR EXPRESSION
// 1. Make a window.
// 2. Make a child window.
// 3. Make a button.

// PROGRESS: [0 - 100]

#include "xlib.h"

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <X11/Xlib.h>
#include <X11/Xutil.h>

static bool open = true;

static void start_codemath() {
  system("game codemath &");
}

static void exit_cb() {
  open = false;
}

static void example_cb() {
  system("game &");
}

static void start_ven_cb() {
  system("game ven &");
}

static void start_new_8_cb() {
  // system("exec \"terminator -e 'game new 8; read'\"");
  // system("exec terminator -e 'game new 8; read'");
  system("exec terminator -e 'game new 8'");
}

int _xlib_main(int argc, char *argv[]) {

  int width = 600, height = 500;

  Display *dpy;
  int screen;
  Window childWin;
  Window win;
  XEvent event;

  Window buttonWin;

  dpy = XOpenDisplay(NULL);

  if (dpy == NULL) {
    fprintf(stderr, "CANNOT OPEN DISPLAY\n");
    return 1;
  }

  screen = DefaultScreen(dpy);

  /* parent window */
  win = XCreateSimpleWindow(dpy, RootWindow(dpy, screen), 1, 1, width, height, 1, BlackPixel(dpy, screen), WhitePixel(dpy, screen));

  XSizeHints *winHints = XAllocSizeHints();

  winHints->flags = PAllHints;
  winHints->x = 1;
  winHints->y = 1;
  winHints->min_width = width;
  winHints->min_height = height;
  winHints->max_width = width;
  winHints->max_height = height;

  XSetWMNormalHints(dpy, win, winHints);

  XSelectInput(dpy, win, ExposureMask | KeyPressMask);
  XMapWindow(dpy, win);

  /* child window */
  childWin = XCreateSimpleWindow(dpy, win, 10, 10, 200, 200, 1, BlackPixel(dpy, screen), WhitePixel(dpy, screen));

  XSelectInput(dpy, childWin, ExposureMask | KeyPressMask);
  XMapWindow(dpy, childWin);

  ButtonInitialize(dpy, screen);

  int btnIndex;

  int btn1 = ButtonAdd(win, dpy, screen, 10, 250, 140, 30, "START GAME", example_cb);
  int btn2 = ButtonAdd(win, dpy, screen, 10, 285, 140, 30, "START GAME VEN", start_ven_cb);
  int btn3 = ButtonAdd(win, dpy, screen, 10, 320, 140, 30, "START NEW 8", start_new_8_cb);
  int btn4 = ButtonAdd(win, dpy, screen, 10, 355, 140, 30, "START 'codemath'", start_codemath);

  int exitBtn = ButtonAdd(win, dpy, screen, 10, 460, 140, 30, "EXIT", exit_cb);

  // ButtonSetCb(btn1, example_cb);

  while(open) {
    ButtonUpdate(dpy, &event, screen);
    XNextEvent(dpy, &event);
    if (event.type == Expose) {

    }
    if (event.type == KeyPress) {
      switch (event.xkey.keycode) {
        case 9:
        case 24:
          open = false;
          break;
        default: 
          // printf("KEYCODE: '%d'\n", event.xkey.keycode);
          break;
      }
    }
    if (event.xany.window == childWin) {
      if (event.type == Expose) {
        XDrawLine(dpy, childWin, DefaultGC(dpy, screen), 10, 10, 60, 60);
      }
    }
  }

  XCloseDisplay(dpy);

  return 0;
}


