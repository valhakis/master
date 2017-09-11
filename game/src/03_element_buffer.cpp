#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <stdio.h>
#include <stdbool.h>

static int WIDTH = 800;
static int HEIGHT = 600;
static GLFWwindow* window; 
static const char *vsSource = "#version 330 core\n \
                               layout (location = 0) in vec3 aPos; \
                               layout (location = 1) in vec3 aCol; \
                               out vec3 ACol; \
                               void main() { \
                                 gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0f); \
                                   ACol = aCol; \
                               }"; 
static const char *fsSource = "#version 330 core\n \
                               out vec4 FragColor; \
                               in vec3 ACol; \
                               void main() { \
                                 FragColor = vec4(ACol, 1.0f); \
                               }";

static GLuint program;
static GLuint vs;
static GLuint fs;

// C _______ D
//   |\    |
//   | \   |
//   |  \  |
//   |   \ |
//   |    \|
//   |_____\
// A         B

static float vertices[] = {
  // 1. triangle

  /* 0 */ -0.9f, -0.9f, 0.0f,   1.0f, 1.0f, 0.0f, // A bottom left
  /* 1 */ -0.1f, -0.9f, 0.0f,   1.0f, 1.0f, 0.0f, // B bottom right
  /* 2 */ -0.9f, +0.9f, 0.0f,   1.0f, 1.0f, 0.0f, // C top left

  // 2. triangle
  
  /* 3 */ -0.1f, -0.9f, 0.0f,   0.0f, 1.0f, 0.0f, // B bottom right
  /* 4 */ -0.1f, +0.9f, 0.0f,   0.0f, 1.0f, 0.0f, // D top right
  /* 5 */ -0.9f, +0.9f, 0.0f,   0.0f, 1.0f, 0.0f, // C top left

  // 3. rectangle
  
  /* 6 */ +0.9f, -0.9f, 0.0f,   0.0f, 1.0f, 0.5f, // B bottom right
  /* 7 */ +0.9f, +0.9f, 0.0f,   0.0f, 1.0f, 0.5f, // D top right
  /* 8 */ +0.1f, +0.9f, 0.0f,   0.0f, 1.0f, 0.5f, // C top left
  /* 9 */ +0.1f, -0.9f, 0.0f,   0.0f, 1.0f, 0.5f, // A bottom left
};

static unsigned int indices[] = {
  9, 6, 8,
  6, 8, 7,
};

static unsigned int vaos[2];
static unsigned int vbos[2];
static unsigned int ebos[2];

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

int _03_element_buffer(int argc, char *argv[]) {
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

  glGenVertexArrays(2, vaos);
  glGenBuffers(2, vbos);
  glGenBuffers(2, ebos);

  glBindVertexArray(vaos[0]);

  glBindBuffer(GL_ARRAY_BUFFER, vbos[0]);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebos[0]);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void *)0);
  glEnableVertexAttribArray(0);
  glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, 6 * sizeof(float), (void *)(3 * sizeof(float)));
  glEnableVertexAttribArray(1);

  glBindBuffer(GL_ARRAY_BUFFER, 0);

  glBindVertexArray(0);

  unsigned int frame = 0;
  int mode = 0;

  while (!glfwWindowShouldClose(window)) {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glUseProgram(program);

    if (frame % 3000 == 0 && frame != 0) {
      mode += 1;
      if (mode > 2) mode = 0;
    }

    switch (mode) {
      case 0: glPolygonMode(GL_FRONT_AND_BACK, GL_FILL); break;
      case 1: glPolygonMode(GL_FRONT_AND_BACK, GL_LINE); break;
      case 2: glPolygonMode(GL_FRONT_AND_BACK, GL_POINT); break;
    }

    glBindVertexArray(vaos[0]);
    glDrawArrays(GL_TRIANGLES, 0, 6);
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, 0);

    glfwPollEvents();
    glfwSwapBuffers(window);

    frame += 1;
  }

  glDeleteVertexArrays(2, vaos);
  glDeleteBuffers(2, vbos);
  glfwTerminate();

  return 0;
}
