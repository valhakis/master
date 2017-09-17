#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <app/ven.h>
#include <app/CG.h>

#include <stdio.h>

static float WIDTH = 800.0f, HEIGHT = 600.0f;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

int _ven_chapter_02_main(int argc, char *argv[]) {

  printf("CHAPTER 02 HAS BEEN EXECUTED.\n");

  GLFWwindow* window;

  /* Initialize the library */
  if (!glfwInit())
    return -1;

  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);

  /* Create a windowed mode window and its OpenGL context */
  window = glfwCreateWindow(WIDTH, HEIGHT, "CHAPTER 02", NULL, NULL);
  if (!window)
  {
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  /* Make the window's context current */
  glfwMakeContextCurrent(window);

  gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);
  CGInitialize(window);
  VenTextInitialize("code.ttf", 30.0);

  /* Loop until the user closes the window */
  while (!glfwWindowShouldClose(window))
  {
    /* Render here */
    glClear(GL_COLOR_BUFFER_BIT);

    VenTextRender("WHAT IS TREE", 0, 0);

    /* Swap front and back buffers */
    glfwSwapBuffers(window);

    /* Poll for and process events */
    glfwPollEvents();
  }

  VenTextDestroy();
  glfwTerminate();
  return 0;
}
