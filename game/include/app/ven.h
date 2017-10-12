#ifndef MY_VEN_H
#define MY_VEN_H
int _ven_chapter_01_main(int argc, char *argv[]);
int _ven_chapter_02_main(int argc, char *argv[]);
int _ven_chapter_03_main(int argc, char *argv[]);
int _ven_chapter_04_main(int argc, char *argv[]);
int VenTextInitialize(const char *font, float fontSize);
int VenTextDestroy();
void VenTextRender(const char *text, float x, float y);
void VenTextRenderColor3f(const char *text, float posX, float posY, float r, float g, float b);
int VenTextInitializeWShader(const char *font, float fontSize, const char *shaderName);
#endif
