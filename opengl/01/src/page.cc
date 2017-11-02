#include <stdio.h>
#include <string.h>

#include "common.h"
#include "program.h"
#include "mouse.h"
#include "window.h"
#include "rect.h"

const unsigned int NUM_PAGES = 4;

typedef struct Page Page;

struct Page {
  unsigned int index;
  float x, y, w, h;
  float color[3];
  bool mouseover;
};

Page pages[NUM_PAGES];
Page *currentPage;

static void mouseButtonCallback(int button, int action, int mods, float x, float y) {
  if (button == GLFW_MOUSE_BUTTON_LEFT && action == GLFW_PRESS) {
    // printf("MOUSE BUTTON PRESSED AT [%.2f, %.2f].\n", x, y);
    for (int i=0; i<NUM_PAGES; i++) {
      Page *page = &pages[i];
      if (page->mouseover) {
        // printf("MOUSE IS OVER\n");
        currentPage = page;
      }
    }
  }
}

unsigned int PageGetCurrentIndex() {
  return currentPage->index;
}

int PageInitialize() {
  WindowRegisterMouseButtonCallback(mouseButtonCallback);

  setVec3f(pages[0].color, 1.0f, 0.0f, 0.0f);
  setVec3f(pages[1].color, 1.0f, 1.0f, 0.0f);
  setVec3f(pages[2].color, 0.0f, 1.0f, 0.0f);
  setVec3f(pages[3].color, 0.0f, 0.0f, 1.0f);

  float step = 30;
  for (int i=0; i<NUM_PAGES; i++) {
    Page *page = &pages[i];
    page->index = i;

    page->x = 10 + i*step;
    page->y = 10;
    page->w = 20;
    page->h = 20;

    page->mouseover = false;
  }

  currentPage = &pages[0];
}

int PageUpdate() {
  RectWColor3fv(10.0f, WindowGetHeight() - 40.0f, 30.0f, 30.0f, currentPage->color);

  for (int i=0; i<NUM_PAGES; i++) {
    Page *page = &pages[i];

    page->mouseover = PointRectCollision(page->x, page->y, page->w, page->h, MouseX(), MouseY());

    float color[3];
    if (currentPage == &pages[i]) {
      setVec3f(color, page->color[0] * 0.2, page->color[1] * 0.2, page->color[2] * 0.2);
    } else if (page->mouseover) {
      setVec3f(color, 0.3f, 0.3f, 0.3f);
    } else {
      memcpy(color, page->color, sizeof(color));
    }
    RectWColor3fv(page->x, page->y, page->w, page->h, color);
  }
}
