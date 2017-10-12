#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <stdio.h>
#include <stdbool.h>

static int WIDTH = 800;
static int HEIGHT = 600;
static GLFWwindow* window; 
static const char *vsSource = "#version 330 core\n \
                               layout (location = 0) in vec3 aPos; \
                               void main() { \
                                 gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0f); \
                               }"; 
static const char *fsSource = "#version 330 core\n \
                               out vec4 FragColor; \
                               void main() { \
                                 FragColor = vec4(1.0f, 0.0f, 0.0f, 1.0f); \
                               }";

static GLuint program;
static GLuint vs;
static GLuint fs;

static float vertices[] = {
  -0.5f, -0.5f, 0.0f,
  +0.5f, -0.5f, 0.0f,
  +0.0f, +0.5f, 0.0f,
};

static unsigned int vao;
static unsigned int vbo;

static bool check_compilation(GLuint id, bool isProgram, GLenum type, const char *msg) {
  int success;
  char info[1024];

  if (isProgram) {
    glGetProgramiv(id, type, &success);
  } else {
    glGetShaderiv(id, type, &success);
  }

  if (!success) {
    if (isProgram) {
      glGetProgramInfoLog(id, 1024, NULL, info);
    } else {
      glGetShaderInfoLog(id, 1024, NULL, info);
    }

    printf("ERROR[%s]: %s.\n", msg, info);
    return false;
  }

  return true;
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, GLFW_TRUE);
  }
}

static void framebuffer(GLFWwindow* window, int width, int height) {
  glViewport(0, 0, width, height);
}

int _02_hello_triangle(int argc, char *argv[]) {
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

  vs = glCreateShader(GL_VERTEX_SHADER);
  glShaderSource(vs, 1, &vsSource, NULL);
  glCompileShader(vs);
  check_compilation(vs, false, GL_COMPILE_STATUS, "FAILED TO COMPILE VERTEX SHADER");

  fs = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fs, 1, &fsSource, NULL);
  glCompileShader(fs);
  check_compilation(fs, false, GL_COMPILE_STATUS, "FAILED TO COMPILE FRAGMENT SHADER");

  program = glCreateProgram();
  glAttachShader(program, vs);
  glAttachShader(program, fs);
  glLinkProgram(program);
  check_compilation(program, true, GL_LINK_STATUS, "FAILED TO LINK PROGRAM");

  glDeleteShader(vs);
  glDeleteShader(fs);

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void *)0);
  glEnableVertexAttribArray(0);

  glBindBuffer(GL_ARRAY_BUFFER, 0);

  glBindVertexArray(0);

  while (!glfwWindowShouldClose(window)) {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glUseProgram(program);
    glBindVertexArray(vao);
    glDrawArrays(GL_TRIANGLES, 0, 3);

    glfwPollEvents();
    glfwSwapBuffers(window);
  }

  glDeleteVertexArrays(1, &vao);
  glDeleteBuffers(1, &vbo);
  glfwTerminate();

  return 0;
}
