#include <glad/glad.h>
#include <app/new.h>

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>

static NewWindow window;

static const char *shaderDir = "/home/viktor/master/game/data/shaders";

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

static char * loadSource(const char *file) {
  char *source = NULL;
  long bufsize;
  size_t newLen;
  FILE *fp = fopen(file, "r");

  if (fp == NULL) {
    printf("UNABLE TO READ FILE ''.\n", file);
    return NULL;
  }

  fseek(fp, 0L, SEEK_END);
  bufsize = ftell(fp);
  source = (char*)malloc(sizeof(char) * (bufsize+1));
  fseek(fp, 0L, SEEK_SET);
  newLen = fread(source, sizeof(char), bufsize, fp);
  source[newLen++] = '\0';
  fclose(fp);
  return source;
}

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, GLFW_TRUE);
  }
}

static void framebuffer(GLFWwindow* window, int width, int height) {
  glViewport(0, 0, width, height);
}

int NewProgramCreate(const char *name) {
  int program = glCreateProgram();
  char vpath[256];
  char fpath[256];

  sprintf(vpath, "%s/%s.vs", shaderDir, name);
  sprintf(fpath, "%s/%s.fs", shaderDir, name);

  char *vsource = loadSource(vpath);
  char *fsource = loadSource(fpath);

  int vs = glCreateShader(GL_VERTEX_SHADER);
  glShaderSource(vs, 1, (const char **)&vsource, NULL);
  glCompileShader(vs);
  check_compilation(vs, false, GL_COMPILE_STATUS, "VERTEX SHADER COMPILATION");

  int fs = glCreateShader(GL_FRAGMENT_SHADER);
  glShaderSource(fs, 1, (const char **)&fsource, NULL);
  glCompileShader(fs);
  check_compilation(fs, false, GL_COMPILE_STATUS, "FRAGMENT SHADER COMPILATION");

  glAttachShader(program, vs);
  glAttachShader(program, fs);
  glLinkProgram(program);
  check_compilation(program, true, GL_LINK_STATUS, "FAILED TO LINK PROGRAM");

  glDeleteShader(vs);
  glDeleteShader(fs);

  free(vsource);
  free(fsource);

  return program;
}

int NewWindowOpen(NewWindow *window) {
  return !glfwWindowShouldClose(window->_window);
}

int NewWindowTerminate(NewWindow *window) {
  glfwTerminate();
}

int NewWindowEvents(NewWindow *window) {
  glfwPollEvents();
}

int NewWindowSwap(NewWindow *window) {
  glfwSwapBuffers(window->_window);
}

NewWindow NewWindowCreateWSize(int width, int height) {
  NewWindow window;

  if (!glfwInit()) {
    printf("FAILED TO INITIALIZE GLFW\n");
  }
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);
  window._window = glfwCreateWindow(width, height, "Window", NULL, NULL);
  glfwSetKeyCallback(window._window, keyboard);
  glfwSetFramebufferSizeCallback(window._window, framebuffer);
  glfwMakeContextCurrent(window._window);
  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
    printf("FAILED TO LOAD GLAD\n");
  }
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glViewport(0, 0, width, height);

  return window;
}

NewWindow NewWindowCreate() {
  NewWindow window;

  if (!glfwInit()) {
    printf("FAILED TO INITIALIZE GLFW\n");
  }
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);
  window._window = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  glfwSetKeyCallback(window._window, keyboard);
  glfwSetFramebufferSizeCallback(window._window, framebuffer);
  glfwMakeContextCurrent(window._window);
  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress)) {
    printf("FAILED TO LOAD GLAD\n");
  }
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glViewport(0, 0, 800, 600);

  return window;
}

int _new_main(int argc, char *argv[]) {

  if (argc > 2) {
    const char *arg = argv[2];
    if (strcmp(arg, "1") == 0 || strcmp(arg, "01") == 0) {
      _New_01(argc, argv);
    } else if (strcmp(arg, "2") == 0 || strcmp(arg, "02") == 0) {
      _New_02(argc, argv);
    } else if (strcmp(arg, "3") == 0 || strcmp(arg, "03") == 0) {
      _New_03(argc, argv);
    } else if (strcmp(arg, "4") == 0 || strcmp(arg, "04") == 0) {
      _New_04(argc, argv);
    } else if (strcmp(arg, "5") == 0 || strcmp(arg, "05") == 0) {
      _New_05(argc, argv);
    } else if (strcmp(arg, "6") == 0 || strcmp(arg, "06") == 0) {
      _New_06(argc, argv);
    } else if (strcmp(arg, "7") == 0 || strcmp(arg, "07") == 0) {
      _New_07(argc, argv);
    } else if (strcmp(arg, "8") == 0 || strcmp(arg, "08") == 0) {
      _New_08(argc, argv);
    } 
  }

  return 0;
}
