#include <stdio.h>
#include <valhakis.h>
#include "inc/window.h"
#include "inc/triangle.h"
#include "inc/program.h"
#include "inc/main.h"
#include "inc/monster.h"
#include "inc/exs.h"

static int open = true;

int main()
{
  WindowInitialize();
  ProgramInitialize();
  ProgramCreate("default", "data/shaders/default.vs", "data/shaders/default.fs");
  TriangleInitialize();
  MonsterInitialize();

  ExsInitialize();
  ExTriangleInitialize();
  ExRectangleInitialize();

  while (MainOpen())
  {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    TriangleRender();
    MonsterRender();
    ExsEvents();

    WindowEvents();
  }

  WindowTerminate();
  TriangleTerminate();

  return 0;
}

int MainOpen()
{
  return open;
}

int MainClose()
{
  open = false;
}

