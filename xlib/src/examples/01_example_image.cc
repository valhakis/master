#include <X11/Xlib.h>
#include <X11/Xutil.h>

#include <stdio.h>

int _01_example_main(int argc, char *argv[]) {

  XEvent event;
  Display *dpy = XOpenDisplay(NULL);
  Window win = XCreateSimpleWindow(dpy, DefaultRootWindow(dpy), 0, 0, 500, 500, 1, WhitePixel(dpy, 0), BlackPixel(dpy, 0));

  XSizeHints *hints = XAllocSizeHints();
  hints->flags = PAllHints;
  hints->x = 1;
  hints->y = 1;
  hints->min_width = 500;
  hints->min_height = 500;
  hints->max_width = 500;
  hints->max_height = 500;
  XSetWMNormalHints(dpy, win, hints);

  Visual visual;
  unsigned int depth;
  int format;
  int offset;
  char *data;
  unsigned int width;
  unsigned int height;
  int bitmap_pad;
  int bytes_per_line;
  XImage *image = XCreateImage(dpy, &visual, depth, format, offset, data, width, height, bitmap_pad, bytes_per_line);

  // REGULAR EXPRESSION
  // / ^\s*\/\/ /g
  // \B\$\w+
  // $example one $two

  // 1. Grab pixels out of image.
  // 2. Create @XImage with @XCreateImage
  // 3. Generate pixmap with @XCreatePixmap
  // 4. Paint it to the window with @XCopyArea.
  // 5. Re-copy each expose event.

  XSelectInput(dpy, win, ExposureMask | StructureNotifyMask | KeyPressMask);
  XMapWindow(dpy, win);
  XFlush(dpy);

  while (1) {
    XNextEvent(dpy, &event);
    if (event.type == Expose) {

    }
    if (event.type == KeyPress) {
      int key = event.xkey.keycode;

      if (key == 9) {
        break;
      }
    }
  }

  XDestroyWindow(dpy, win);
  XCloseDisplay(dpy);

  return 0;
}
