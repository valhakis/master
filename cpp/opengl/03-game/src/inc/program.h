#pragma once

void ProgramCreate(const char *name, const char *vpath, const char *fpath);
int ProgramFind(const char *name);
void ProgramInitialize();
unsigned int ProgramFindVao(const char *name);

