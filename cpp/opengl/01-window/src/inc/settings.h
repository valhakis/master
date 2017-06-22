#pragma once

#include <stdbool.h>

struct Settings {
  bool triangle;
  bool rectangle;
  bool window1Exercises[10];
};

int SettingsInitialize();
int SettingsWindowStart();
struct Settings *SettingsGet();
