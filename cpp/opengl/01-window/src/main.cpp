#include "inc/share.h"
#include "inc/main.h"
#include "inc/window1.h"
#include "inc/window2.h"
#include "inc/window3.h"
#include "inc/settings.h"
#include "inc/terminal.h"
#include "inc/program.h"

static int open = true;

int main(int argc, char *argv[])
{

  /*
  if (TerminalInitialize() == -1) 
  {
    ShareError("Unable to initialize Terminal.");
    return -1;
  }
  */

  if (SettingsInitialize() == -1)
  {
    ShareError("Unable to initialize Settings.");
    return -1;
  }

  if (Window1Initialize() == -1)
  {
    ShareError("Unable to initialize Window1.");
    return -1;
  }

  int width, height;
  Window1GetMonitorDimensions(&width, &height);

  if (Window2Initialize(argc, argv) == -1)
  {
    ShareError("Unable to initialize Window2.");
    return -1;
  }

  Window2AddAtCursor("MONITOR: [%d, %d].\n", width, height);

  if (Window3Initialize() == -1)
  {
    ShareError("Unable to initialize Window3.");
    return -1;
  }

  // For Testing
  // SettingsWindowStart();

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
