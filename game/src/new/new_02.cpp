#include <glad/glad.h>
#include <app/new.h>

static NewWindow window;
static int program;
static unsigned int vbo, vao;
static float vertices[] = {
  -0.5f, -0.5f, 0.0f,
  +0.5f, -0.5f, 0.0f,
  +0.0f, +0.5f, 0.0f,
};

int _New_02(int argc, char *argv[]) {
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

  while (NewWindowOpen(&window)) {
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

    glDrawArrays(GL_TRIANGLES, 0, 3);

    NewWindowEvents(&window);
    NewWindowSwap(&window);
  }

  NewWindowTerminate(&window);

  return 0;
}
