#include <gtk/gtk.h>

static GtkWidget *window;

int MasterInitialize()
{

}

int MasterStart()
{
  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_widget_show(window);

  gtk_main();

  return 0;
}
