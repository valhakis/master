#include <stdio.h>
#include <stdlib.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

#include "common.h"
static unsigned int program;

unsigned int ProgramGetDefault() {
  return program;
}

int ProgramSetUniform3f(const char *name, float a, float b, float c) {
  glUniform3f(glGetUniformLocation(program, name), a, b, c);
}

int ProgramLoadOrtho() {
  glm::mat4 projection = glm::ortho(0.0f, 800.0f, 0.0f, 600.0f);
  glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, glm::value_ptr(projection));
}

int ProgramLoadIdentity() {
  float m[4][4] = {
    1.0f, 0.0f, 0.0f, 0.0f,
    0.0f, 1.0f, 0.0f, 0.0f,
    0.0f, 0.0f, 1.0f, 0.0f,
    0.0f, 0.0f, 0.0f, 1.0f,
  };
  glUniformMatrix4fv(glGetUniformLocation(program, "projection"), 1, GL_FALSE, (const float *)m);
}

int ProgramSetColor3f(float r, float g, float b) {
  glUniform3f(glGetUniformLocation(program, "mColor"), r, g, b);
}

int ProgramSetColor3fv(const float c[3]) {
  glUniform3fv(glGetUniformLocation(program, "mColor"), 1, c);
}

int ProgramInitialize(const char *vpath, const char *fpath) {

  char vfile[256] = {'\0'};
  char ffile[256] = {'\0'};

  sprintf(vfile, "%s/master/opengl/01/data/shaders/%s", getenv("HOME"), vpath);
  sprintf(ffile, "%s/master/opengl/01/data/shaders/%s", getenv("HOME"), fpath);

  char *vsource = loadSource(vfile);
  int vshader = glCreateShader(GL_VERTEX_SHADER);
  glShaderSource(vshader, 1, &vsource, NULL);
  glCompileShader(vshader);
  checkCompilation(vshader, false, GL_COMPILE_STATUS);
  free(vsource);

  char *fsource = loadSource(ffile);
  int fshader = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fshader, 1, &fsource, NULL);
  glCompileShader(fshader);
  checkCompilation(fshader, false, GL_COMPILE_STATUS);
  free(fsource);

  program = glCreateProgram();

  glAttachShader(program, vshader);
  glDeleteShader(vshader);

  glAttachShader(program, fshader);
  glDeleteShader(fshader);

  glLinkProgram(program);
  checkCompilation(program, true, GL_LINK_STATUS);

  return 0;
}
