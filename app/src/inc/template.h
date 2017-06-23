#ifndef MY_TEMPLATE_H
#define MY_TEMPLATE_H

typedef struct Template {
  char name[100]; // default
  char target[100]; // c
  char action[100]; // generate
  char destination[100]; // .
  char directory[100]; // /home/william/master/app/templates/c/default/
  int (*listFilesInDirectory)();
  int (*listRecursiveInformation)();
  int (*displayInformation)();
} Template;

Template TemplateCreate(const char *name, const char *target, const char *action, const char *destination);

#endif
