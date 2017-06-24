#include <stdio.h>
#include <gtk/gtk.h>
#include <stdbool.h>

const int escape = 65307;

static bool keyboard(GtkWidget *widget, GdkEventKey *event, gpointer user_data)
{
  int key = event->keyval;
  if (key == escape) {
    GtkWidget *target_widget = (GtkWidget*)user_data;
    gtk_widget_destroy(GTK_WIDGET(target_widget));
  } else
    printf("KEY: %d.\n", key);
  return false;
}

static void destroy(GtkWidget *widget, GdkEventKey *event, gpointer user_data)
{
  GtkWidget *target_widget = (GtkWidget *)user_data;
  gtk_widget_destroy(GTK_WIDGET(target_widget));
}

static void activate(GtkApplication *app, gpointer user_data)
{
  GtkWidget *window;
  GtkWidget *grid;
  GtkWidget *button;

  window = gtk_application_window_new(app);
  g_signal_connect(G_OBJECT(window), "key_press_event", G_CALLBACK(destroy), GTK_WIDGET(window));
  gtk_window_set_title(GTK_WINDOW(window), "Window");
  gtk_window_set_default_size(GTK_WINDOW(window), 500, 500);
  gtk_container_set_border_width(GTK_CONTAINER(window), 10);

  grid = gtk_grid_new();
  g_object_set(G_OBJECT(grid), "row-spacing", 5);
  g_object_set(G_OBJECT(grid), "column-spacing", 5);
  g_object_set(G_OBJECT(grid), "column-homogeneous", true);
  g_object_set(G_OBJECT(grid), "row-homogeneous", true);
  gtk_container_add(GTK_CONTAINER(window), grid);

  int left, top, width, height;

  /* button 1 */
  button = gtk_button_new_with_label("Quit");
  g_signal_connect(button, "clicked", G_CALLBACK(destroy), GTK_WIDGET(window));

  left = 0, top = 0, width = 1, height = 1;
  gtk_grid_attach(GTK_GRID(grid), button, left, top, width, height);

  /* button 2 */
  button = gtk_button_new_with_label("Quit");
  g_signal_connect(button, "clicked", G_CALLBACK(destroy), GTK_WIDGET(window));

  left = 1, top = 0, width = 1, height = 1;
  gtk_grid_attach(GTK_GRID(grid), button, left, top, width, height);

  /* button 3 */
  button = gtk_button_new_with_label("Quit");
  g_signal_connect(button, "clicked", G_CALLBACK(destroy), GTK_WIDGET(window));

  left = 0, top = 1, width = 2, height = 1;
  gtk_grid_attach(GTK_GRID(grid), button, left, top, width, height);

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

