#include <GL/glew.h>
#include <gtk/gtk.h>
#include <thread>
#include <GLFW/glfw3.h>
#include "window.h"
#include "master.h"

void sample1() {
  while (WindowOpen()) 
  {
    glClear(GL_COLOR_BUFFER_BIT);
    WindowUpdate();
    // gtk_main_iteration();
  }
}

void sample2() {

}

int main(int argc, char *argv[])
{
  // gtk_init(&argc, &argv);

  WindowInitialize();
  GlewInitialize();
  // MasterInitialize();

  //GtkWidget *window;
  //window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
  //gtk_widget_show(window);

  std::thread one1(sample1);
  std::thread one2(sample2);

  one1.join();
  one2.join();

  // gtk_main();


  WindowTerminate();
  return 0;
}
