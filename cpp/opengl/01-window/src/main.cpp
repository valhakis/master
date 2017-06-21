#include "inc/share.h"
#include "inc/main.h"
#include "inc/window1.h"
#include "inc/window2.h"
#include "inc/window3.h"

static int open = true;

int main(int argc, char *argv[])
{
  if (Window1Initialize() > 0)
  {
    ShareError("Unable to initialize Window1.");
    return -1;
  }

  if (Window2Initialize(argc, argv) > 0)
  {
    ShareError("Unable to initialize Window2.");
    return -1;
  }

  if (Window3Initialize() > 0)
  {
    ShareError("Unable to initialize Window3.");
    return -1;
  }

  while (open)
  {
    Window1Events();
    Window2Events();
  }

  return 0;
}

void MainClose()
{
  open = false;
}
