#include <stdio.h>

#include "window.h"

static GLFWwindow* window;

static float mouseX = 0.0f, mouseY = 0.0f;

static float width = 800.0f;
static float height = 600.0f;

static float centerX = width / 2;
static float centerY = height / 2;

static float angle = 0.0f;
static float speed = 0.5f;

typedef struct Box Box;

struct Box {
  bool mouseover;
  float x;
  float y;
  float w;
  float h;
};

struct {
  Box boxes[20*20];
  Box *active;
} grid;

static void GridInitialize() {
  float x = 0.0f;
  float y = 0.0f;

  for (int i=0; i<20*20; i++) {
    if (i % 20 == 0) {
      x = 0.0f;
      if (i != 0) {
        y += 21.0f;
      }
    } else {
      x += 21.0f;
    }


    Box *current = &grid.boxes[i];
    current->w = 20.0f;
    current->h = 20.0f;
    current->x = x;
    current->y = y;

    current->mouseover = false;
  }

  grid.active = &grid.boxes[0];
}

static void GridUpdate() {
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  glOrtho(0, width, 0, height, -1, +1);

  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();
  for (int i=0; i<20*20; i++) {
    Box *box = &grid.boxes[i];

    box->mouseover = mouseX > box->x && mouseX < box->x+box->w && mouseY > box->y && mouseY < box->y+box->h;

    if (grid.active == box) {
      glColor3f(1.0f, 0.0f, 0.0f);
    } else if (box->mouseover) {
      glColor3f(1.0f, 1.0f, 0.0f);
    } else {
      glColor3f(1.0f, 1.0f, 1.0f);
    }

    glRectf(box->x, box->y, box->x+box->w, box->y+box->h);
  }
}


static void mousepress(GLFWwindow* window, int button, int action, int mods);
static void mousemove(GLFWwindow* window, double xpos, double ypos);
static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods);

static void m_rect(float x, float y, float w, float h) {
  glRectf(x, y, x+w, y+h);
}
static void mousehover(){
  struct {
    bool mouseover;
    float x;
    float y;
    float w;
    float h;
  } rect;

  rect.x = centerX;
  rect.y = centerY;
  rect.w = 50.0f;
  rect.h = 50.0f;

  rect.mouseover = mouseX > rect.x && mouseX < rect.x+rect.w && mouseY > rect.y && mouseY < rect.y+rect.w;

  if (rect.mouseover) {
    glColor3f(1.0f, 0.0f, 0.0f);
  } else {
    glColor3f(0.0f, 1.0f, 0.0f);
  }

  m_rect(rect.x, rect.y, rect.w, rect.h);

  // glTranslatef(rect.x, rect.y, 0.0f);
  // glRectf(-rect.w/2, -rect.h/2, +rect.w/2, +rect.h/2);
  glColor3f(1.0f, 1.0f, 1.0f);
  glLoadIdentity();
  glColor3f(1.0f, 1.0f, 0.0f);
  glRectf(centerX-5, centerY-5, centerX+5, centerY+5);
  glColor3f(1.0f, 1.0f, 1.0f);
  //{}
}
int main() {
#ifdef _WIN32
  setbuf(stdout, NULL);
#endif
  WindowInitialize();

  window = WindowReturn();
  glfwSetCursorPosCallback(window, mousemove);
  glfwSetMouseButtonCallback(window, mousepress);
  glfwSetKeyCallback(window, keyboard);

  GridInitialize();

  glViewport(0, 0, width, height);

  while (WindowOpen()) {
    glClear(GL_COLOR_BUFFER_BIT);

    GridUpdate();

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(0, width, 0, height, -1, +1);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    //glTranslatef(mouseX, mouseY, 0.0f);
    //glRotatef(angle, 0.0f, 0.0f, 1.0f);

    glRecti(-3, -3, 3, 3);

    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    /*
       for (int i=0; i<=height; i += 20) {
       glBegin(GL_LINES);
       glVertex2f(0, i);
       glVertex2f(width, i);
       glEnd();
       }

       for (int i=0; i<=width; i += 20) {
       glBegin(GL_LINES);
       glVertex2f(i, 0);
       glVertex2f(i, height);
       glEnd();
       }
       */
    mousehover();
    angle += speed;

    WindowUpdate();
  }

  WindowDestroy();

  return 0;
}

static void mousemove(GLFWwindow* window, double xpos, double ypos) {
  mouseX = (float) xpos;
  mouseY = -((float)ypos-height);
};

static void mousepress(GLFWwindow* window, int button, int action, int mods) {
  for (int i=0; i<20*20; i++) {
    Box *box = &grid.boxes[i];
    if (box->mouseover) {
      grid.active = box;
      break;
    }
  }
}

static void keyboard(GLFWwindow *window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }

  int index = 0;

  if (action == GLFW_PRESS) {
    for (int i=0; i<20*20; i++) {
      Box *box = &grid.boxes[i];
      if (box == grid.active) {
        index = i;
        break;
      }
    }
    // 0: 5   [20]
    // 1: 25  [20]
    // 2: 45  [20]
    // 3: 65  [20]
    if (key == GLFW_KEY_LEFT && index > 0) {
      grid.active = &grid.boxes[((int)(index/20)*20+index % 20)-1];
    }
    if (key == GLFW_KEY_RIGHT && index < 40*40) {
      grid.active = &grid.boxes[((int)(index/20)*20+index % 20)+1];
    }
  }
}
