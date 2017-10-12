#include <app/env.h>

#include <stdlib.h>
#include <stdio.h>
#include <time.h>
#include <string.h>

#include <app/is.h>
#include <app/today.h>
#include <app/task.h>
#include <app/cmd.h>

// cd "`today -d`"

// if is not today, do today
// mark as done

void do_year() {
  time_t now;

  if (time(&now) != (time_t)(-1)) {
    struct tm *mytime = localtime(&now);
    char year[5];
    if (strftime(year, sizeof year, "%Y", mytime)) {
      printf("TODAY IS YEAR: '%s'.\n", year);
    }
  }
}

void example() {
  time_t current_time;
  time_t timenow;
  char *c_time_string;

  current_time = time(&timenow);

  if (current_time == ((time_t)-1)) {
    printf("FAILED TO OBTAIN THE CURRENT TIME\n");
    return;
  }

  c_time_string = ctime(&current_time);

  if (c_time_string == NULL) {
    printf("FAILED TO CONVERT THE CURRENT TIME\n");
    return;
  }

  // REMOVE END LINE CHARACTER FROM STRING
  if (c_time_string[strlen(c_time_string)-1] == '\n') {
    c_time_string[strlen(c_time_string)-1] = '\0';
  }

  printf("CURRENT TIME IS '%s'.\n", c_time_string);
}

void do_month() {
}

void do_date() {
  struct tm *current;
  time_t timenow;

  time(&timenow);
  current = localtime(&timenow);

  int month = current->tm_mon+1;
  int day = current->tm_mday;
  int year = current->tm_year+1900;

  printf("%d-%d-%d\n", day, month, year);
}

void do_okei() {
  time_t timenow;
  char buffer[26];
  struct tm* TM = {0};

  time(&timenow);
  TM = localtime(&timenow);

  strftime(buffer, 26, "%Y-%m-%d %H:%M:%S", TM);
  printf("BUFFER: '%s'.\n", buffer);
}

int main(int argc, char *argv[]) {

  // printf("MASTER DIR: '%s'.\n", EnvGetMasterDir());
  // printf("TODAY DIR: '%s'.\n", EnvGetTodayDir());
  // printf("DATA DIR: '%s'.\n", EnvGetDataDir());
  // printf("STORE DIR: '%s'.\n", EnvGetStoreDir());

  env_init(argc, argv);
  is_init(argc, argv);
  today_init(argc, argv);
  task_init(argc, argv);

  // is("year", do_year);
  // is("example", example);
  // is("month", do_month);
  // is("date", do_date);
  // is("okei", do_okei);
  // is("dir", today_print_dir);
  // is("-d", today_print_raw_dir);

  is("cmd", cmd_main);

  return 0;
}
