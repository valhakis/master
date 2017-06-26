#include <stdio.h>
#include <valhakis.h>
#include <string.h>

static void ExSampleInitialize()
{
}

static void ExSampleEvents()
{
}

struct Ex {
  char name[100];
  void (*initialize)();
  void (*events)();
};

static struct Ex exs[10];
static int count = 0;

void ExRegisterRender(void (*render)())
{
  if (count >= 10)
  {
    ValErr("Warning: 'ex' count is high.\n");
    return;
  }
  struct Ex *ex = &exs[count];

  strcpy(ex->name, "no name");
  ex->initialize = NULL;
  ex->events = render;

  count += 1;
}

void ExsRegister(const char *name, void (*initialize)(), void (*events)())
{
  if (count >= 10)
  {
    ValErr("Warning: 'ex' count is high.\n");
    return;
  }
  struct Ex *ex = &exs[count];

  strcpy(ex->name, name);
  ex->initialize = initialize;
  ex->events = events;
  count += 1;
}

void ExsInitialize()
{
  ExsRegister("sample", &ExSampleInitialize, *ExSampleEvents);

  for (int x=0; x<count; x++)
  {
    struct Ex *ex = &exs[x];
    if (ex->initialize)
    {
      ex->initialize();
    }
  }
}

void ExsEvents()
{
  for (int x=0; x<count; x++)
  {
    struct Ex *ex = &exs[x];
    if (ex->events)
    {
      ex->events();
    }
  }
}
