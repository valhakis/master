#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

#include "program.h"

#include "common.h"

static float width = 800.0f, height = 600.0f;

static int program;
static struct {
  int m_color;
  int model;
  int view;
  int projection;
} uni;

int program_initialize() {
  char *vsource = common_load_source("default.vs");
  int vshader = glCreateShader(GL_VERTEX_SHADER);
  glShaderSource(vshader, 1, &vsource, NULL);
  glCompileShader(vshader);
  common_check_compilation(vshader, false, GL_COMPILE_STATUS);
  free(vsource);

  char *fsource = common_load_source("default.fs");
  int fshader = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fshader, 1, &fsource, NULL);
  glCompileShader(fshader);
  common_check_compilation(fshader, false, GL_COMPILE_STATUS);
  free(fsource);

  program = glCreateProgram();

  glAttachShader(program, vshader);
  glDeleteShader(vshader);

  glAttachShader(program, fshader);
  glDeleteShader(fshader);

  glLinkProgram(program);
  common_check_compilation(program, true, GL_LINK_STATUS);

  glUseProgram(program);
  uni.m_color = glGetUniformLocation(program, "m_color");
  uni.model = glGetUniformLocation(program, "model");
  uni.view = glGetUniformLocation(program, "view");
  uni.projection = glGetUniformLocation(program, "projection");
}

void program_projection_ortho() {
  glm::mat4 matrix = glm::ortho(0.0f, (float)width, 0.0f, (float)height, -1.0f, +1.0f);
  glUniformMatrix4fv(uni.projection, 1, GL_FALSE, glm::value_ptr(matrix));
}

void program_model_translatef(float x, float y, float z) {
  glm::mat4 matrix = glm::translate(glm::mat4(), glm::vec3(x, y, z));
  glUniformMatrix4fv(uni.model, 1, GL_FALSE, glm::value_ptr(matrix));
}

int program_get() {
  return program;
}

void program_set_m_color3f(float r, float g, float b) {
  glUniform3f(uni.m_color, r, g, b);
}

void program_load_identity_mvp() {
  glm::mat4 matrix = glm::mat4();
  glUniformMatrix4fv(uni.model, 1, GL_FALSE, glm::value_ptr(matrix));
  glUniformMatrix4fv(uni.view, 1, GL_FALSE, glm::value_ptr(matrix));
  glUniformMatrix4fv(uni.projection, 1, GL_FALSE, glm::value_ptr(matrix));
}
