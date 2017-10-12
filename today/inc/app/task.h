#ifndef MY_TASK_H
#define MY_TASK_H

#include <stdbool.h>

enum TaskListType {
  TASKS_ALL,
  TASKS_COMPLETED,
  TASKS_NOT_COMPLETED
};

int task_init(int argc, char *argv[]);
void TaskList(TaskListType type);

#endif
