#include <stdio.h>

#include "inc/functions.h"
#include "inc/master.h"
#include "inc/xwindow.h"
#include "inc/gwindow.h"
#include "inc/app.h"
#include "inc/twindow.h"

App *globalApp;

int main(int argc, char *argv[])
{
  App app = AppCreate();

  globalApp = &app;

  GWindowInitialization(argc, argv, &app);
  TWindowInitialization(argc, argv, &app);

  TWindow tWindow = TWindowCreate("TWindow 1");
  TWindow tWindow2 = TWindowCreate("TWindow 2");

  GWindow gWindow1 = GWindowCreate("GWindow 1");
  GWindow gWindow2 = GWindowCreate("GWindow 2");

  Master master = LoadMaster("data/master.json");

  printf("Name: %s\n", master.name);

  XWindow xWindow = XWindowCreate();

  while (app.isOpen(&app))
  {
    GWindowEvents();

    tWindow.events(&tWindow);
    tWindow2.events(&tWindow2);

    // app.quit(&app);
  }

  GWindowDestruction();
  TWindowDestruction();

  return 0;
}
