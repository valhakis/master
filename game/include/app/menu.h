#ifndef MY_MENU_H
#define MY_MENU_H

#include <app/window.h>
#include <app/shader.h>

#include <string>

class Menu {
  public:
    Menu(Window &window);
    ~Menu();
    void update();
  protected:
  private:
    Window *p_window;
    Shader *shader;
};

#endif
