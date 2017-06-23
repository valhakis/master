#ifndef MY_APP_H
#define MY_APP_H

typedef struct App {
  int open;
  int (*isOpen)();
  int (*quit)();
} App;

App AppCreate();

#endif
