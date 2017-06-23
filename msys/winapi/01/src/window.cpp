#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <stb_image.h>

#include "inc/M.h"
#include "inc/programs.h"

GLFWwindow* window;

static unsigned int vao, texture;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods);

int WindowInitialize(int width, int height)
{
  window = glfwCreateWindow(width, height, "Window", NULL, NULL);
  glfwSetKeyCallback(window, keyboard);
  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    return MError("Failed to initialize glad.");
  }

  if (ProgramsInitialize() == -1)
  {
    return MError("Failed to initialize programs.");
  }

  float vertices[] = {
    +0.5f, +0.5f, 0.0f,   +1.0f, +1.0f,
    +0.5f, -0.5f, 0.0f,   +1.0f, +0.0f,
    -0.5f, -0.5f, 0.0f,   +0.0f, +0.0f,
    -0.5f, +0.5f, 0.0f,   +0.0f, +1.0f,
  };
  unsigned int indices[] = {
    0, 1, 3,  
    1, 2, 3  
  };

  unsigned int vbo, ebo;
  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);
  glGenBuffers(1, &ebo);

  /* setup vao */
  glBindVertexArray(vao);

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);

  glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0); 
  glBindVertexArray(0); 

  /* setup texture */
  glGenTextures(1, &texture);
  glBindTexture(GL_TEXTURE_2D, texture); 

  // set the texture wrapping parameters
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);	// set texture wrapping to GL_REPEAT (default wrapping method)
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

  // set texture filtering parameters
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

  // load image, create texture and generate mipmaps
  int nr_channels;
  // stbi_set_flip_vertically_on_load(true); // tell stb_image.h to flip loaded texture's on the y-axis.
  stbi_set_flip_vertically_on_load(true);
  unsigned char *data = stbi_load("data/textures/container.jpg", &width, &height, &nr_channels, 0);
  if (data)
  {
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);
    glGenerateMipmap(GL_TEXTURE_2D);
  }
  else
  {
    MError("Failed to load texture.");
  }
  stbi_image_free(data);

  return 0;
}

int WindowEvents()
{
  glClear(GL_COLOR_BUFFER_BIT);

  glUseProgram(ProgramsGet("default"));
  glBindVertexArray(vao);
  glBindTexture(GL_TEXTURE_2D, texture);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);
  // glDrawArrays(GL_TRIANGLES, 0, 3);
  glBindVertexArray(0);
  glUseProgram(0);

  glfwSwapBuffers(window);

  if (glfwWindowShouldClose(window))
  {
    MClose();
  }
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
    glfwSetWindowShouldClose(window, GL_TRUE);
}
