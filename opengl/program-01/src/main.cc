#include <stdio.h>

#include <GLFW/glfw3.h>

static const unsigned int width = 800, height = 600;

int main(int argc, char *argv[]) {

  GLFWwindow* window;

  if (!glfwInit()) {
    fprintf(stderr, "Failed to initialize GLFW.\n");
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);

  window = glfwCreateWindow(width, height, "program-01", NULL, NULL);

  if (window == NULL) {
    fprintf(stderr, "Failed to create window.\n");
    glfwTerminate();
    return -1;
  }

  glfwMakeContextCurrent(window);

  glViewport(0, 0, width, height);
  glClearColor(0.15f, 0.15f, 0.15f, 1.0f);

  while (!glfwWindowShouldClose(window)) {
    if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
      glfwSetWindowShouldClose(window, true);

    glClear(GL_COLOR_BUFFER_BIT);

    glfwPollEvents();
    glfwSwapBuffers(window);
  }

  glfwTerminate();

  return 0;
}
