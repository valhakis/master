<<<<<<< HEAD
#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

#include <stdio.h>
#include <valhakis.h>
#include <math.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include "../inc/window1.h"
#include "../inc/share.h"
#include "../inc/program.h"
#include "../inc/settings.h"

static float time = glfwGetTime();

static const int MAX_VAOS = 10;
static const int MAX_VBOS = 10;

static unsigned int vaos[MAX_VAOS];
static unsigned int vbos[MAX_VBOS];

static struct Settings *settings;

static int uniform_color;
static int uniform_use_vcolor;

static int uniform_model;
static int uniform_view;
static int uniform_projection;

glm::mat4 model, view, projection;

int render();

void Window1Exercise02()
{
  settings = SettingsGet();
  // settings->window1Exercises[1] = true;

  float vertices[3][6];
  ShareLoadVertices((float*)&vertices, sizeof(vertices), "data/vertices.dat", "SECTION 4");

  glGenVertexArrays(MAX_VAOS, vaos);
  glGenBuffers(MAX_VBOS, vbos);

  glBindVertexArray(vaos[0]);
  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);
  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 

  uniform_color = ValGetUniform(ProgramGet(PROGRAM_4), "ourColor");
  uniform_use_vcolor = ValGetUniform(ProgramGet(PROGRAM_4), "use_vcolor");

  uniform_model = ValGetUniform(ProgramGet(PROGRAM_4), "model");
  uniform_view = ValGetUniform(ProgramGet(PROGRAM_4), "view");
  uniform_projection = ValGetUniform(ProgramGet(PROGRAM_4), "projection");

  Window1Register(NULL, render);
}

int render()
{
  time = glfwGetTime();

  glUseProgram(ProgramGet(PROGRAM_4));
  glBindVertexArray(vaos[0]);

  float red = (sinf(time) / 2.0f) + 0.5f;
  float green = (cosf(time) / 2.0f) + 0.5f;
  float blue = (cosf(time) / 4.0f) + 0.75f;

  // printf("RED: %.2f, GREEN: %.2f, BLUE: %.2f.\n", red, green, blue);

  model = glm::mat4();
  view = glm::mat4();
  projection = glm::mat4();

  model = glm::translate(model, glm::vec3(-0.5f, -0.5f, 0.0f));

  glUniform1i(uniform_use_vcolor, 1);
  glUniformMatrix4fv(uniform_model, 1, GL_FALSE, glm::value_ptr(model));
  glUniformMatrix4fv(uniform_view, 1, GL_FALSE, glm::value_ptr(view));
  glUniformMatrix4fv(uniform_projection, 1, GL_FALSE, glm::value_ptr(projection));
  glUniform4f(uniform_color, red, green, blue, 1.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  model = glm::mat4();
  view = glm::mat4();
  projection = glm::mat4();

  model = glm::translate(model, glm::vec3(0.5f, -0.5f, 0.0f));
  glUniform1i(uniform_use_vcolor, 0);
  glUniformMatrix4fv(uniform_model, 1, GL_FALSE, glm::value_ptr(model));
  glUniformMatrix4fv(uniform_view, 1, GL_FALSE, glm::value_ptr(view));
  glUniformMatrix4fv(uniform_projection, 1, GL_FALSE, glm::value_ptr(projection));
  glUniform4f(uniform_color, red, green, blue, 1.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  model = glm::mat4();
  view = glm::mat4();
  projection = glm::mat4();

  red = 1.0f, green = 0.3f;
  model = glm::translate(model, glm::vec3(0.5f, 0.5f, 0.0f));
  model = glm::rotate(model, glm::radians(180.0f), glm::vec3(0.0, 0.0, 1.0));
  glUniform1i(uniform_use_vcolor, 0);
  glUniformMatrix4fv(uniform_model, 1, GL_FALSE, glm::value_ptr(model));
  glUniformMatrix4fv(uniform_view, 1, GL_FALSE, glm::value_ptr(view));
  glUniformMatrix4fv(uniform_projection, 1, GL_FALSE, glm::value_ptr(projection));
  glUniform4f(uniform_color, red, green, blue, 1.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  model = glm::mat4();
  view = glm::mat4();
  projection = glm::mat4();

  red = (cosf(time) / 2.0f) + 0.5f;
  model = glm::translate(model, glm::vec3(-0.5f, 0.5f, 0.0f));
  model = glm::rotate(model, glm::radians(180.0f), glm::vec3(0.0, 0.0, 1.0));
  glUniform1i(uniform_use_vcolor, 0);
  glUniformMatrix4fv(uniform_model, 1, GL_FALSE, glm::value_ptr(model));
  glUniformMatrix4fv(uniform_view, 1, GL_FALSE, glm::value_ptr(view));
  glUniformMatrix4fv(uniform_projection, 1, GL_FALSE, glm::value_ptr(projection));
  glUniform4f(uniform_color, red, green, blue, 1.0f);
  glDrawArrays(GL_TRIANGLES, 0, 3);

  glUseProgram(0);
}

=======
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

>>>>>>> 0b8937f71d8fb659b6f2dce2f77abd8176dfb9d9
