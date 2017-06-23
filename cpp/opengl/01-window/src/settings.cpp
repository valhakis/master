#include "inc/settings.h"

#include <gtk/gtk.h>
#include <stdio.h>

static Settings settings;
static GtkBuilder *builder;
static GObject *triangleCheckBtn;
static GObject *rectangleCheckBtn;
static GObject *grid;

struct Settings *SettingsGet()
{
  return &settings;
}


int SettingsInitialize()
{
  settings.triangle = false;
  settings.rectangle = false;

  int x;
  for (x=0; x<10; x++)
  {
    settings.window1Exercises[x] = false;
  }

  return 0;
}

static void triangle_check_btn_clicked(GtkCheckButton* *triangleCheckBtn)
{
  gboolean active = gtk_toggle_button_get_active(GTK_TOGGLE_BUTTON(triangleCheckBtn));
  settings.triangle = active;
}

static void rectangle_check_btn_clicked(GtkCheckButton* *rectangleCheckBtn)
{
  gboolean active = gtk_toggle_button_get_active(GTK_TOGGLE_BUTTON(rectangleCheckBtn));
  settings.rectangle = active;
}

static void toggle_window1_exercise_callback(GtkCheckButton *checkBtn, gpointer data)
{
  gboolean active = gtk_toggle_button_get_active(GTK_TOGGLE_BUTTON(checkBtn));

  bool *setting = (bool *)data;

  *setting = active;
}

int SettingsWindowStart()
{
  builder = gtk_builder_new();
  gtk_builder_add_from_file(builder, "data/settings.ui", NULL);

  triangleCheckBtn = gtk_builder_get_object(builder, "triangleCheckBtn");
  gtk_toggle_button_set_active(GTK_TOGGLE_BUTTON(triangleCheckBtn), settings.triangle);
  g_signal_connect(triangleCheckBtn, "clicked", G_CALLBACK(triangle_check_btn_clicked), NULL);

  rectangleCheckBtn = gtk_builder_get_object(builder, "rectangleCheckBtn");
  gtk_toggle_button_set_active(GTK_TOGGLE_BUTTON(rectangleCheckBtn), settings.rectangle);
  g_signal_connect(rectangleCheckBtn, "clicked", G_CALLBACK(rectangle_check_btn_clicked), NULL);

  grid = gtk_builder_get_object(builder, "grid");

  GtkWidget *checkBtn;
  int x;
  for (x=0; x<10; x++)
  {
    char label_text[100];
    sprintf(label_text, "Window 1 Exercise %d", x + 1);
    checkBtn = GTK_WIDGET(gtk_check_button_new_with_label(label_text));
    gtk_toggle_button_set_active(GTK_TOGGLE_BUTTON(checkBtn), settings.window1Exercises[x]);
    g_signal_connect(checkBtn, "clicked", G_CALLBACK(toggle_window1_exercise_callback), &settings.window1Exercises[x]);
    gtk_widget_show(GTK_WIDGET(checkBtn));
    gtk_grid_attach(GTK_GRID(grid), GTK_WIDGET(checkBtn), 1, 2 + x, 1, 1);
  }

  // starting from row 3

  return 0;
}
