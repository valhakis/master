#include <app/red.h>

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <stdbool.h>

int _red_main(int argc, char *argv[]) {
  if (argc < 3) {
    printf("NEED MORE ARGUMENTS\n");
    return 0;
  }

  red_chapter_initialize(argc, argv);
  red_chpater_add(1, chapter_01_main);
  red_chpater_add(2, chapter_02_main);
  red_chpater_add(3, chapter_03_main);
  red_chpater_add(4, chapter_04_main);
  red_chpater_add(5, chapter_05_main);
  red_chpater_add(6, chapter_06_main);
  red_chpater_add(7, chapter_07_main);
  red_chpater_add(8, chapter_08_main);
  red_chpater_add(9, chapter_09_main);

  int chapter = atoi(argv[2]);

  printf("NEED TO START CHAPTER: %d.\n", chapter);
  red_chapter_start(chapter);

  return 0;
}
