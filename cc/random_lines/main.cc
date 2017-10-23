#include <GLFW/glfw3.h>
#include <time.h>
#include <stdio.h>
#include <math.h>

// make 100 random lines

// make one line
// random number between -1 and 1

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

int main(void)
{
  srand(time(NULL));
  GLFWwindow* window;

  /* Initialize the library */
  if (!glfwInit())
    return -1;

  glfwWindowHint(GLFW_RESIZABLE, GL_FALSE);

  /* Create a windowed mode window and its OpenGL context */
  window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
  if (!window)
  {
    glfwTerminate();
    return -1;
  }

  /* Make the window's context current */
  glfwMakeContextCurrent(window);
  glfwSetKeyCallback(window, keyboard);

  /* Loop until the user closes the window */
  while (!glfwWindowShouldClose(window))
  {
    /* Render here */
    glClear(GL_COLOR_BUFFER_BIT);

    float x1 = ((float)(rand() % 200) - 100) / 100.0f;
    float y1 = ((float)(rand() % 200) - 100) / 100.0f;

    float x2 = ((float)(rand() % 200) - 100) / 100.0f;
    float y2 = ((float)(rand() % 200) - 100) / 100.0f;

    /* draws the circle */
    glBegin(GL_LINES);
    glVertex3f(x1, y1, 0.0f);
    glVertex3f(x2, y2, 0.0f);
    glEnd();

    /* Swap front and back buffers */
    glfwSwapBuffers(window);

    /* Poll for and process events */
    glfwPollEvents();
  }

  glfwTerminate();
  return 0;
}
