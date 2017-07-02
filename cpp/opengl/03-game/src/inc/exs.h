#pragma once

void ExsInitialize();
void ExsEvents();
void ExsRegister(const char *name, void (*initialize)(), void (*events)());
void ExRegisterRender(void (*render)());
void ExTriangleInitialize();
void ExRectangleInitialize();
void ExOrthoInitialize();
void ExVectorsInitialize();
void ExCursorInitialize();
