#pragma once

enum program_type {
  PROGRAM_DEFAULT = 0,
  PROGRAM_1 = 1,
  PROGRAM_2 = 2,
  PROGRAM_3 = 3,
  PROGRAM_4 = 4,
};

int ProgramInitialize();

int ProgramGet(program_type type);
