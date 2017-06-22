#include <stdio.h>
#include <glad/glad.h>
#include "../inc/window1.h"
#include "../inc/share.h"
#include "../inc/program.h"
#include "../inc/settings.h"

const int MAX_VAOS = 10;
const int MAX_VBOS = 10;

static unsigned int vaos[MAX_VAOS];
static unsigned int vbos[MAX_VBOS];

static struct Settings *settings;

int render();

void Window1Exercise02()
{
  settings = SettingsGet();
  settings->window1Exercises[1] = true;

  float vertices[3][3];
  ShareLoadVertices((float*)&vertices, sizeof(vertices), "data/vertices.dat", "SECTION 4");

  glGenVertexArrays(MAX_VAOS, vaos);
  glGenBuffers(MAX_VBOS, vbos);

  glBindVertexArray(vaos[0]);
  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 

  Window1Register(NULL, render);
}

int render()
{
  glUseProgram(ProgramGet(PROGRAM_4));
  glBindVertexArray(vaos[0]);
  glDrawArrays(GL_TRIANGLES, 0, 3);
  glUseProgram(0);
}

