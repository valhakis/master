#include <stdio.h>
#include <valhakis.h>

int main(int argc, char *argv[]) 
{
  GLFWwindow *window = ValCreateLazyGLFWWindow();

  while (!glfwWindowShouldClose(window))
  {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glfwSwapBuffers(window);
    glfwPollEvents();
  }

  return 0;
}

