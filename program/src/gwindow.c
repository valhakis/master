#include "inc/gwindow.h"

#include <gtk/gtk.h>
#include <stdbool.h>

static App *app;

static void destroy_callback()
{
  app->quit(app);
}

int GWindowInitialization(int argc, char *argv[], App *app_ptr)
{
  app = app_ptr;
  gtk_init(&argc, &argv);

}

int GWindowEvents()
{
  while (gtk_events_pending()) gtk_main_iteration();
}

int GWindowDestruction() 
{

}

GWindow GWindowCreate(const char *title)
{
  GWindow win;

  GtkWidget *window;
  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  g_signal_connect(window, "destroy", G_CALLBACK(destroy_callback), NULL);

  gtk_window_set_title(GTK_WINDOW(window), title);

  gtk_widget_show(window);

  return win;
}
