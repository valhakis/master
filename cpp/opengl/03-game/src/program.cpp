#include <valhakis.h>
#include <string.h>
#include "inc/program.h"

struct Vao {
  unsigned int id;
  char name[100];
};

struct Program {
  int id;
  char name[100];
};

static int count = 0;
static struct Program programs[10];
static unsigned int vaos_count = 0;
static struct Vao vaos[10];

void RegisterVao(const char *name, unsigned int vaoId)
{
  struct Vao *vao = &vaos[0];
  vao->id = vaoId;
  strcpy(vao->name, name);
  vaos_count += 1;
}

void ProgramInitialize()
{
  unsigned int vao;

  float vertices[4][4];
  ValLoadVertices("RECTANGLE", "data/vertices", (float *)vertices, sizeof(vertices));
  unsigned int indices[2][3] = {
    0, 1, 3,
    1, 2, 3
  };

  glGenVertexArrays(1, &vao);
  unsigned int vbo, ebo;
  glGenBuffers(1, &vbo);
  glGenBuffers(1, &ebo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glEnableVertexAttribArray(0);

  RegisterVao("rectangle", vao);
}

unsigned int ProgramFindVao(const char *name)
{
  bool found = false;
  for (int x=0; x<vaos_count; x++)
  {
    struct Vao *vao = &vaos[x];
    if (strcmp(vao->name, name) == 0)
    {
      found = true;
      return vao->id;
    }
  }

  if (!found)
  {
    ValErr("Did not find vao '%s'.\n", name);
  }
}

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
