#include <app/is.h>
#include <string.h>

static struct {
  int argc;
  char **argv;
} is_struct;

void is_init(int argc, char *argv[]) {
  is_struct.argc = argc;
  is_struct.argv = argv;
}

void is(const char *name, int (*callback)(int, char**)) {
  if (is_struct.argc > 1) {
    const char *arg = is_struct.argv[1];
    if (strcmp(arg, name) == 0) {
      callback(is_struct.argc, is_struct.argv);
    }
  }
}

