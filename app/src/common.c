#include <stdio.h>
#include <sys/stat.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include <dirent.h>
#include <stdbool.h>

bool commonIsDirectory(struct dirent *entry)
{
  if (entry->d_type == DT_DIR) 
    return true;

  return false;
}

bool commonDirectoryIsDot(struct dirent *entry)
{
  if (strcmp(entry->d_name, ".") == 0|| strcmp(entry->d_name, "..") == 0)
    return true;
  return false;
}

int commonRecursionListDir(const char *name, int level)
{
  DIR *directory;
  struct dirent *entry;

  if (!(directory = opendir(name))) {
    printf("Unable to open directory '%s'.\n", name);
    return -1;
  }

  if (!(entry = readdir(directory))) {
    printf("Unable to read directory '%s'.\n", name);
    return -1;
  }

  do {
    if (commonIsDirectory(entry)) {
      char path[1024];
      int len = snprintf(path, sizeof(path)-1, "%s/%s", name, entry->d_name);

      if (commonDirectoryIsDot(entry)) continue;
      printf("%*s[%s]\n", level * 2, "", entry->d_name);
      commonRecursionListDir(path, level + 1);
    } else {
      printf("%*s- %s\n", level * 2, "", entry->d_name);
    }
  } while (entry = readdir(directory));

  closedir(directory);
}

void commonPrintRepeat(char ch, unsigned int count)
{
  for (int i=0; i<count; i++)
  {
    printf("%c", ch);
  }
  printf("\n");
}

void commonDisplayArguments(int num_arguments, char *arguments[])
{
  commonPrintRepeat('-', 80);

  printf("Arguments: %d\n", num_arguments);
  for (int i=0; i<num_arguments; i++)
  {
    printf("(%d) -> %s\n", i, arguments[i]);
  }

  commonPrintRepeat('-', 80);
}

int commonFileExists(const char *path)
{
  if (access(path, F_OK)) {
    return 0;
  } else {
    return -1;
  }
}

int commonCreateDirectory(const char *path)
{
  struct stat st = {0};

  /* check if directory exists */
  if (stat(path, &st) == -1) {
    mkdir(path, 0700);
    printf("DIRECTORY '%s' has been created.\n", path);
  } else {
    printf("DIRECTORY '%s' already exists.\n", path);
  }

  return 0;
}

int commonCopy(const char *sourceFile, const char *destinationFile)
{
  FILE *sourceFilePtr, *destinationFilePtr;

  sourceFilePtr = fopen(sourceFile, "r");

  if (sourceFilePtr == NULL) {
    printf("Unable to open source file '%s'.", sourceFile);
    return -1;
  }

  destinationFilePtr = fopen(destinationFile, "w");

  if (destinationFilePtr == NULL) {
    printf("Unable to open destination file '%s'.", destinationFile);
    return -1;
  }

  char ch;
  while ((ch = fgetc(sourceFilePtr)) != EOF)
  {
    fputc(ch, destinationFilePtr);
  }

  fclose(sourceFilePtr);
  fclose(destinationFilePtr);

  printf("COPIED: '%s' -> '%s'", sourceFile, destinationFile);

  return 0;
}

