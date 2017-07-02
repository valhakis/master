#include <stdlib.h>
#include <stdio.h>
#include <valhakis.h>
#include <gtk/gtk.h>
#include <glad/glad.h>
#include <GL/gl.h>
#include <stdbool.h>

int program;

const int escape = 65307;

static bool render(GtkGLArea *area, GdkGLContext *ctx)
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);

  return true;
}

static bool button_press(GtkWidget *widget, GdkEventButton *event)
{
  double x = event->x, y = event->y;
  unsigned int state = event->state;
  unsigned int button = event->button;
  g_print("BUTTON PRESSED [x: %.2f, y: %.2f] [state: %d, button: %d].\n", x, y, state, button);
}

static void print_callback(GtkWidget *widget, gpointer user_data)
{
  const char *msg = (const char *)user_data;
  g_print("%s\n", msg);
}

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

static void destroy(GtkWidget *widget, gpointer user_data)
{
  GtkWidget *target_widget = (GtkWidget *)user_data;
  gtk_widget_destroy(GTK_WIDGET(target_widget));
}

static void activate(GtkApplication *app, gpointer user_data)
{
  GtkWidget *window;
  GtkWidget *grid;
  GtkWidget *button;
  GtkBuilder *builder;

  //if (!gladLoadGLLoader((GLADloadproc)))
  if (!gladLoadGL())
  {
    ValErr("Failed to initialize GLAD.\n");
    exit(EXIT_FAILURE);
  }

  program = glCreateProgram();

  window = gtk_application_window_new(app);
  gtk_window_set_title(GTK_WINDOW(window), "Window");
  gtk_window_set_default_size(GTK_WINDOW(window), 500, 500);
  gtk_container_set_border_width(GTK_CONTAINER(window), 10);
  g_signal_connect(window, "key_press_event", G_CALLBACK(keyboard), window);

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
  button = gtk_button_new_with_label("Hello");
  g_signal_connect(button, "clicked", G_CALLBACK(print_callback), "What is happening.");

  left = 0, top = 1, width = 2, height = 1;
  gtk_grid_attach(GTK_GRID(grid), button, left, top, width, height);

  gtk_widget_show_all(window);

  window = NULL;

  /* builder / window2 */
  builder = gtk_builder_new();
  gtk_builder_add_from_file(builder, "data/window2.ui", NULL);

  window = GTK_WIDGET(gtk_builder_get_object(builder, "window"));
  g_signal_connect(window, "key_press_event", G_CALLBACK(keyboard), window);
  g_signal_connect(window, "button_press_event", G_CALLBACK(button_press), NULL);

  /* window 3 */
  GtkWidget *gl_area;

  gtk_builder_add_from_file(builder, "data/window3.ui", NULL);
  window = GTK_WIDGET(gtk_builder_get_object(builder, "window"));
  g_signal_connect(window, "key_press_event", G_CALLBACK(keyboard), window);

  gl_area = GTK_WIDGET(gtk_builder_get_object(builder, "gl_area"));
  g_signal_connect(gl_area, "render", G_CALLBACK(render), NULL);
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
