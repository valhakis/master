#include <stdio.h>
#include <gtk/gtk.h>
const guint ESCAPE = 65307;

GtkWidget *window;
GtkWidget *button;
GtkWidget *box;
GtkWidget *box1;
GtkWidget *label;

static void create_dialog()
{
  GtkWidget *dialog, *label, *content_area;

  dialog = gtk_dialog_new();
  gtk_widget_show(dialog);

  label = gtk_label_new("WHAT IS THIS DIALOG MESSAGE WINDOW WHAT SHIT FUCK");
  gtk_widget_show(label);

  content_area = gtk_dialog_get_content_area(GTK_DIALOG(dialog));
  gtk_container_add(GTK_CONTAINER(content_area), label);
}

static void quick_message(gchar *message)
{
  GtkWidget *dialog, *label, *content_area;

  dialog = gtk_dialog_new_with_buttons("Message", NULL, GTK_DIALOG_DESTROY_WITH_PARENT, GTK_STOCK_OK, GTK_RESPONSE_NONE, NULL);
  content_area = gtk_dialog_get_content_area(GTK_DIALOG(dialog));

  label = gtk_label_new(message);

  g_signal_connect_swapped(dialog, "response", G_CALLBACK(gtk_widget_destroy), dialog);
  gtk_container_add(GTK_CONTAINER(content_area), label);

  gtk_widget_show(dialog);
}

static void create_window()
{
  /* dialog */
  GtkWidget *window;
  GtkWidget *button;
  GtkWidget *box;

  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  box = gtk_hbox_new(FALSE, 0);
  gtk_container_add(GTK_CONTAINER(window), box);

  button = gtk_button_new_with_label("DIALOG");
  gtk_box_pack_start(GTK_BOX(box), button, FALSE, FALSE, 0);
  gtk_widget_show(button);
  g_signal_connect(button, "clicked", G_CALLBACK(create_dialog), NULL);

  gtk_widget_show(box);
  gtk_widget_show(window);
}

static GtkWidget *make_box1()
{
  GtkWidget *box;
  GtkWidget *button;

  box = gtk_hbox_new(FALSE, 0);

  button = gtk_button_new_with_label("BUTTON OF BOX1");
  gtk_box_pack_start(GTK_BOX(box), button, FALSE, FALSE, 0);
  gtk_widget_show(button);

  button = gtk_button_new_with_label("CREATE WINDOW");
  g_signal_connect(button, "clicked", G_CALLBACK(create_window), NULL);
  gtk_box_pack_start(GTK_BOX(box), button, FALSE, FALSE, 0);
  gtk_widget_show(button);

  gtk_widget_show(box);

  return box;
}

static void button_press_event()
{
  g_print("BUTTON HAS BEEN PRESSED\n");
}

static void key_press_event(GtkWidget *widget, GdkEventKey *event, gpointer data)
{
  if (event->keyval == ESCAPE) {
    return gtk_main_quit();
  }
  g_print("KEYVALUE: %d\n", event->keyval);
  g_print("KEY PRESS EVENT\n");
}

static void hello(GtkWidget *widget, gpointer data) 
{
  g_print("I HATE EVERYTHING! %s\n", data);
}

static gboolean delete_event(GtkWidget *widget, GdkEvent *event, gpointer data)
{
  g_print("DELETE EVENT OCCURRED\n");
  gtk_main_quit();
  return TRUE;
}

static void destroy(GtkWidget *widget, gpointer data)
{
  g_print("DESTROY EVENT OCCURRED\n");
  gtk_main_quit();
}

int main(int argc, char *argv[])
{

  gtk_init(&argc, &argv);

  window = gtk_window_new(GTK_WINDOW_TOPLEVEL);

  g_signal_connect(window, "delete-event", G_CALLBACK(delete_event), NULL);
  g_signal_connect(window, "destroy", G_CALLBACK(destroy), NULL);
  g_signal_connect(window, "button_press_event", G_CALLBACK(button_press_event), NULL);
  g_signal_connect(window, "key_press_event", G_CALLBACK(key_press_event), NULL);

  box = gtk_hbox_new(FALSE, 0); // jshint:ignore line

  box1 = make_box1();

  gtk_box_pack_start(GTK_BOX(box), box1, TRUE, TRUE, 0);

  gtk_window_set_title(GTK_WINDOW(window), "MOST FUCKING AWESOME APPLICATION IN THE FUCKING WORLD");

  gtk_container_set_border_width(GTK_CONTAINER(window), 10);

  label = gtk_label_new("WHAT IS THIS LABEL");
  gtk_box_pack_start(GTK_BOX(box), label, TRUE, TRUE, 0);
  gtk_widget_show(label);

  button = gtk_button_new_with_label("WHAT IS THIS SHIT!! QUIT 1 NOW!");
  gtk_box_pack_start(GTK_BOX(box), button, TRUE, TRUE, 0);
  g_signal_connect(button, "clicked", G_CALLBACK(hello), (gpointer) "BUTTON 1");
  g_signal_connect_swapped(button, "clicked", G_CALLBACK(gtk_widget_destroy), window);
  gtk_widget_show(button);

  button = gtk_button_new_with_label("WHAT IS THIS SHIT! NUMBER 2 YO FUCK");
  gtk_box_pack_start(GTK_BOX(box), button, TRUE, TRUE, 0);
  g_signal_connect(button, "clicked", G_CALLBACK(hello), (gpointer) "BUTTON 2");

  // gtk_container_add(GTK_CONTAINER(window), button);
  gtk_container_add(GTK_CONTAINER(window), box);

  gtk_widget_show(button);
  gtk_widget_show(box);
  gtk_widget_show(window);

  gtk_main();

  return 0;
}
