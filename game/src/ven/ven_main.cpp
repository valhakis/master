#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <linmath.h>

#include <app/ven.h>
#include <app/CG.h>

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#include <string.h>

static int btn1_callback(int argc, char *argv[]) {
  char command[256];

  sprintf(command, "%s ven 1 &", argv[0]);

  system(command);
}

static int btn2_callback(int argc, char *argv[]) {
  char command[256];

  sprintf(command, "%s ven 2 &", argv[0]);

  system(command);
}

static int btn3_callback(int argc, char *argv[]) {
  char command[256];

  sprintf(command, "%s ven 3 &", argv[0]);

  system(command);
}

static int btn4_callback(int argc, char *argv[]) {
  char command[256];

  sprintf(command, "%s ven 4 &", argv[0]);

  system(command);
}

static int btn5_callback(int argc, char *argv[]) {
  char command[256];

  sprintf(command, "%s ven 5 &", argv[0]);

  system(command);
}

static int btn6_callback(int argc, char *argv[]) {
  char command[256];

  sprintf(command, "%s ven 6 &", argv[0]);

  system(command);
}

static const int KEY_ESCAPE = GLFW_KEY_ESCAPE;
static const int PRESS = GLFW_PRESS;
static const int RELEASE = GLFW_RELEASE;
static const int MOUSE_LEFT = GLFW_MOUSE_BUTTON_LEFT;
static const int MOUSE_RIGHT = GLFW_MOUSE_BUTTON_RIGHT;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == KEY_ESCAPE && action == PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

static mat4x4 m, p, mvp;

static double mouseX, mouseY;

static struct {
  int argc;
  char **argv;
} loc;

static struct {
  int w;
  int h;
} win;

typedef struct Btn Btn;

struct Btn {
  bool mouseDown;
  bool mouseOver;
  vec3 mouseDownColor;
  vec3 mouseOverColor;
  vec3 color;
  unsigned int vao;
  float x;
  float y;
  float w;
  float h;
  int (*mousePressCallback)(int argc, char *argv[]);
};

static Btn btn1, btn2, btn3, btn4, btn5, btn6;

static const struct {
  float x, y;
  float r, g, b;
} vertices[3+3] = {
  // 0: 3
  -0.5f, -0.5f,       1.0f, 0.0f, 0.0f,
  +0.5f, -0.5f,       0.0f, 1.0f, 0.0f,
  +0.0f, +0.5f,       0.0f, 0.0f, 1.0f,

  // 3: 3
  +0.0f, +0.0f,       1.0f, 0.0f, 0.0f,
  +50.0f, +0.0f,      0.0f, 1.0f, 0.0f,
  +25.0f, +50.0f,     0.0f, 0.0f, 1.0f,
};

static unsigned int vbo, vao;

static struct {
  int MVP;
  int iCol;
} uni;

static struct {
  int vPos;
  int vCol;
} attr;

static bool box_mouse_collision(float x, float y, float w, float h) {
  float mx = (float) mouseX;
  float my = (float) mouseY;

  if (mx > x && mx < x+w && my > y && my < y+h) {
    return true;
  }

  return false;
}

static void mousepress(GLFWwindow* window, int button, int action, int mods) {
  if (button == MOUSE_LEFT && action == PRESS) {
    if (box_mouse_collision(btn1.x, btn1.y, btn1.w, btn1.h)) {
      btn1.mouseDown = true;
      if (btn1.mousePressCallback) {
        btn1.mousePressCallback(loc.argc, loc.argv);
      }
    }
    if (box_mouse_collision(btn2.x, btn2.y, btn2.w, btn2.h)) {
      btn2.mouseDown = true;
      if (btn2.mousePressCallback) {
        btn2.mousePressCallback(loc.argc, loc.argv);
      }
    }
    if (box_mouse_collision(btn3.x, btn3.y, btn3.w, btn3.h)) {
      btn3.mouseDown = true;
      if (btn3.mousePressCallback) {
        btn3.mousePressCallback(loc.argc, loc.argv);
      }
    }
    if (box_mouse_collision(btn4.x, btn4.y, btn4.w, btn4.h)) {
      btn4.mouseDown = true;
      if (btn4.mousePressCallback) {
        btn4.mousePressCallback(loc.argc, loc.argv);
      }
    }
    if (box_mouse_collision(btn5.x, btn5.y, btn5.w, btn5.h)) {
      btn5.mouseDown = true;
      if (btn5.mousePressCallback) {
        btn5.mousePressCallback(loc.argc, loc.argv);
      }
    }
    if (box_mouse_collision(btn6.x, btn6.y, btn6.w, btn6.h)) {
      btn6.mouseDown = true;
      if (btn6.mousePressCallback) {
        btn6.mousePressCallback(loc.argc, loc.argv);
      }
    }
  }

  if (button == MOUSE_LEFT && action == RELEASE) {
    btn1.mouseDown = false;
    btn2.mouseDown = false;
    btn3.mouseDown = false;
    btn4.mouseDown = false;
    btn5.mouseDown = false;
    btn6.mouseDown = false;
  }
}

