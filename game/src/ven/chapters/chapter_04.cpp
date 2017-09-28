#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <app/ven.h>
#include <app/CG.h>

#include <linmath.h>

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

static struct {
  int argc;
  char **argv;
} loc;

static float mouseX = 0.0f, mouseY = 0.0f;
static GLFWwindow* window = NULL;

static float fontSize = 25.0f;
static int width = 800.0f, height = 600.0f;
static int program;

static bool box_mouse_collision(float mx, float my, float x, float y, float w, float h) {
  return mx > x && mx < x+w && my > y && my < y+h;
}

static void close_window() {
  glfwSetWindowShouldClose(window, true);
}

static void start_new_8() {
  char command[256] = {'\0'};
  sprintf(command, "%s new 8 &", loc.argv[0]);
  system(command);
}

static void start_ven() {
  char command[256] = {'\0'};
  sprintf(command, "%s ven &", loc.argv[0]);
  system(command);
}

typedef struct Button Button;
struct Button {
  float color[3];
  float textColor[3];
  float mouseCollisionTextColor[3];
  float mouseCollisionColor[3];
  float mouseButtonPressColor[3];
  float mouseButtonPressTextColor[3];
  bool mouseCollision;
  bool mouseButtonPress;
  char text[256];
  unsigned int vao, vbo, ebo;
  float x;
  float y;
  float w;
  float h;
  void (*callback)();
};

static Button exitBtn;

const int NUM_BUTTONS = 10;
typedef struct ButtonList ButtonList;
struct {
  Button buttons[NUM_BUTTONS];
} buttonList;

void ButtonCheckMouseCollision(Button *btn, float mouseX, float mouseY) {
  btn->mouseCollision = box_mouse_collision(mouseX, mouseY, btn->x, btn->y, btn->w, btn->h);
}

static void mousemove(GLFWwindow* window, double x, double y) {
  mouseX = x;
  mouseY = -(y-height);
  for (int i=0; i<NUM_BUTTONS; i++) {
    ButtonCheckMouseCollision(&buttonList.buttons[i], x, -(y-height));
  }

  ButtonCheckMouseCollision(&exitBtn, x, -(y-height));
}

static void mousepress(GLFWwindow* window, int button, int action, int mods) {
  for (int i=0; i<NUM_BUTTONS; i++) {
    Button *btn = &buttonList.buttons[i];
    if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS && btn->mouseCollision) {
      if (btn->callback) {
        btn->callback();
      }
      btn->mouseButtonPress = true;
    }
    if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_RELEASE) {
      btn->mouseButtonPress = false;
    }
  }

  if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS && exitBtn.mouseCollision) {
    exitBtn.mouseButtonPress = true;
    if (exitBtn.callback) {
      exitBtn.callback();
    }
  }
  if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_RELEASE) {
    exitBtn.mouseButtonPress = false;
  }
}

static void ButtonSetCallback(Button *btn, void (*callback)()) {
  btn->callback = callback;
}

static Button MakeButton(float x, float y, float w, float h) {
  Button btn;

  strcpy(btn.text, "NO TEXT");

  btn.callback = NULL;

  btn.mouseCollision = false;
  btn.mouseButtonPress = false;

  btn.color[0] = 1.0f;
  btn.color[1] = 0.3f;
  btn.color[2] = 0.3f;

  btn.textColor[0] = 1.0f;
  btn.textColor[1] = 1.0f;
  btn.textColor[2] = 0.3f;

  btn.mouseCollisionColor[0] = 1.0f;
  btn.mouseCollisionColor[1] = 1.0f;
  btn.mouseCollisionColor[2] = 0.3f;

  btn.mouseCollisionTextColor[0] = 0.0f;
  btn.mouseCollisionTextColor[1] = 0.0f;
  btn.mouseCollisionTextColor[2] = 0.0f;

  btn.mouseButtonPressColor[0] = 0.3f;
  btn.mouseButtonPressColor[1] = 0.3f;
  btn.mouseButtonPressColor[2] = 1.0f;

  btn.mouseButtonPressTextColor[0] = 1.0f;
  btn.mouseButtonPressTextColor[1] = 0.3f;
  btn.mouseButtonPressTextColor[2] = 0.3f;

  btn.x = x;
  btn.y = y;
  btn.w = w;
  btn.h = h;

  float vertices[4][2] = {
    btn.x, btn.y,
    btn.x+btn.w, btn.y,
    btn.x+btn.w, btn.y+btn.h,
    btn.x, btn.y+btn.h,
  };

  unsigned int indices[2][3] = {
    0, 1, 2,
    0, 3, 2,
  };

  glGenVertexArrays(1, &btn.vao);
  glGenBuffers(1, &btn.vbo);
  glGenBuffers(1, &btn.ebo);

  glBindVertexArray(btn.vao);
  glBindBuffer(GL_ARRAY_BUFFER, btn.vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);
  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, btn.ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);
  glVertexAttribPointer(0, 2, GL_FLOAT, GL_FALSE, 2 * sizeof(float), (void*)0);
  glEnableVertexAttribArray(0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  return btn;
}

