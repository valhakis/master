#define GLFW_EXPOSE_NATIVE_X11 1
#include <gdk/gdkx.h>
#include <gtk/gtk.h>
#include <gdk/gdk.h>
#include <GLFW/glfw3.h>
#include <GLFW/glfw3native.h>
#include <stdio.h>

int _02_example_main(int argc, char *argv[]) {

  GLFWwindow* window;

  GtkWidget *gWin;
  XEvent event;
  Display *dpy;
  Window win;
  XSizeHints *hints;
  Window wins[2];

  Window xWin;

  gtk_init(&argc, &argv);
  gWin = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_widget_show(gWin);
  wins[1] = gdk_x11_get_default_root_xwindow();

  if (!glfwInit()) {
    printf("FAILED TO INITIALIZE GLFW\n");
    return -1;
  }

  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);
  window = glfwCreateWindow(800, 500, "G WINDOW", NULL, NULL);
  if (!window) {
    glfwTerminate();
    return -1;
  }
  glfwMakeContextCurrent(window);

  dpy = glfwGetX11Display();
  xWin = glfwGetX11Window(window);

  // dpy = XOpenDisplay(NULL);
  //win = XCreateSimpleWindow(dpy, DefaultRootWindow(dpy), 0, 0, 500, 500, 1, WhitePixel(dpy, 0), BlackPixel(dpy, 0));
  //XReparentWindow(dpy, xWin, win, 120, 120);
  wins[0] = XCreateSimpleWindow(dpy, xWin, 10, 10, 100, 100, 1, BlackPixel(dpy, 0), WhitePixel(dpy, 0));

  //XStoreName(dpy, win, "WINDOW");

  //XSelectInput(dpy, win, ExposureMask | StructureNotifyMask | KeyPressMask);

  //hints = XAllocSizeHints(); 
  //hints->flags = PAllHints;
  //hints->x = 1;
  //hints->y = 1;
  //hints->min_width = 500;
  //hints->min_height = 500;
  //hints->max_width = 500;
  //hints->max_height = 500;

  //XSetWMNormalHints(dpy, win, hints);

  //XMapWindow(dpy, win);
  XMapWindow(dpy, wins[0]);

  //XFlush(dpy);

  while (1) {
    if (!glfwWindowShouldClose(window)) {
      glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
      glClear(GL_COLOR_BUFFER_BIT);
      glfwSwapBuffers(window);
      glfwPollEvents();
    }

    while (gtk_events_pending()) {
      gtk_main_iteration();
    }

    XNextEvent(dpy, &event);
    //if (event.type == Expose) {
    //
    //}
    if (event.type == KeyPress) {
      int key = event.xkey.keycode;

      if (key == 9) {
        break;
      }
    }
  }

  glfwTerminate();

  return 0;
}