Btn MakeButton(float x, float y, float w, float h) {
  Btn btn;

  btn.mousePressCallback = NULL;

  btn.mouseOver = false;
  btn.mouseDown = false;

  btn.mouseOverColor[0] = 0.3f;
  btn.mouseOverColor[1] = 1.0f;
  btn.mouseOverColor[2] = 0.3f;

  btn.mouseDownColor[0] = 0.3f;
  btn.mouseDownColor[1] = 0.3f;
  btn.mouseDownColor[2] = 1.0f;

  btn.color[0] = 1.0f;
  btn.color[1] = 0.3f;
  btn.color[2] = 0.3f;

  btn.x = x;
  btn.y = y;
  btn.w = w;
  btn.h = h;

  float vertices[4][5] = {
    btn.x,          btn.y,          1.0f, 1.0f, 1.0f,
    btn.x + btn.w,  btn.y,          1.0f, 1.0f, 1.0f,
    btn.x + btn.w,  btn.y + btn.h,  1.0f, 1.0f, 1.0f,
    btn.x,          btn.y + btn.h,  1.0f, 1.0f, 1.0f,
  };

  unsigned int indices[2][3] = {
    0, 1, 2,
    0, 3, 2,
  };

  unsigned int vbo, ebo;

  glGenVertexArrays(1, &btn.vao);
  glGenBuffers(1, &vbo);
  glGenBuffers(1, &ebo);

  glBindVertexArray(btn.vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glEnableVertexAttribArray(attr.vPos);
  glEnableVertexAttribArray(attr.vCol);

  glVertexAttribPointer(attr.vPos, 2, GL_FLOAT, GL_FALSE, sizeof(float) * 5, (void*)0);
  glVertexAttribPointer(attr.vCol, 3, GL_FLOAT, GL_FALSE, sizeof(float) * 5, (void*)(sizeof(float) * 2));

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  return btn;
}

void BtnSetCallback(Btn *btn, int (*callback)(int argc, char *argv[])) {
  btn->mousePressCallback = callback;
}

void RenderButton(Btn *btn) {
  glBindVertexArray(btn->vao);

  mat4x4_identity(m);
  mat4x4_ortho(p, 0.0f, (float)win.w, (float)win.h, 0, -0.1f, 100.0f);
  mat4x4_mul(mvp, p, m);

  if (btn->mouseDown) {
    glUniform3fv(uni.iCol, 1, btn->mouseDownColor);
  } else if (btn->mouseOver) {
    glUniform3fv(uni.iCol, 1, btn->mouseOverColor);
  } else {
    glUniform3fv(uni.iCol, 1, btn->color);
  }
  glUniformMatrix4fv(uni.MVP, 1, GL_FALSE, (const float*)mvp);
  glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)0);

  btn->mouseOver = box_mouse_collision(btn->x, btn->y, btn->w, btn->h);
}


static void initialize_uniform_locations(int program) {
  glUseProgram(program);

  uni.MVP = glGetUniformLocation(program, "MVP");
  uni.iCol = glGetUniformLocation(program, "iCol");
}

static void initialize_attribute_locations(int program) {
  glUseProgram(program);

  attr.vPos = glGetAttribLocation(program, "vPos");
  attr.vCol = glGetAttribLocation(program, "vCol");
}

