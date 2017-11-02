#include <gtk/gtk.h>
#include "share.h"
#include <string.h>
#include <stdio.h>
#include <stdlib.h>

unsigned int num_items = 0;

struct Item {
  char *labelText;
};

static struct Item **items = NULL;

static int ItemAdd(const char *labelText) {
  items = (struct Item**)realloc(items, sizeof(struct Item**)*2);
  strcpy(items[num_items]->labelText, labelText);

  num_items += 1;
}

static struct {
  GtkWidget *temp;
} button;

int ShareInitialize(GtkWidget *grid) {

  ItemAdd("TEMP 4");

  button.temp = gtk_button_new_with_label("TEMP 1");
  gtk_grid_attach(GTK_GRID(grid), button.temp, 0, 0, 1, 1);

  button.temp = gtk_button_new_with_label("TEMP 2");
  gtk_grid_attach(GTK_GRID(grid), button.temp, 1, 0, 1, 1);

  button.temp = gtk_button_new_with_label("TEMP 3");
  gtk_grid_attach(GTK_GRID(grid), button.temp, 2, 0, 1, 1);

  return 0;
}
