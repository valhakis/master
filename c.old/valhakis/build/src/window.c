#include <valhakis.h>
static ValWindow window;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mod)
{
  const int ESCAPE = GLFW_KEY_ESCAPE;
  const int PRESS = GLFW_PRESS;

  if (key == ESCAPE && action == PRESS)
  {
    glfwSetWindowShouldClose(window, true);
  }
}

static void framebuffer(GLFWwindow *window, int width, int height)
{
  glViewport(0, 0, width, height);
}

ValWindow *ValCreateWindow()
{
  window.open = true;

  glfwInit();
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3); 
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  window.window = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  glfwMakeContextCurrent(window.window);
  glfwSetFramebufferSizeCallback(window.window, framebuffer);
  glfwSetKeyCallback(window.window, keyboard);
  gladLoadGLLoader((GLADloadproc)glfwGetProcAddress);

  return &window;
}

void ValWindowEvents() 
{
  glfwSwapBuffers(window.window);
  glfwPollEvents();

  if (glfwWindowShouldClose(window.window)) {
    window.open = false;
  }
}


void ValWindowDestroy()
{
  glfwTerminate();
}
