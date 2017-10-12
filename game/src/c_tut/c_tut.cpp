#include <app/c_tut.h>
#include <stdio.h>
#include <stdarg.h>
#include <stdbool.h>

bool contains(...) {
  // va_start();
  // va_end();
  return true;
}

int _c_tut_main(int argc, char *argv[]) {
  if (argc > 2) {
    if (contains("1", "01")) {
      _c_tut_01_main(argc, argv);
    } else if (contains("2", "02")) {
      _c_tut_02_main(argc, argv);
    } else if (contains("3", "03")) {
      _c_tut_02_main(argc, argv);
    }
  } else {
    printf("CHOOSE A TUT YO.\n");
  }

  return 0;
}
