#include "../inc/window1.h"
#include "../inc/main.h"
#include "../inc/settings.h"
#include <glad/glad.h>
#include <string.h>
#include <unistd.h>
#include <valhakis.h>
#include <stdio.h>

static struct Settings *settings;

static int init();
static int draw();
int PrintVertices(float *vertices, size_t size);
static int loadVertices(float *vertices, size_t size, const char *path, const char *section);

static int programs[10];

static unsigned int vao[10], vbo[10];

void Window1Exercise01(int *in_program)
{
  settings = SettingsGet();

  // settings->window1Exercises[0] = true;

  programs[0] = *in_program;
  programs[1] = ValLoadProgram("data/shaders/shader1.vs", "data/shaders/shader1.fs");
  programs[2] = ValLoadProgram("data/shaders/shader2.vs", "data/shaders/shader2.fs");
  programs[3] = ValLoadProgram("data/shaders/shader3.vs", "data/shaders/shader3.fs");

  Window1Register(init, draw);
}

static int init()
{
  float vertices[6][3];
  loadVertices((float*)&vertices, sizeof(vertices), "data/vertices.dat", "SECTION 1");

  glGenVertexArrays(10, vao);
  glGenBuffers(10, vbo);

  glBindVertexArray(vao[0]);
  glBindBuffer(GL_ARRAY_BUFFER, vbo[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 

  loadVertices((float*)vertices, sizeof(vertices), "data/vertices.dat", "SECTION 2");
  glBindVertexArray(vao[1]);
  glBindBuffer(GL_ARRAY_BUFFER, vbo[1]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 

  loadVertices((float*)vertices, sizeof(vertices), "data/vertices.dat", "SECTION 3");
  glBindVertexArray(vao[2]);
  glBindBuffer(GL_ARRAY_BUFFER, vbo[2]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 
}

static int draw()
{
  GLenum mode;
  int first;
  GLsizei count;

  glUseProgram(programs[0]);
  glBindVertexArray(vao[0]); 
  glDrawArrays(GL_TRIANGLES, 0, 3);
  glUseProgram(0);

  glUseProgram(programs[1]);
  glBindVertexArray(vao[1]);
  glDrawArrays(GL_TRIANGLES, 0, 3);
  glUseProgram(0);

  glUseProgram(programs[2]);
  glBindVertexArray(vao[2]);
  glDrawArrays(GL_TRIANGLES, 0, 3);
  glUseProgram(0);

  glUseProgram(programs[3]);
  glBindVertexArray(vao[0]); 
  glDrawArrays(GL_TRIANGLES, 3, 3);
  glUseProgram(0);

}

int PrintVertices(float *vertices, size_t size)
{
  int x;
  for (x=0; x<size/sizeof(*vertices); x++)
  {
    printf("%.2f ", *(vertices + x));
  }
  printf("\n");
}

static int loadVertices(float *vertices, size_t size, const char *path, const char *section)
{
  FILE *fp;

  if ((fp = fopen(path, "r")) == NULL)
  {
    ValErr("Failed to open file '%s'.\n", path);
    return -1;
  }

  char buffer[512];
  while (fgets(buffer, 512, fp))
  {
    buffer[strlen(buffer) - 1] = '\0';
    if (strcmp(buffer, section) == 0)
    {
      break;
    }
  }

  int x;
  for (x=0; x<size/sizeof(*vertices); x++)
  {
    fscanf(fp, "%f", vertices + x);
  }
  fclose(fp);

  return 0;
}

