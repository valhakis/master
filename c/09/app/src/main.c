#include <gtk/gtk.h>
#include <GLFW/glfw3.h>
#include <stdarg.h>
#include <string.h>
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool input_stopped = false;

GtkTextBuffer *textviewbuffer;
GtkAdjustment *adjustment;

void toggle_input_stopped(GtkButton *btn)
{
  input_stopped = !input_stopped;
  if (input_stopped)
  {
    gtk_button_set_label(btn, "Allow Input");
  } else {
    gtk_button_set_label(btn, "Disallow Input");
  }
}

void Print(const char *format, ...)
{
  if (input_stopped) return;
  if (textviewbuffer && adjustment)
  {
    char buffer[1024];
    va_list args;
    va_start(args, format);
    vsprintf(buffer, format, args);
    gtk_text_buffer_insert_at_cursor(textviewbuffer, buffer, strlen(buffer));
    va_end(args);

    double upper = gtk_adjustment_get_upper(adjustment);
    gtk_adjustment_set_value(adjustment, upper);
  }
}

void keyboard_1(GLFWwindow* window, int key, int scancode, int action, int mod)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
  {
    glfwSetWindowShouldClose(window, true);
  }
}

bool open = true;

void quit_callback()
{
  open = false;
}

void adjustment_changed(GtkAdjustment* adjustment)
{
  // double value = gtk_adjustment_get_value(adjustment);
  // double upper = gtk_adjustment_get_upper(adjustment);
  // double lower = gtk_adjustment_get_lower(adjustment);
  // double page_size = gtk_adjustment_get_page_size(adjustment);
  // gtk_adjustment_set_value(adjustment, upper);

  // printf("VALUE: %.2f, %.2f, %.2f %.2f.\n", value, upper, lower, page_size);
}

int main(int argc, char *argv[]) 
{
  glfwInit();
  gtk_init(&argc, &argv);
  // system("clear");
  puts("WHAT IS HAPPENING");

  GtkWidget *textview;
  GtkBuilder *builder;
  GtkWidget *window;
  GtkWidget *button;
  GtkWidget *textviewscroll;

  builder = gtk_builder_new();
  gtk_builder_add_from_file(builder, "data/builder.ui", NULL);

  window = GTK_WIDGET(gtk_builder_get_object(builder, "window"));
  // GtkWindowPosition position;
  // gtk_window_set_position(GTK_WINDOW(window), position);
  g_signal_connect(window, "destroy", G_CALLBACK(quit_callback), NULL);

  button = GTK_WIDGET(gtk_builder_get_object(builder, "button1"));
  g_signal_connect(button, "clicked", G_CALLBACK(toggle_input_stopped), NULL);

  textview = GTK_WIDGET(gtk_builder_get_object(builder, "textview1"));
  textviewbuffer = gtk_text_view_get_buffer(GTK_TEXT_VIEW(textview));


  textviewscroll = GTK_WIDGET(gtk_builder_get_object(builder, "textviewscroll"));

  adjustment = gtk_scrolled_window_get_vadjustment(GTK_SCROLLED_WINDOW(textviewscroll));

  printf("Adjustment: %f.\n", gtk_adjustment_get_value(adjustment));
  printf("Adjustment: %f.\n", gtk_adjustment_get_upper(adjustment));

  gtk_widget_set_size_request(GTK_WIDGET(textviewscroll), 400, 400);
  // gtk_scrolled_window_set_vadjustment(GTK_SCROLLED_WINDOW(textviewscroll), adjustment);

  const char *string = "SAMPLE TEXT.\n";
  // gtk_text_buffer_insert_at_cursor(textviewbuffer, string, strlen(string));

  // gtk_adjustment_set_value(adjustment, gtk_adjustment_get_upper(adjustment));
  // gtk_adjustment_set_value(adjustment, 20);
  // GtkTextIter *where;
  // gtk_text_buffer_place_cursor(textviewbuffer, where);

  g_signal_connect(adjustment, "value-changed", G_CALLBACK(adjustment_changed), NULL);

  gtk_widget_show(window);

  int num = 0;

  /* end gtk */
  //GLFWwindow *win;

  //win = glfwCreateWindow(800, 600, "Win", NULL, NULL);
  //glfwMakeContextCurrent(win);

  GLFWwindow *gwin;

  gwin = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  glfwSetKeyCallback(gwin, keyboard_1);
  glfwMakeContextCurrent(gwin);

  glfwSetWindowPos(gwin, 1000, 0);

  while (open)
  {
    while (gtk_events_pending())
    {
      gtk_main_iteration();
    }

    if (glfwWindowShouldClose(gwin))
    {
      open = false;
    }

    glClear(GL_COLOR_BUFFER_BIT);
    glfwSwapBuffers(gwin);
    glfwPollEvents();

    Print("WHAT IS HAPPENING [%d].\n", num);

    num += 1;
  }

  //gtk_main();
  return 0;
}

