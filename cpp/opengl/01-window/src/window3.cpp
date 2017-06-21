#include <gtk/gtk.h>
#include <string.h>

#include "inc/main.h"
#include "inc/window3.h"
#include "inc/window2.h"
#include "inc/window1.h"

static GtkBuilder *builder;
static GObject *window;
static GObject *quitBtn;
static GObject *textview;
static GtkTextBuffer *textbuffer;

static gboolean keyboard(GtkWidget *widget, GdkEventKey *event, gpointer data);
static gboolean destroy();

static gboolean backspace(GtkWidget *widget)
{
  // printf("BACKSPACE.\n");
}

static void insert_at_cursor(GtkTextView *textview)
{
  // printf("INSERT AT CURSOR.\n");
}

static void preedit_changed(GtkTextView *textview)
{
  // printf("PREEDIT CHANGED.\n");
}

static gboolean textview_keypress(GtkTextView *textview, GdkEventKey *event)
{
  const int ENTER = 65293;
  if (event->keyval == ENTER) {
    GtkTextIter start, end;
    gtk_text_buffer_get_iter_at_line(textbuffer, &start, 0);
    gtk_text_buffer_get_iter_at_line(textbuffer, &end, 0);
    gtk_text_iter_forward_to_line_end(&end);
    const char *text = gtk_text_buffer_get_text(textbuffer, &start, &end, false);
    // printf("YOU PRESSED ENTER [%s].\n", text);
    gtk_text_buffer_set_text(textbuffer, "", -1);
    Window2AddAtCursor("PROCESS: [%s].\n", text);
    Window1Process(text);
    return true;
  } else {
    // printf("KEY PRESSED: %d.\n", event->keyval);
  }
  return false;
}

static void buffer_changed(GtkTextBuffer *textbuffer)
{
  int line_count = gtk_text_buffer_get_line_count(textbuffer);
  int char_count = gtk_text_buffer_get_char_count(textbuffer);

  // gtk_text_buffer_get_text(textbuffer);

  GtkTextMark *mark = gtk_text_buffer_get_insert(textbuffer);

  //Window2AddAtCursor("--------------------------\n");
  //Window2AddAtCursor("LINE COUNT: %d.\n", line_count);
  //Window2AddAtCursor("CHAR COUNT: %d.\n", char_count);
  //GtkTextIter start, end, iter;
  //gtk_text_buffer_get_iter_at_line(textbuffer, &iter, 0);
  // gtk_text_buffer_get_selection_bounds(textbuffer, &start, &end);
  // gtk_text_buffer_get_iter_at_offset(textbuffer, &iter, 0);
  // gtk_text_buffer_insert(textbuffer, &iter, "WHAT IS THIS\n", -1);
  //Window2AddAtCursor("--------------------------\n");
}

int Window3Initialize()
{

  builder = gtk_builder_new();

  gtk_builder_add_from_file(builder, "data/builder3.ui", NULL);

  window = gtk_builder_get_object(builder, "window1");
  g_signal_connect(window, "key_press_event", G_CALLBACK(keyboard), NULL);
  g_signal_connect(window, "destroy", G_CALLBACK(destroy), NULL);

  quitBtn = gtk_builder_get_object(builder, "quitBtn");
  g_signal_connect(quitBtn, "clicked", G_CALLBACK(destroy), NULL);

  textview = gtk_builder_get_object(builder, "textview");
  textbuffer = gtk_text_view_get_buffer(GTK_TEXT_VIEW(textview));
  gtk_widget_set_size_request(GTK_WIDGET(textview), 300, 300);
  g_signal_connect(textview, "backspace", G_CALLBACK(backspace), NULL);
  g_signal_connect(textview, "insert-at-cursor", G_CALLBACK(insert_at_cursor), NULL);
  g_signal_connect(textview, "preedit-changed", G_CALLBACK(preedit_changed), NULL);
  g_signal_connect(textbuffer, "changed", G_CALLBACK(buffer_changed), NULL);
  g_signal_connect(textview, "key_press_event", G_CALLBACK(textview_keypress), NULL);

  GtkTextIter iter;
  gtk_text_buffer_get_start_iter(textbuffer, &iter);
  gtk_text_buffer_insert(textbuffer, &iter, "WHAT IS THIS 1\n", -1);
  gtk_text_buffer_insert(textbuffer, &iter, "WHAT IS THIS 2\n", -1);

  gtk_text_buffer_get_end_iter(textbuffer, &iter);
  gtk_text_buffer_insert(textbuffer, &iter, "WHAT IS THIS 3\n", -1);
  gtk_text_buffer_insert(textbuffer, &iter, "WHAT IS THIS 4\n", -1);

  GtkTextIter start, end;

  gtk_text_buffer_set_text(textbuffer, "", -1);
  return 0;
}

static gboolean keyboard(GtkWidget *widget, GdkEventKey *event, gpointer data)
{
  // 65407
  if (event->keyval == 65307)
  {
    MainClose();
  }

  return false;
}

static gboolean destroy()
{
  MainClose();
}


