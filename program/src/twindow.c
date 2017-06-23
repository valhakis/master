#include "inc/twindow.h"

#include <stdio.h>
#include <stdlib.h>

extern App *globalApp;

static char *vertexSource;
static char *fragmentSource;

static GLuint vertexShader;
static GLuint fragmentShader;

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods) 
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
    glfwSetWindowShouldClose(window, GL_TRUE);
}

static char *LoadSource(const char *file)
{
  char *source = NULL;
  FILE *fp = fopen(file, "r");
  if (fp != NULL) {
    /* Go to the end of the file. */
    if (fseek(fp, 0L, SEEK_END) == 0) {
      /* Get the size of the file. */
      long bufsize = ftell(fp);
      if (bufsize == -1) { /* Error */ }

      /* Allocate our buffer to that size. */
      source = malloc(sizeof(char) * (bufsize + 1));

      /* Go back to the start of the file. */
      if (fseek(fp, 0L, SEEK_SET) != 0) { /* Error */ }

      /* Read the entire file into memory. */
      size_t newLen = fread(source, sizeof(char), bufsize, fp);
      if ( ferror( fp ) != 0 ) {
        fputs("Error reading file", stderr);
      } else {
        source[newLen++] = '\0'; /* Just to be safe. */
      }
    }
    fclose(fp);
  } else {
    printf("UNABLE TO OPEN FILE %s\n", file);
  }
  return source;
}

static void LoadShaders()
{
  // vertexShader = glCreateShader(GL_VERTEX_SHADER);
  //glShaderSource(vertexShader, 1, (const GLchar **)&vertexSource, NULL);
  //glCompileShader(vertexShader);

  int success;
  char infoLog[512];

  // glGetShaderiv(vertexShader, GL_COMPILE_STATUS, &success);

  /*
  if (!success) {
    glGetShaderInfoLog(vertexShader, 512, NULL, infoLog);
    printf("VERTEX SHADER COMPILATION FAILURE: %s\n", infoLog);
  }
  */

  // fragmentShader = glCreateShader(GL_FRAGMENT_SHADER);
}


int TWindowInitialization(int argc, char *argv[], App *app)
{
  char *vertexSource = LoadSource("data/shaders/default.vs");
  char *fragmentSource = LoadSource("data/shaders/default.fs");

  LoadShaders();

  printf("IS OPEN: %d\n", app->open);

  if (!glfwInit()) {
    printf("UNABLE TO INITIALIZE GLFW\n");
  }

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  //if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  //{
    //printf("FAILED TO INITIALIZE GLAD.\n");
  //}
}

static int _events(TWindow *self) 
{
  if (!glfwWindowShouldClose(self->window)) {
    glClear(GL_COLOR_BUFFER_BIT);
    glfwSwapBuffers(self->window);
    glfwPollEvents();
  }

  //printf("WINDOW SHOULD CLOSE: %d\n", glfwWindowShouldClose(self->window));

  if (glfwWindowShouldClose(self->window)) {
    //glfwSetWindowShouldClose(self->window, GL_TRUE);
    //glfwDestroyWindow(self->window);
    // printf("WINDOW SHOULD CLOSE\n");
    globalApp->quit(globalApp);
    //printf("APP IS OPEN: %d\n", globalApp->open);
  }
}

TWindow TWindowCreate(const char *title)
{
  TWindow window;

  window.window = glfwCreateWindow(800, 600, title, NULL, NULL);

  if (!window.window) {
    printf("UNABLE TO CREATE WINDOW\n");
  }

  glfwSetKeyCallback(window.window, keyboard);
  glfwMakeContextCurrent(window.window);

  window.events = _events;

  return window;
}

int TWindowDestruction()
{
  free(vertexSource);
  free(fragmentSource);
  glfwTerminate();
}
