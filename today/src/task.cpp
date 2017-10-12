#include <app/task.h>
#include <app/today.h>
#include <app/env.h>

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>


static const char* NRM ="\033[0;0m";
static const char* BLK ="\033[0;90m";
static const char* RED ="\033[0;91m";
static const char* GRN ="\033[0;92m";
static const char* YEL ="\033[0;93m";
static const char* BLU ="\033[0;94m";
static const char* PUR ="\033[0;95m";
static const char* CYN ="\033[0;96m";
static const char* WHT ="\033[0;97m";

static char dataFile[512];
static int TASK_COUNTER = 0;
static const int MAX_TASKS = 10;

static bool file_exists(const char *filePath) {
  if (access(filePath, F_OK) != -1) {
    return true;
  }
  return false;
}

struct Task {
  bool done;
  char description[500];
};

static struct Task tasks[MAX_TASKS];

static void add_task(const char *description) {
  struct Task *task = &tasks[TASK_COUNTER];

  strcpy(task->description, description);
  task->done = false;

  TASK_COUNTER += 1;
}

static bool set_task_done(int taskIndex, bool done) {
  struct Task *task = &tasks[taskIndex];
  if (task->done == done) {
    return false;
  }
  task->done = done;
  FILE *file = fopen(dataFile, "wb");
  if (file == NULL) {
    printf("FAILED TO OPEN DATA FILE '%s'\n", dataFile);
    return 0;
  }

  fwrite(tasks, sizeof(struct Task) * MAX_TASKS, 1, file);
  fclose(file);

  return true;
}

static void print_pretty_list(bool all, bool completed) {
  printf("%s==================== TASK LIST =====================%s\n", BLK, NRM);
  for (int i=0; i<MAX_TASKS; i++) {
    struct Task *task = &tasks[i];
    if (!all) {
      if (completed && !task->done) {
        continue;
      } else if (!completed &&task->done) {
        continue;
      }
    }
    printf("%s%s%s\n\n", YEL, task->description, NRM);

    printf("%sTASK AT INDEX: %d | %s", PUR, i, NRM);
    printf("%s%s%s", task->done ? GRN : RED, task->done ? "COMPLETED" : "NOT COMPLETED", NRM);
    putchar('\n');

    printf("%s---------------------------------------------------%s\n", BLK, NRM);
  }
}

static void print_task(int taskIndex) {
  struct Task *task = &tasks[taskIndex];
    printf("%s---------------------------------------------------%s\n", BLK, NRM);

    printf("%sTASK AT INDEX: %d | %s", PUR, taskIndex, NRM);
    printf("%s%s%s", task->done ? GRN : RED, task->done ? "COMPLETED" : "NOT COMPLETED", NRM);

    putchar('\n');
    putchar('\n');

    printf("%s%s%s\n", YEL, task->description, NRM);
    printf("%s---------------------------------------------------%s\n", BLK, NRM);
}

void TaskList(enum TaskListType type) {
  printf("%s==================== TASK LIST =====================%s\n", BLK, NRM);
  for (int i=0; i<MAX_TASKS; i++) {
    struct Task *task = &tasks[i];

    if (type == TASKS_COMPLETED && !task->done) {
      continue;
    }

    if (type == TASKS_NOT_COMPLETED && task->done) {
      continue;
    }

    printf("%s===================================================%s\n", BLK, NRM);
    printf("%sTASK AT INDEX: %d | %s", PUR, i, NRM);
    printf("%s%s%s", task->done ? GRN : RED, task->done ? "COMPLETED" : "NOT COMPLETED", NRM);
    putchar('\n');
    printf("%s---------------------------------------------------%s\n", BLK, NRM);
    printf("%s%s%s\n\n", YEL, task->description, NRM);
    printf("%s---------------------------------------------------%s\n", BLK, NRM);
    putchar('\n');
  }
}

int task_init(int argc, char *argv[]) {

  FILE *file = NULL;

  sprintf(dataFile, "%s/%s", TodayGetDir(), "data");

  if (file_exists(dataFile)) {
    file = fopen(dataFile, "rb");

    if (file == NULL) {
      printf("FAILED TO OPEN DATA FILE '%s'\n", dataFile);
      return 0;
    }

    fread(tasks, sizeof(struct Task) * MAX_TASKS, 1, file);
    fclose(file);

  } else {
    // CREATE 'data' FILE AND WRITE DATA INTO IT
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");
    add_task("Write a program that prints 'Hello World' to the screen.");

    file = fopen(dataFile, "wb");
    if (file == NULL) {
      printf("FAILED TO OPEN DATA FILE '%s'\n", dataFile);
      return 0;
    }

    fwrite(tasks, sizeof(struct Task) * MAX_TASKS, 1, file);
    fclose(file);
  }

  if (argc == 2) {
    if (strcmp(argv[1], "list") == 0) {
      print_pretty_list(true, false);
      /*
         for (int i=0; i<MAX_TASKS; i++) {
         struct Task *task = &tasks[i];
         printf("%d -> '%s' (done) => (%d).\n", i, task->description, task->done);
         }
         */
    }
  } 
  if (argc == 3 && strcmp(argv[1], "list") == 0 && strcmp(argv[2], "pretty") == 0) {
    print_pretty_list(true, false);
  }
  if (argc == 3 && strcmp(argv[1], "list") == 0 && strcmp(argv[2], "completed") == 0) {
    bool completed = true;
    print_pretty_list(false, true);
  }

  if (argc == 4 && strcmp(argv[1], "list") == 0 && strcmp(argv[2], "not") == 0 && strcmp(argv[3], "completed") == 0) {
    bool completed = true;
    print_pretty_list(false, false);
  }

  if (argc == 3 && strcmp(argv[1], "task") == 0) {
    int taskIndex = atoi(argv[2]);
    print_task(taskIndex);
  }

  if (argc == 4) {
    if (strcmp(argv[1], "task") == 0 && strcmp(argv[3], "done") == 0) {
      int taskIndex = atoi(argv[2]);
      if (set_task_done(taskIndex, true)) {
        printf("TASK '%d' HAS BEEN SET TO DONE\n", taskIndex);
        print_task(taskIndex);
      } else {
        printf("TASK '%d' IS ALREADY SET TO DONE\n", taskIndex);
      }
    } 
  } else if (argc == 5 && strcmp(argv[1], "task") == 0 && strcmp(argv[3], "not") == 0 && strcmp(argv[4], "done") == 0) {
    int taskIndex = atoi(argv[2]);
    if (set_task_done(taskIndex, false)) {
      printf("TASK '%d' HAS BEEN SET UNFINISHED\n", taskIndex);
      print_task(taskIndex);
    } else {
      printf("TASK '%d' IS ALREADY UNFINISHED\n", taskIndex);
    }
  }

  return 0;
}
