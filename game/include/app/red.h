#ifndef MY_RED_H
#define MY_RED_H
int _red_main(int argc, char *argv[]);
int red_chapter_initialize(int argc, char *argv[]);
int red_chpater_add(unsigned int id, int (*callback)(int argc, char *argv[]));
int red_chapter_start(unsigned int id);

int chapter_01_main(int argc, char *argv[]);
int chapter_02_main(int argc, char *argv[]);
int chapter_03_main(int argc, char *argv[]);
int chapter_04_main(int argc, char *argv[]);
int chapter_05_main(int argc, char *argv[]);
int chapter_06_main(int argc, char *argv[]);
int chapter_07_main(int argc, char *argv[]);
int chapter_08_main(int argc, char *argv[]);
int chapter_09_main(int argc, char *argv[]);
#endif
