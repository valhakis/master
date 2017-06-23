#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <stdio.h>
#include <stdbool.h>
#include <valhakis.h>
#include "inc/share.h"

void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod)
{
  const int ESCAPE = GLFW_KEY_ESCAPE;
  const int PRESS = GLFW_PRESS;

  if (key == ESCAPE && action == PRESS)
    glfwSetWindowShouldClose(window, true);
}

void framebuffer(GLFWwindow *window, int width, int height)
{
  glViewport(0, 0, width, height);
}

int main(int argc, char *argv[]) 
{
  int width = 800, height = 600;

  GLFWwindow* window = CreateGLFWWindow(width, height);
  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    ValErr("Failed to initialize GLAD.\n");
    return -1;
  }

  ValLog("OpenGL %d.%d\n", GLVersion.major, GLVersion.minor);
  ValLog("OpenGL %s, GLSL %s.\n", glGetString(GL_VERSION), glGetString(GL_SHADING_LANGUAGE_VERSION));

  int vertexShader = ValCreateShader(GL_VERTEX_SHADER, "data/default.vs");
  int fragmentShader = ValCreateShader(GL_FRAGMENT_SHADER, "data/default.fs");

  int program = ValCreateProgram(vertexShader, fragmentShader);

  float vertices[] = {
    -0.5f, -0.5f, 0.0f,
    0.5f, -0.5f, 0.0f,
    0.0f, 0.5f, 0.0f,
  };

  unsigned int VBO, VAO;
  glGenVertexArrays(1, &VAO);
  glGenBuffers(1, &VBO);

  glBindVertexArray(VAO);
  glBindBuffer(GL_ARRAY_BUFFER, VBO);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindVertexArray(0);

  glViewport(0, 0, width, height);

  while (!glfwWindowShouldClose(window))
  {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glUseProgram(program);
    glBindVertexArray(VAO);
    glDrawArrays(GL_TRIANGLES, 0, 3);

    glfwPollEvents();
    glfwSwapBuffers(window);
  }

  glDeleteVertexArrays(1, &VAO);
  glDeleteBuffers(1, &VBO);

  glfwTerminate();
  return 0;
}

