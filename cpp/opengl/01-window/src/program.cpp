#include "inc/program.h"
#include <valhakis.h>

static int programs[10];

int ProgramInitialize()
{
  programs[0] = ValLoadProgram("data/default.vs", "data/default.fs");
  programs[1] = ValLoadProgram("data/shaders/shader1.vs", "data/shaders/shader1.fs");
  programs[2] = ValLoadProgram("data/shaders/shader2.vs", "data/shaders/shader2.fs");
  programs[3] = ValLoadProgram("data/shaders/shader3.vs", "data/shaders/shader3.fs");
  programs[4] = ValLoadProgram("data/shaders/shader4.vs", "data/shaders/shader4.fs");

  return 0;
}

int ProgramGet(program_type type)
{
  return programs[type];
}
