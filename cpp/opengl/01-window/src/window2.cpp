#include <gtk/gtk.h>
#include <string.h>
#include "inc/window2.h"
#include "inc/main.h"

static GtkWidget *window;
static GtkWidget *scrolledWindow;
static GtkAdjustment *hadjustment, *vadjustment;
static GtkWidget *textview;
static GtkTextBuffer *textbuffer;
static GtkTextTagTable *texttagtable;

static gboolean keyboard(GtkWidget *widget, GdkEventKey *event, gpointer data)
{
  // 65407
  if (event->keyval == 65307)
  {
    MainClose();
  }
}

static gboolean destroy()
{
  MainClose();
}

int Window2Initialize(int argc, char *argv[])
{
  gtk_init(&argc, &argv);

  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  gtk_window_set_default_size(GTK_WINDOW(window), 400, 600);
  gtk_window_set_gravity(GTK_WINDOW(window), GDK_GRAVITY_NORTH_EAST);
  gtk_window_move(GTK_WINDOW(window), 1000, 0);
  g_signal_connect(window, "key_press_event", G_CALLBACK(keyboard), NULL);
  g_signal_connect(window, "destroy", G_CALLBACK(destroy), NULL);

  hadjustment = GTK_ADJUSTMENT(gtk_adjustment_new(0, 0, 0, 1, 1, 200));
  vadjustment = GTK_ADJUSTMENT(gtk_adjustment_new(0, 0, 0, 1, 1, 200));

  scrolledWindow = gtk_scrolled_window_new(hadjustment, vadjustment);
  gtk_widget_show(scrolledWindow);
  gtk_container_add(GTK_CONTAINER(window), scrolledWindow);

  textview = gtk_text_view_new();
  gtk_text_view_set_top_margin(GTK_TEXT_VIEW(textview), 5);
  gtk_text_view_set_right_margin(GTK_TEXT_VIEW(textview), 5);
  gtk_text_view_set_bottom_margin(GTK_TEXT_VIEW(textview), 5);
  gtk_text_view_set_left_margin(GTK_TEXT_VIEW(textview), 5);
  // gtk_text_view_set_overwrite(GTK_TEXT_VIEW(textview), true);
  gtk_text_view_set_editable(GTK_TEXT_VIEW(textview), true);
  gtk_widget_show(textview);
  gtk_container_add(GTK_CONTAINER(scrolledWindow), textview);

  texttagtable = gtk_text_tag_table_new();
  textbuffer = gtk_text_buffer_new(texttagtable);

  gtk_text_view_set_buffer(GTK_TEXT_VIEW(textview), textbuffer);

  gtk_widget_show(window);

  Window2AddAtCursor("WHAT IS NUMBER: %d.\n", 489);

  return 0;
}

int Window2Events()
{
  while (gtk_events_pending())
  {
    gtk_main_iteration();
  }
}

int Window2AddAtCursor(const char *format, ...)
{
  char buffer[512];

  va_list args;
  va_start(args, format);
  vsprintf(buffer, format, args);
  va_end(args);

  gtk_text_buffer_insert_at_cursor(textbuffer, buffer, strlen(buffer));

  gdouble upper = gtk_adjustment_get_upper(vadjustment);;
  gdouble page_size = gtk_adjustment_get_page_size(vadjustment);;
  gtk_adjustment_set_value(GTK_ADJUSTMENT(vadjustment), upper - page_size);
}
