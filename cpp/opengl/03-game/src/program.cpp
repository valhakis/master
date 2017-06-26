#include <valhakis.h>
#include <string.h>

struct Program {
  int id;
  char name[100];
};

static int count = 0;
static struct Program programs[10];

void ProgramCreate(const char *name, const char *vpath, const char *fpath)
{
  struct Program *program = &programs[count];

  strcpy(program->name, name);
  program->id = ValLoadProgram(vpath, fpath);

  count += 1;
}

int ProgramFind(const char *name) 
{
  for (int x=0; x<count; x++)
  {
    if (strcmp(programs[x].name, name) == 0)
    {
      return programs[x].id;
    }
  }
}
