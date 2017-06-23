#include "inc/app.h"

#include <stdbool.h>

static int _isOpen(App *self) 
{
  return self->open;
}

static int _quit(App *self)
{
  self->open = false;
}

App AppCreate()
{
  App app;

  app.open = true;

  app.isOpen = _isOpen;
  app.quit = _quit;

  return app;
}
