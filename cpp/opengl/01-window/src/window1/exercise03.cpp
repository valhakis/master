#include <stdio.h>
#include <glad/glad.h>
#define STB_IMAGE_IMPLEMENTATION
#include <stb/stb_image.h>
#include <valhakis.h>

#include "../inc/window1.h"
#include "../inc/settings.h"
#include "../inc/main.h"
#include "../inc/program.h"
#include "../inc/share.h"

static int render();

static struct Settings *settings;
static int program;
static unsigned int vbo, vao, ebo;
static unsigned int texture;

void Window1Exercise03()
{
  settings = SettingsGet();

  program = ProgramGet(PROGRAM_5);

  float vertices[4][5];
  ShareLoadVertices((float*)vertices, sizeof(vertices), "data/vertices.dat", "SECTION 5");
  unsigned int indices[2][3];
  ShareLoadIndices((unsigned int*)indices, sizeof(indices), "data/vertices.dat", "SECTION 5 INDICES");

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);
  glGenBuffers(1, &ebo);

  /* vao and vbo setup */
  glBindVertexArray(vao);

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void *)0);
  glEnableVertexAttribArray(0);
  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void *)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  /* texture setup */
  glGenTextures(1, &texture);

  glBindTexture(GL_TEXTURE_2D, texture);

  /* wrapping parameters */
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

  /* filtering parameters */
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

  int width, height, nr_channels;
  unsigned char *data = stbi_load("data/img/container.jpg", &width, &height, &nr_channels, 0);

  if (!data) {
    ValErr("Failed to load texture.\n");
    MainClose();
  }

  glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);
  glGenerateMipmap(GL_TEXTURE_2D);
  stbi_image_free(data);

  Window1Register(NULL, render);
}

static int render()
{
  glUseProgram(program);
  glBindVertexArray(vao);
  glBindTexture(GL_TEXTURE_2D, texture);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  glBindVertexArray(0);
  glUseProgram(0);
}
