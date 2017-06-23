#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <dirent.h>
#include <stdbool.h>

#include "inc/template.h"
#include "inc/common.h"

int TemplateListRecursiveInformation(Template *self)
{
  commonPrintRepeat('-', 80);
  puts("RECURSIVE INFORMATION");

  DIR *dir;
  struct dirent *entry;

  int level = 0;

  if (!(dir = opendir(self->directory))) {
    printf("Unable to open directory '%s'.\n", self->directory);
  }

  if (!(entry = readdir(dir))) {
    printf("Unable to read directory '%s'.\n", self->directory);
  }

  do {
    if (entry->d_type == DT_DIR) {
      char path[1024];
      int len = snprintf(path, sizeof(path)-1, "%s/%s", self->directory, entry->d_name);
      path[len] = 0;
      if (strcmp(entry->d_name, ".") == 0 || strcmp(entry->d_name, "..") == 0) 
        continue;
      printf("%*s[%s]\n", level * 2, "", entry->d_name);
    }
  } while (entry = readdir(dir));

  closedir(dir);

  commonPrintRepeat('-', 80);
  return 0;
}

int TemplateDisplayInformation(Template *self)
{
  commonPrintRepeat('-', 80);

  printf("TEMPLATE INFORMATION\n");
  printf("Template name: %s\n", self->name);
  printf("Template target: %s\n", self->target);
  printf("Template action: %s\n", self->action);
  printf("Template destination: %s\n", self->destination);
  printf("Template directory: %s\n", self->directory);

  commonPrintRepeat('-', 80);
}

int TemplateListFilesInDirectory(Template *self)
{
  char dir[100];
  strcpy(dir, self->directory);

  DIR *dirPtr;
  struct dirent *inFile;
  FILE *commonFile;
  FILE *entryFile;

  commonPrintRepeat('-', 80);
  printf("READING DIR: %s\n", dir);

  /* open directory */
  dirPtr = opendir(dir);

  if (dirPtr == NULL) {
    printf("Unable to open directory '%s'.\n", dir);
    return -1;
  }

  /* loop through files */
  while (( inFile = readdir(dirPtr) ))
  {
    if (strcmp(inFile->d_name, ".") == 0 || strcmp(inFile->d_name, "..") == 0)
      continue;
    entryFile = fopen(inFile->d_name, "rw");
    if (entryFile == NULL) {
      printf("Unable to open entry file '%s'.\n", inFile->d_name);
      return -1;
    }
    /* if is directory */
    if (inFile->d_type == DT_DIR) {
      DIR *currentDirPtr;
      struct dirent *currentInFile;

      /* open directory */
      currentDirPtr = opendir(inFile->d_name);
      if (currentDirPtr == NULL) {
        printf("Unable to open directory '%s'.\n", inFile->d_name);
        return -1;
      }
      while (( currentInFile = readdir(currentDirPtr) ))
      {
        if (strcmp(currentInFile->d_name, ".") == 0 || strcmp(currentInFile->d_name, "..") == 0)
          continue;
        printf("\t(%s) -> %s\n", currentInFile->d_type == DT_DIR ? "DIRECTORY" : "FILE", currentInFile->d_name);
      }
    }
    printf("(%s) -> %s\n", inFile->d_type == DT_DIR ? "DIRECTORY" : "FILE", inFile->d_name);
    fclose(entryFile);
  }
  commonPrintRepeat('-', 80);

  return 0;
}

Template TemplateCreate(const char *name, const char *target, const char *action, const char *destination)
{
  Template template;

  strcpy(template.name, name);
  strcpy(template.target, target);
  strcpy(template.action, action);
  strcpy(template.destination, destination);
  sprintf(template.directory, "/home/william/master/app/templates/%s/%s", template.target, template.name);

  template.listFilesInDirectory = TemplateListFilesInDirectory;
  template.displayInformation = TemplateDisplayInformation;
  template.listRecursiveInformation = TemplateListRecursiveInformation;

  return template;
}

