#include <stdio.h>
#include <stb_image.h>

#include "inc/M.h"
#include "inc/window.h"
#include "inc/programs.h"

int main(int argc, char *argv[]) 
{
  setbuf(stdout, NULL);

  if (MInitializeGLFW() == -1)
  {
    return MError("Failed to initialize GLFW.");
  }

  int width = 800, height = 600;

  if (WindowInitialize(width, height) == -1)
  {
    return MError("Failed to initialize window.");
  }

  while (MisOpen())
  {
    WindowEvents();

    MGLFWEvents();
  }

  MTerminate();
  return 0;
}
