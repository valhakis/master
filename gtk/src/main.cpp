#include <gtk/gtk.h>
#include <stdio.h>
#include <stdlib.h>

static void start_game_xlib() {
  system("game xlib &");
}

static gboolean delete_event(GtkWidget *widget, GdkEvent *event, gpointer data) {
  return TRUE;
}

static void destroy(GtkWidget *widget, gpointer data) {
  gtk_main_quit();
}

static void keypress(GtkWidget *widget, GdkEventKey *event) {
  printf("key: %d\n", event->keyval);
  if (event->keyval == 65307 || event->keyval == 113) {
    gtk_widget_destroy(widget);
  }
}

int main(int argc, char *argv[]) {
  printf("GTK MAIN APPLICATION\n");

  gtk_init(&argc, &argv);

  GtkWidget *window;
  GtkWidget *button;

  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_default_size(GTK_WINDOW(window), 500, 500);
  gtk_window_set_resizable(GTK_WINDOW(window), false);
  g_signal_connect(window, "delete-event", G_CALLBACK(delete_event), NULL);
  g_signal_connect(window, "destroy", G_CALLBACK(destroy), NULL);
  g_signal_connect(window, "key_press_event", G_CALLBACK(keypress), NULL);

  button = gtk_button_new_with_label("START GAME XLIB");
  g_signal_connect(button, "clicked", G_CALLBACK(start_game_xlib), NULL);

  gtk_container_add(GTK_CONTAINER(window), button);

  gtk_widget_show(button);
  gtk_widget_show(window);

  gtk_main();

  return 0;
}
