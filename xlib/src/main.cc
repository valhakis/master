// Make a window appear on the screen.

#include <string.h>
#include <stdio.h>
#include <stdarg.h>
#include <stdbool.h>
#include <unistd.h>
#include "default.h"
#include <X11/Xlib.h>

static int _list_arguments(int argc, char *argv[]);
static bool contains(const char *arg, int num, ...);

int main(int argc, char *argv[])
{
  if (argc > 1) {
    if (contains(argv[1], 3, "1", "01", "basic")) {
      _01_basic_window(argc, argv);
    } else if (contains(argv[1], 3, "2", "02", "mouse")) {
      _02_mouse_position(argc, argv);
    } else if (contains(argv[1], 3, "3", "03", "text")) {
      _03_text_render(argc, argv);
    } else if (contains(argv[1], 1, "example")) {
      if (argc > 2) {
        if (contains(argv[2], 1, "1")) {
          _01_example_main(argc, argv);
        } else if (contains(argv[2], 1, "2")) {
          _02_example_main(argc, argv);
        }
      } else {
        printf("EXAMPLE REQUIRED SECONDARY ARGUMENT\n");
      }
    } else if (contains(argv[1], 1, "tutorial")) {
      if (argc > 2) {
        if (contains(argv[2], 1, "1")) {
          _01_tutorial_main(argc, argv);
        } else if (contains(argv[2], 1, "2")) {
          _02_tutorial_main(argc, argv);
        } else if (contains(argv[2], 1, "3")) {
          _03_tutorial_main(argc, argv);
        } else if (contains(argv[2], 1, "4")) {
          _04_tutorial_main(argc, argv);
        } else if (contains(argv[2], 1, "5")) {
          _05_tutorial_main(argc, argv);
        } else if (contains(argv[2], 1, "6")) {
          _06_tutorial_main(argc, argv);
        } else if (contains(argv[2], 1, "7")) {
          _07_tutorial_main(argc, argv);
        } else {
          printf("TUTORIAL NOT FOUND\n");
        }
      } else {
        printf("TUTORIAL REQUIRED SECONDARY ARGUMENT\n");
      }
    } else if (contains(argv[1], 2, "tmp", "temp")) {
      _temp_main(argc, argv);
    } else {
      printf("ARGUMENT NOT RECOGNIZED\n");
    }
  } else {
    _master_execute(argc, argv);
  }
  // _list_arguments(argc, argv);
  return 0;
}

static int _list_arguments(int argc, char *argv[])
{
  for (int i=0; i<argc; i+=1) {
    printf("[%d] (%d) -> '%s'.\n", argc, i, argv[i]);
  }
}

static bool contains(const char *arg, int num, ...) {
  va_list list; // type for iterating arguments

  va_start(list, num); // start iterating arguments with a va_list
  for (int i=0; i<num; i++) {
    const char *str = va_arg(list, const char*); // retrieve an argument
    if (strcmp(arg, str) == 0) {
      return true;
    } 
  }
  va_end(list); // free a va_list

  // va_copy: copy contents of one va_list to another
  return false;
}

