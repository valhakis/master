#include <glad/glad.h>
#include <string.h>
#include <stdio.h>

#include "inc/M.h"

static const int MAX_PROGRAM_NAME = 10;
static const int MAX_PROGRAMS = 10;

struct Program {
  char name[MAX_PROGRAM_NAME];
  int id;
};

static struct {
  int count;
  struct Program programs[MAX_PROGRAMS];
} Programs;

static int CreateProgram(const char *name, const char *vpath, const char *fpath);
static int CreateShaderProgram(const char *vpath, const char *fpath);

int ProgramsGet(const char *name)
{
  int x=0;
  for (x=0; x<Programs.count; x++)
  {
    struct Program *program = &Programs.programs[x];
    if (strcmp(program->name, name) == 0)
    {
      return program->id;
    }
  }

  return MError("Failed to get program '%s'.", name);
}

int ProgramsInitialize()
{
  Programs.count = 0;

  CreateProgram("default", "data/shaders/default.vs", "data/shaders/default.fs");
}

static int CreateProgram(const char *name, const char *vpath, const char *fpath)
{
  strcpy(Programs.programs[Programs.count].name, name);
  Programs.programs[Programs.count].id = CreateShaderProgram(vpath, fpath);
  Programs.count += 1;
}

static int CreateShaderProgram(const char *vpath, const char *fpath)
{
  int program = MCreateProgram(vpath, fpath);
}
