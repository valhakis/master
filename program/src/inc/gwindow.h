#ifndef MY_G_WINDOW
#define MY_G_WINDOW

#include "app.h"

typedef struct GWindow {

} GWindow;

GWindow GWindowCreate();

int GWindowInitialization(int argc, char *argv[], App *app);
int GWindowEvents();
int GWindowDestruction();

#endif
