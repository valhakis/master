#include "inc/program.h"
#include <valhakis.h>

static int programs[10];

int ProgramInitialize()
{
  programs[PROGRAM_DEFAULT] = ValLoadProgram("data/default.vs", "data/default.fs");
  programs[PROGRAM_1] = ValLoadProgram("data/shaders/shader1.vs", "data/shaders/shader1.fs");
  programs[PROGRAM_2] = ValLoadProgram("data/shaders/shader2.vs", "data/shaders/shader2.fs");
  programs[PROGRAM_3] = ValLoadProgram("data/shaders/shader3.vs", "data/shaders/shader3.fs");
  programs[PROGRAM_4] = ValLoadProgram("data/shaders/shader4.vs", "data/shaders/shader4.fs");
  programs[PROGRAM_5] = ValLoadProgram("data/shaders/shader5.vs", "data/shaders/shader5.fs");

  return 0;
}

int ProgramGet(program_type type)
{
  return programs[type];
}
