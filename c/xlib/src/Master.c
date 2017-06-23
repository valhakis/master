#include <stdbool.h>
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

#include "include/Game.h"
#include "include/XApp.h"

static int GetInput();
static int WorkWithInput();
static int DisplayHelp();

static int running = true;
char input[100];

int MasterInitialize()
{
}

int MasterRunning() {
  return running;
}

int MasterClose() {
  running = false;
}

int MasterEvents()
{
  GetInput();
  WorkWithInput();
}

static int GetInput()
{
  printf("> ");
  fgets(input, 100, stdin);
}

static int WorkWithInput()
{
  if (strcmp("exit\n", input) == 0) {
    MasterClose();
  } else if (strcmp("help\n", input) == 0) {
    DisplayHelp();
  } else if (strcmp("start game\n", input) == 0) {
    GameStart();
  } else if (strcmp("XApp\n", input) == 0) {
    XAppStart();
  } else if (strcmp("xapp\n", input) == 0) {
    XAppStart();
  } else {
    printf("No such command.\n");
  }
}

static int DisplayHelp()
{
  FILE *fp;
  char *line = NULL;
  size_t len = 0;
  ssize_t read;

  const char *file = "data/help.txt";

  fp = fopen(file, "r");
  if (fp == NULL) {
    printf("Read failed %s.", file);
    return -1;
  }

  while ((read = getline(&line, &len, fp)) != -1) {
    printf("%s", line);
  }

  fclose(fp);
  if (line) {
    free(line);
  }

  return 0;
}
