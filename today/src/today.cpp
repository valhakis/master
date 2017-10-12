#include <stdio.h>
#include <stdbool.h>
#include <time.h>
#include <string.h>
#include <app/env.h>
#include <dirent.h>
#include <errno.h>
#include <sys/types.h>
#include <sys/stat.h>
#include <unistd.h>

static struct {
  char date[256];
  char dirName[256];
} today; 

void today_print_dir() {
  printf("DIR: '%s'.\n", today.dirName);
}

void today_print_raw_dir() {
  printf("%s\n", today.dirName);
}

const char *TodayGetDir() {
  return today.dirName;
}

static bool directory_exists(const char *dirPath) {

  DIR* dir = opendir(dirPath);

  if (dir) {
    closedir(dir);

    return true;
  } else if (ENOENT == errno) {
    return false;
  } else {
    printf("OPEN DIR FAILED FOR SOME REASON\n");
    return false;
  }

  return false;
}

static bool create_directory(const char *dirPath) {
  struct stat st = {0};
  if (stat(dirPath, &st) == -1) {
    mkdir(dirPath, 0700);
  }
}

static void do_example() {
  time_t timenow;
  char buffer[26];
  struct tm* TM = {0};

  time(&timenow);
  TM = localtime(&timenow);

  strftime(buffer, 26, "%Y-%m-%d %H:%M:%S", TM);
  printf("TODAY IS: '%s'.\n", buffer);
}

int make_today(const char *pattern) {
  time_t timenow;
  char buffer[26];
  struct tm* TM = {0};

  time(&timenow);
  TM = localtime(&timenow);

  strftime(buffer, 26, pattern, TM);

  char dirName[256] = {'\0'};
  sprintf(dirName, "%s/%s", EnvGetStoreDir(), buffer);
  strcpy(today.date, buffer);

  if (!directory_exists(dirName)) {
    create_directory(dirName);
  }

  strcpy(today.dirName, dirName);
}

int today_init(int argc, char *argv[]) {

  const char *storeDir = EnvGetStoreDir();

  // CREATE STORE DIRECTORY
  if (!directory_exists(storeDir)) {
    create_directory(storeDir);
  }

  // MAKE TODAY [store]/%Y-%m-%d
  make_today("%Y-%m-%d");

  // printf("TODAY IS ''.\n");
  return 0;
}

const char *GetDate() {
  return today.date;
}

void TodayListAll() {

}
