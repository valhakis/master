#include <glad/glad.h>
#include <app/new.h>

#include <math.h>

#include <glm/glm.hpp>
#include <glm/gtc/matrix_transform.hpp>
#include <glm/gtc/type_ptr.hpp>

static glm::mat4 model;
static glm::mat4 view;
static glm::mat4 projection;

static NewWindow window;
static int program;
static unsigned int vbo, vao;
static float vertices[] = {
  -0.5f, -0.5f, 0.0f,
  +0.5f, -0.5f, 0.0f,
  +0.0f, +0.5f, 0.0f,
};

static void setMatrix(const char *name, glm::mat4 matrix) {
  glUniformMatrix4fv(glGetUniformLocation(program, name), 1, GL_FALSE, glm::value_ptr(matrix));
}

int _New_03(int argc, char *argv[]) {
  struct {
    float speed;
    glm::vec3 pos;
  } mesh = {
    0.0001f,
    glm::vec3(0.0f, 0.0f, 0.0f)
  };
  window = NewWindowCreate();
  program = NewProgramCreate("simple");

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
  glEnableVertexAttribArray(0);
  glBindVertexArray(0);

  glUseProgram(program);
  glBindVertexArray(vao);

  projection = glm::perspective(glm::radians(30.0f), 800.0f/600.0f, 0.1f, 100.0f);
  view = glm::translate(view, glm::vec3(0.0f, 0.0f, -3.0f));

  while (NewWindowOpen(&window)) {
    float time = glfwGetTime();
    float sinTime = sinf(time);
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

    model = glm::mat4();
    model = glm::translate(model, mesh.pos);

    setMatrix("model", model);
    setMatrix("view", view);
    setMatrix("projection", projection);

    glDrawArrays(GL_TRIANGLES, 0, 3);

    NewWindowEvents(&window);
    NewWindowSwap(&window);

    mesh.pos.z = sinTime;
  }

  NewWindowTerminate(&window);

  return 0;
}
