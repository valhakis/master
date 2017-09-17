#ifndef MY_VEN_H
#define MY_VEN_H
int _ven_chapter_01_main(int argc, char *argv[]);
int _ven_chapter_02_main(int argc, char *argv[]);
int _ven_chapter_03_main(int argc, char *argv[]);
int VenTextInitialize(const char *font, float fontSize);
int VenTextDestroy();
void VenTextRender(const char *text, float x, float y);
#endif
