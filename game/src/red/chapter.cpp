#include <app/red.h>

#include <stdio.h>

static const int MAX_CHAPTERS = 10;
static unsigned int CHAPTER_COUNTER = 0;

struct Chapter {
  unsigned int id;
  int (*callback)(int argc, char *argv[]);
};

struct Chapter chapters[MAX_CHAPTERS];

static struct {
  int argc;
  char **argv;
} loc;

int red_chapter_initialize(int argc, char *argv[]) {

  loc.argc = argc;
  loc.argv = argv;

  return 0;
}

int red_chpater_add(unsigned int id, int (*callback)(int argc, char *argv[])) {
  if (CHAPTER_COUNTER >= MAX_CHAPTERS) {
    printf("MAX CHAPTERS REACHED, UNABLE TO ADD NEW ONE\n");
    return -1;
  }

  struct Chapter *chapter = &chapters[CHAPTER_COUNTER];
  chapter->id = id;
  chapter->callback = callback;

  CHAPTER_COUNTER += 1;

  return 0;
}

int red_chapter_start(unsigned int id) {
  for (int i=0; i<CHAPTER_COUNTER; i+=1) {
    struct Chapter *chapter = &chapters[i];
    if (chapter->id == id) {

      if (!chapter->callback) {
        printf("CHAPTER DOES NOT HAVE 'callback'\n");
        return -1;
      }

      chapter->callback(loc.argc, loc.argv);
      return 0;
    }
  }

  return 0;
}
