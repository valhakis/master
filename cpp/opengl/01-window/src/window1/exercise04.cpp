#include "../inc/window1.h"
#include "../inc/settings.h"
#include "../inc/program.h"
#include "../inc/share.h"

static int draw();
static int program;
static unsigned int vao[5], vbo[5];

void Window1Exercise04()
{
  struct Settings *settings = SettingsGet();
  settings->window1Exercises[3] = true;

  program = ProgramGet(PROGRAM_5);

  float vertices[3][3];
  ShareLoadDefaultTriangleVertices((float *)&vertices);

  Window1Register(NULL, draw);
}

static int draw()
{
  glUseProgram(program);
  glBindVertexArray(vao[0]);
  glDrawArrays(GL_TRIANGLES, 0, 3);
  glBindVertexArray(0);
  glUseProgram(0);
}
