#ifndef MY_XLIB_H
#define MY_XLIB_H

#include <X11/Xlib.h>
#include <X11/Xutil.h>

void ButtonUpdate(Display *dpy, XEvent *event, int screen);
void ButtonInitialize(Display *dpy, int screen);

int ButtonAdd(Window root, Display *dpy, int screen, int x, int y, int w, int h, const char *label, void (*cb)());
void ButtonSetCb(int index, void (*cb)());
#endif
