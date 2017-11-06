#include <stdio.h>
#include <stdlib.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "common.h"

char *common_load_source(const char *path) {
  char *source = NULL;
  FILE *fp = NULL;
  long bufsize;
  size_t newLen;

  char file[512];
  sprintf(file, "%s/%s", common_root_get(), path);
  fp = fopen(file, "r");

  if (fp == NULL) {
    fprintf(stderr, "Failed to open '%s'.\n", path);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  bufsize = ftell(fp);
  if (bufsize == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  source = (char*)malloc(sizeof(char) * (bufsize+1));

  if (fseek(fp, 0L, SEEK_SET) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  newLen = fread(source, sizeof(char), bufsize, fp);

  if (ferror(fp) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  source[newLen++] = '\0';

  fclose(fp);

  return source;
}

char *common_root_get() {
  static char root[512] = {'\0'};
  if (root[0] == '\0') {
    sprintf(root, "%s/master/opengl/program-05/data", getenv((char*)"HOME"));
  }
  return root;
}

void common_check_compilation(int elemId, bool isProgram, GLenum type) {
  int success = GL_FALSE;
  char info[512];

  if (isProgram) {
    glGetProgramiv(elemId, type, &success);
    if (success == GL_FALSE) {
      glGetProgramInfoLog(elemId, 512, NULL, info);
      fprintf(stderr, "%s", info);
    }
  } else {
    glGetShaderiv(elemId, type, &success);
    if (success == GL_FALSE) {
      glGetShaderInfoLog(elemId, 512, NULL, info);
      fprintf(stderr, "%s", info);
    }
  }
}

