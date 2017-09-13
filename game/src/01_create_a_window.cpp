#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <stdio.h>

static int WIDTH = 800;
static int HEIGHT = 600;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, GLFW_TRUE);
  }
}

static void framebuffer(GLFWwindow* window, int width, int height) {
  glViewport(0, 0, width, height);
}

int _01_create_a_window(int argc, char *argv[]) { /* <++> */
  GLFWwindow* window;
  int check;

  check = glfwInit();

  if (check == GLFW_FALSE) {
    printf("FAILED TO INITIALIZE GLFW.\n");
    return -1;
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);

#ifdef __APPLE__
  glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); 
#endif

  window = glfwCreateWindow(WIDTH, HEIGHT, "Window", NULL, NULL);

  if (window == NULL) {
    printf("FAILED TO CREATE WINDOW.\n");
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  glfwSetFramebufferSizeCallback(window, framebuffer);
  glfwMakeContextCurrent(window);

  check = gladLoadGLLoader((GLADloadproc)glfwGetProcAddress);

  if (!check) {
    printf("FAILED TO INITIALIZE GLAD.\n");
    return -1;
  }

  while (!glfwWindowShouldClose(window)) { /* <++> */
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glfwPollEvents();
    glfwSwapBuffers(window);
  }

  glfwTerminate();

  return 0;
}