int _ven_main(int argc, char *argv[]) {
  loc.argc = argc;
  loc.argv = argv;

  if (argc > 2) {
    const char* arg = argv[2];
    if (strcmp(arg, "1") == 0) {
      _ven_chapter_01_main(argc, argv);
      return 0;
    } else if (strcmp(arg, "2") == 0) {
      _ven_chapter_02_main(argc, argv);
      return 0;
    } else if (strcmp(arg, "3") == 0) {
      _ven_chapter_03_main(argc, argv);
      return 0;
    } else {
      printf("DID NOT FIND CHAPTER\n");
      return 0;
    }
  }

  GLFWwindow* window;

  /* Initialize the library */
  if (!glfwInit())
    return -1;

  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 2);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 0);
  glfwWindowHint(GLFW_RESIZABLE, false);

  /* Create a windowed mode window and its OpenGL context */
  window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
  if (!window)
  {
    glfwTerminate();
    return -1;
  }
  // glfwSetWindowPos(window, 0, 0);
  glfwSetKeyCallback(window, keyboard);
  glfwSetMouseButtonCallback(window, mousepress);

  /* Make the window's context current */
  glfwMakeContextCurrent(window);

  gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);
  glfwSwapInterval(1);

  printf("SHADING LANGUAGE VERSION: %s\n", glGetString(GL_SHADING_LANGUAGE_VERSION));

  int program = CGLoadShader("2.0/default");
  glUseProgram(program);

  initialize_uniform_locations(program);
  initialize_attribute_locations(program);

  {
    float offsetX = 5;
    float offsetY = 5;

    float width = 100.0f;
    float height = 20.0f;

    btn1 = MakeButton(offsetX, 0*height+1*offsetY, width, height);
    BtnSetCallback(&btn1, btn1_callback);
    btn2 = MakeButton(offsetX, 1*height+2*offsetY, width, height);
    BtnSetCallback(&btn2, btn2_callback);
    btn3 = MakeButton(offsetX, 2*height+3*offsetY, width, height);
    BtnSetCallback(&btn3, btn3_callback);
    btn4 = MakeButton(offsetX, 3*height+4*offsetY, width, height);
    BtnSetCallback(&btn4, btn4_callback);
    btn5 = MakeButton(offsetX, 4*height+5*offsetY, width, height);
    BtnSetCallback(&btn5, btn5_callback);
    btn6 = MakeButton(offsetX, 5*height+6*offsetY, width, height);
    BtnSetCallback(&btn6, btn6_callback);
  }

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);

  glBindVertexArray(vao);

  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

  glEnableVertexAttribArray(attr.vPos);
  glEnableVertexAttribArray(attr.vCol);

  glVertexAttribPointer(attr.vPos, 2, GL_FLOAT, GL_FALSE, sizeof(float) * 5, (void*)0);
  glVertexAttribPointer(attr.vCol, 3, GL_FLOAT, GL_FALSE, sizeof(float) * 5, (void*)(sizeof(float) * 2));

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  /* Loop until the user closes the window */
  while (!glfwWindowShouldClose(window))
  {
    float ratio;
    glfwGetFramebufferSize(window, &win.w, &win.h);
    glfwGetCursorPos(window, &mouseX, &mouseY);

    ratio = (float) win.w / (float) win.h;

    glViewport(0, 0, win.w, win.h);

    /* Render here */
    glClear(GL_COLOR_BUFFER_BIT);

    // glBindBuffer(GL_ARRAY_BUFFER, vbo);

    glUniform3f(uni.iCol, -1.0f, -1.0f, -1.0f);

    mat4x4_identity(m);
    mat4x4_rotate_Y(m, m, (float) glfwGetTime());
    mat4x4_ortho(p, -ratio, ratio, -1.0f, 1.0f, 1.0f, -1.0f);
    mat4x4_mul(mvp, p, m);

    glUseProgram(program);

    glBindVertexArray(vao);
    glUniformMatrix4fv(uni.MVP, 1, GL_FALSE, (const float*)mvp);
    glDrawArrays(GL_TRIANGLES, 0, 3);

    mat4x4_identity(m);
    mat4x4_ortho(p, 0.0f, (float)win.w, 0.0f, (float)win.h, -0.1f, 100.0f);
    mat4x4_mul(mvp, p, m);

    glUniformMatrix4fv(uni.MVP, 1, GL_FALSE, (const float*)mvp);
    glDrawArrays(GL_TRIANGLES, 0, 6);

    // btn

    glUseProgram(program);
    RenderButton(&btn1);
    RenderButton(&btn2);
    RenderButton(&btn3);
    RenderButton(&btn4);
    RenderButton(&btn5);
    RenderButton(&btn6);

    /* Swap front and back buffers */
    glfwSwapBuffers(window);

    /* Poll for and process events */
    glfwPollEvents();
  }

  glDeleteProgram(program);
  glfwTerminate();
  return 0;
}
