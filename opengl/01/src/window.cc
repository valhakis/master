#include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <stdio.h>
#include <stdlib.h>
#include "window.h"

static float width = 800.0f, height = 600.0f;
static GLFWwindow *window;
static float mouseX = 0.0f, mouseY = 0.0f;

typedef struct Node Node;
struct Node {
  void (*callback)(int button, int action, int mods, float x, float y);
  Node *next;
};
Node *head = NULL;

static void mouseButtonCallback(GLFWwindow *window, int button, int action, int mods) {
  if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS) {
    // printf("BUTTON PRESSED\n");
  }
  Node *current = head;
  while (current != NULL) {
    current->callback(button, action, mods, mouseX, mouseY);
    current = current->next;
  }
}

static void cursorPositionCallback(GLFWwindow *window, double xpos, double ypos) {
  mouseX = (float) xpos;
  mouseY = (float) ypos;
}

float WindowGetMouseX() {
  return mouseX;
}

float WindowGetMouseY() {
  return -(mouseY - height);
}

float WindowGetWidth() {
  return width;
}

float WindowGetHeight() {
  return height;
}

static void exampleMouseCallback(int button, int action, int mods, float x, float y) {
  // printf("MOUSE BUTTON PRESSED AT [%.2f, %.2f].\n", x, y);
}

int WindowRegisterMouseButtonCallback(void (*callback)(int button, int action, int mods, float x, float y)) {
  Node *current = head;
  while (current->next != NULL) {
    current = current->next;
  }
  current->next = (Node*) malloc(sizeof(Node));
  current->next->callback = callback;
  current->next->next = NULL;
}

int WindowCreate(int width, int height) {
  head = (Node*)malloc(sizeof(Node));
  head->callback = exampleMouseCallback;
  head->next = NULL;

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

  glfwSetCursorPosCallback(window, cursorPositionCallback);
  glfwSetMouseButtonCallback(window, mouseButtonCallback);
  glfwMakeContextCurrent(window);

  if (!gladLoadGLLoader((GLADloadproc)glfwGetProcAddress))
  {
    fprintf(stderr, "Failed to initialize glad.\n");
    return -1;
  }

  glViewport(0, 0, width, height);
}

int WindowOpen() {
  return !glfwWindowShouldClose(window);
}

int WindowUpdate() {
  if(glfwGetKey(window, GLFW_KEY_ESCAPE) == GLFW_PRESS)
    glfwSetWindowShouldClose(window, true);

  glfwPollEvents();
  glfwSwapBuffers(window);
}

int WindowDestroy() {
  glfwTerminate();
}
