#include <app/cmd.h>
#include <app/today.h>
#include <app/task.h>

#include <stdio.h>
#include <string.h>

static int open = false;

int cmd_main(int argc, char *argv[]) {

  char input[512];

  open = true;

  while (open) {
    printf("[%s]\n", GetDate());
    printf("> ");
    fgets(input, 512, stdin);

    if (strcmp(input, "list\n") == 0 || strcmp(input, "show\n") == 0) {
      TaskList(TASKS_ALL);
    } else if (strcmp(input, "exit\n") == 0 || strcmp(input, "quit\n") == 0) {
      open = false;
    } else if (strcmp(input, "list completed\n") == 0 || strcmp(input, "show completed\n") == 0) {
      TaskList(TASKS_COMPLETED);
    } else if (strcmp(input, "list not completed\n") == 0 || strcmp(input, "show not completed\n") == 0) {
      TaskList(TASKS_NOT_COMPLETED);
    }
  }

  return 0;
}
