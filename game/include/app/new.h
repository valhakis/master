#ifndef MY_NEW_H
#define MY_NEW_H

// #include <glad/glad.h>
#include <GLFW/glfw3.h>
#include <linmath.h>

typedef struct MiscMonster MiscMonster;
struct MiscMonster {
  float speed;
  vec3 pos;
  mat4x4 model;
  int program;
  int modelLoc;
  unsigned int vbo, vao;
};

struct NewWindow {
  GLFWwindow* _window;
};
typedef struct NewWindow NewWindow;

NewWindow NewWindowCreate();
NewWindow NewWindowCreateWSize(int width, int height);

int NewWindowOpen(NewWindow *window);
int NewWindowTerminate(NewWindow *window);
int NewWindowEvents(NewWindow *window);
int NewWindowSwap(NewWindow *window);
int NewProgramCreate(const char *name);

int _new_main(int argc, char *argv[]);
int _New_01(int argc, char *argv[]);
int _New_02(int argc, char *argv[]);
int _New_03(int argc, char *argv[]);
int _New_04(int argc, char *argv[]);
int _New_05(int argc, char *argv[]);
int _New_06(int argc, char *argv[]);
int _New_07(int argc, char *argv[]);
int _New_08(int argc, char *argv[]);

void MiscInitExample01(int _program);
void MiscUpdateExample01();

void MiscInitExample02(int _program);
void MiscUpdateExample02();

void MiscInitExample03(int _program);
void MiscUpdateExample03();

void MiscInitExample04(int _program);
void MiscUpdateExample04();

void MiscCenterDotInitialize(int _program);
void MiscCenterDotUpdate();

void NewMiscLoadTexture(unsigned int *texture, const char *fileName);
float NewMiscRadians(float deg);
MiscMonster MiscMonsterInitialize(int program);
void MiscUpdateMonster(MiscMonster *monster);

#endif
