/* int main(int argc, char *argv[]) {
 *  CGInitialize(window);
 *  return 0;
 * }
 */
#include <glad/glad.h>

#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include <string.h>
#include <ctype.h>

#include <app/CG.h>

#define CG_BASE_DIR "/home/viktor/master/game"
#define CG_DATA_DIR "/home/viktor/master/game/data"

static GLFWwindow *window = NULL;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

bool CGCheckShaderErrors(int id, bool isProgram, GLenum type) {
  int success = false;
  char info[1024] = {0};

  isProgram ? glGetProgramiv(id, type, &success) : glGetShaderiv(id, type, &success);

  if (!success) {
    isProgram ? glGetProgramInfoLog(id, sizeof(info), NULL, info) : glGetShaderInfoLog(id, sizeof(info), NULL, info);
    printf("INFO: '%s'\n", info);
    return false;
  }

  return true;
}

char* CGLoadSource(const char* filePath) {
  char *source = NULL;
  FILE *fp = fopen(filePath, "r");
  if (fp != NULL) {
    /* Go to the end of the file. */
    if (fseek(fp, 0L, SEEK_END) == 0) {
      /* Get the size of the file. */
      long bufsize = ftell(fp);
      if (bufsize == -1) { /* Error */ }

      /* Allocate our buffer to that size. */
      source = (char*)malloc(sizeof(char) * (bufsize + 1));

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
    printf("ERROR LOAD '%s'.\n", filePath);
    exit(EXIT_FAILURE);
  }
  return source;
}

int CGCreateShader(const char* filePath, const char* typeName) {
  char* source = CGLoadSource(filePath);

  int shader = 0;

  if (strcmp(typeName, "V-SHADER") == 0) {
    shader = glCreateShader(GL_VERTEX_SHADER);
  }

  if (strcmp(typeName, "F-SHADER") == 0) {
    shader = glCreateShader(GL_FRAGMENT_SHADER);
  }

  glShaderSource(shader, 1, (const char **)&source, NULL);
  glCompileShader(shader);
  CGCheckShaderErrors(shader, false, GL_COMPILE_STATUS);

  free(source);

  return shader;
}

int CGLoadShader(const char *location) {
  const char *shaderDir = "/home/viktor/master/game/data/shaders";

  char V_FilePath[256] = {'\0'};
  char F_FilePath[256] = {'\0'};

  sprintf(V_FilePath, "%s/%s.vs", shaderDir, location);
  sprintf(F_FilePath, "%s/%s.fs", shaderDir, location);

  int V_Shader = CGCreateShader(V_FilePath, "V-SHADER");
  int F_Shader = CGCreateShader(F_FilePath, "F-SHADER");

  int program = glCreateProgram();

  glAttachShader(program, V_Shader);
  glAttachShader(program, F_Shader);
  glLinkProgram(program);
  CGCheckShaderErrors(program, true, GL_LINK_STATUS);

  glDeleteShader(V_Shader);
  glDeleteShader(F_Shader); 

  return program;
}

char* CGGetDataLoc(const char *filePath) {
  char *result = (char*)malloc(sizeof(char) * 256);
  strcat(result, CG_DATA_DIR);
  strcat(result, "/");
  strcat(result, filePath);
  return result;
}

void CGToUpper(char *str) {
  while (*str) {
    *str = toupper(*str);
    *str++;
  }
}

void CGUniform3f(int program, const char *name, float r, float g, float b) {
  glUseProgram(program);
  glUniform3f(glGetUniformLocation(program, name), r, g, b);
}

void CGUniform3fv(int program, const char *name, float *data) {
  glUseProgram(program);
  glUniform3fv(glGetUniformLocation(program, name), 1, data);
}

void CGInitialize(GLFWwindow* win) {
  window = win;
}

void CGGetWindowDimensions(int *width, int *height) {
  if (window == NULL) {
    printf("WINDOW IS NOT INITIALIZED\n");
  }
  glfwGetFramebufferSize(window, width, height);
}

void CGMatrix4fv(int program, const char *name, float *m) {
  glUseProgram(program);
  glUniformMatrix4fv(glGetUniformLocation(program, name), 1, GL_FALSE, m);
}

void CGMakeWindow(GLFWwindow** win, int width, int height) {
  /* Initialize the library */
  if (!glfwInit()) {
    printf("FAILED TO INITIALIZE GLFW\n");
    return;
  }

  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  /* Create a windowed mode window and its OpenGL context */
  window = glfwCreateWindow(width, height, "CHAPTER 01", NULL, NULL);
  if (!window)
  {
    glfwTerminate();
    printf("FAILED TO CREATE WINDOW\n");
  }

  glfwSetKeyCallback(window, keyboard);
  /* Make the window's context current */
  glfwMakeContextCurrent(window);

  gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);

  *win = window;
}

bool CGWindowIsOpen() {
  return !glfwWindowShouldClose(window);
}

void CGWindowUpdate() {
  glfwPollEvents();
  glfwSwapBuffers(window);
}

void CGTerminate() {
  glfwTerminate();
}

