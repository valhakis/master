#ifndef MY_MASTER_H
#define MY_MASTER_H

typedef struct Master {
  char name[100];
} Master;

Master LoadMaster(const char *file);

#endif
