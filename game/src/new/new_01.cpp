#include <app/new.h>

static NewWindow window;

int _New_01(int argc, char *argv[]) {

  window = NewWindowCreate();

  while (NewWindowOpen(&window)) {
    glClear(GL_COLOR_BUFFER_BIT);

    NewWindowEvents(&window);
    NewWindowSwap(&window);
  }

  NewWindowTerminate(&window);

  return 0;
}