static void UpdateButton(Button *btn) {
  glUseProgram(program);

  mat4x4 p;
  mat4x4_ortho(p, 0.0f, (float)width, 0.0f, (float)height, -1.0f, 1.0f);
  CGMatrix4fv(program, "projection", (float*)p);

  glBindVertexArray(btn->vao);
  if (btn->mouseButtonPress) {
    CGUniform3fv(program, "color", (float*)btn->mouseButtonPressColor);
  } else if (btn->mouseCollision) {
    CGUniform3fv(program, "color", (float*)btn->mouseCollisionColor);
  } else {
    CGUniform3f(program, "color", btn->color[0], btn->color[1], btn->color[2]);
  }
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)0);
  glBindVertexArray(0);
  glUseProgram(0);

  float x = btn->x + 5.0f;
  float y = btn->y + (btn->h / 2) - (fontSize / 3);
  if (btn->mouseButtonPress) {
    VenTextRenderColor3f(btn->text, x, y, btn->mouseButtonPressTextColor[0], btn->mouseButtonPressTextColor[1], btn->mouseButtonPressTextColor[2]);
  } else if (btn->mouseCollision) {
    VenTextRenderColor3f(btn->text, x, y, btn->mouseCollisionTextColor[0], btn->mouseCollisionTextColor[1], btn->mouseCollisionTextColor[2]);
  } else {
    VenTextRenderColor3f(btn->text, x, y, btn->textColor[0], btn->textColor[1], btn->textColor[2]);
  }
}

static void DestroyButton(Button *btn) {
  glDeleteVertexArrays(1, &btn->vao);
  glDeleteBuffers(1, &btn->vbo);
  glDeleteBuffers(1, &btn->ebo);
}

static void InitializeButtonList() {

  float x = 5.0f;
  float w = 300.0f;
  float h = 30.0f;
  float y = height - h - 5.0f;

  float offsetY = 5.0f;

  for (int i=0; i<NUM_BUTTONS; i++) {
    Button *btn = &buttonList.buttons[i];
    *btn = MakeButton(x, y, w, h);

    y -= h + offsetY;
  }
}

static void UpdateButtonList() {
  for (int i=0; i<NUM_BUTTONS; i++) {
    UpdateButton(&buttonList.buttons[i]);
  }
}

static void ButtonSetText(Button *btn, const char *text) {
  strcpy(btn->text, text);
}

int _ven_chapter_04_main(int argc, char *argv[]) {
  loc.argc = argc;
  loc.argv = argv;

  CGInitialize(NULL);

  CGMakeWindow(&window, (int)width, (int)height);
  VenTextInitialize("code.ttf", fontSize);

  glfwSetWindowTitle(window, "CHAPTER 04");

  program = CGLoadShader("button");
  exitBtn = MakeButton(width-200-5, height-50-5, 200, 50);

  ButtonSetText(&exitBtn, "EXIT");
  ButtonSetCallback(&exitBtn, close_window);

  InitializeButtonList();
  glfwSetCursorPosCallback(window, mousemove);
  glfwSetMouseButtonCallback(window, mousepress);

  ButtonSetText(&buttonList.buttons[0], "EXAMPLE BUTTON 01");
  ButtonSetText(&buttonList.buttons[1], "START VEL");
  ButtonSetCallback(&buttonList.buttons[1], start_ven);

  ButtonSetText(&buttonList.buttons[2], "START NEW 8");
  ButtonSetCallback(&buttonList.buttons[2], start_new_8);

  while (CGWindowIsOpen()) {
    glClearColor(0.05f, 0.05f, 0.05f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    UpdateButton(&exitBtn);
    UpdateButtonList();

    CGWindowUpdate();
  }

  DestroyButton(&exitBtn);
  VenTextDestroy();
  CGTerminate();

  printf("CHAPTER 03 HAS BEEN EXECUTED.\n");
  return 0;
}
