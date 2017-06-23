#include <string.h>

#include "inc/master.h"

Master LoadMaster(const char *file)
{
  Master master;

  strcpy(master.name, "William Valhakis");

  return master;
}
