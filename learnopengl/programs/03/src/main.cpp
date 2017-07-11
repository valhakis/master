#include <valhakis.h>

int main()
{

  ValLog("I'm the god of the universe.");
  ValErr("I'm the god of the universe.");
  ValSuc("I'm the god of the universe.");

  ValWindow *window = ValCreateWindow();

  while (window->open) 
  {
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    ValWindowEvents();
  }

  ValWindowDestroy();

  return 0;
}
