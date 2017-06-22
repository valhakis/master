#pragma once

#define MAX_PROGRAMS 10

#include "settings.h"

int Window1Initialize();
int Window1Events();
int Window1Process(const char *text);
int Window1GetMonitorDimensions(int *width, int *height);
int Window1Register(int (*init)(), int (*render)());

void Window1Exercise01(int *in_program);
void Window1Exercise02();
