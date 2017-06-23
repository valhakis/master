<<<<<<< HEAD
#pragma once
#include <glad/glad.h>

enum program_type {
  PROGRAM_DEFAULT = 0,
  PROGRAM_1 = 1,
  PROGRAM_2 = 2,
  PROGRAM_3 = 3,
  PROGRAM_4 = 4,
  PROGRAM_5 = 5,
};

int ProgramInitialize();

int ProgramGet(program_type type);
=======
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
>>>>>>> 0b8937f71d8fb659b6f2dce2f77abd8176dfb9d9
