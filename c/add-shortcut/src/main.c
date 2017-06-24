#include <gtk/gtk.h>
#include <stdbool.h>

const int escape = 65307;

static bool keyboard(GtkWidget *widget, GdkEventKey *event, gpointer user_data)
{
  int key = event->keyval;
  if (key == escape) {
    GtkWidget *target_widget = user_data;
    gtk_widget_destroy(GTK_WIDGET(target_widget));
  } else
    g_print("KEY: %d.\n", key);
  return false;
}

int main(int argc, char *argv[]) 
{
  GtkWidget   *window;
  GtkBuilder  *builder;

  gtk_init(&argc, &argv);

  builder = gtk_builder_new();
  gtk_builder_add_from_file(builder, "data/interface.ui", NULL);

  window = GTK_WIDGET(gtk_builder_get_object(builder, "window"));
  g_signal_connect(window, "key_press_event", G_CALLBACK(keyboard), window);
  g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

  gtk_main();
  return 0;
}

