#include <stdio.h>
#include <gtk/gtk.h>
#include <stdbool.h>

static bool destroy(GtkWidget *window, GdkEventKey *event, gpointer user_data)
{
  const int escape = 65307;

  int key = event->keyval;

  if (key == escape)
    gtk_widget_destroy(GTK_WIDGET(window));
  else
    printf("KEY: %d.\n", key);
  return false;
}

static void activate(GtkApplication *app, gpointer user_data)
{
  GtkWidget *window;

  window = gtk_application_window_new(app);
  g_signal_connect(G_OBJECT(window), "key_press_event", G_CALLBACK(destroy), NULL);
  gtk_window_set_title(GTK_WINDOW(window), "Window");
  gtk_window_set_default_size(GTK_WINDOW(window), 500, 500);
  gtk_widget_show_all(window);
}

int main(int argc, char *argv[]) 
{
  GtkApplication *app;
  int status;

  app = gtk_application_new("org.gtk.app", G_APPLICATION_FLAGS_NONE);
  g_signal_connect(app, "activate", G_CALLBACK(activate), NULL);
  status = g_application_run(G_APPLICATION(app), argc, argv);
  g_object_unref(app);

  return status;
}

