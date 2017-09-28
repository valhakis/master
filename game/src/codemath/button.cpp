#include <ft2build.h>
#include FT_FREETYPE_H

#include "codemath.h"

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include "linmath.h"
#include "app/CG.h"

#include <string.h>
#include <stdio.h>

static const int fontSize = 38;
static FT_Library ft;
static FT_Face face;
static const unsigned int MAX_BUTTONS = 10;
static unsigned int CURRENT_BUTTON = 0;
static int program;
static unsigned int vao, vbo, ebo;

static unsigned int indices[] = {
  0, 1, 2,
  0, 3, 2,
};

struct Button {
  int x;
  int y;
  int w;
  int h;
  char label[256];
  void (*cb)();
};

struct Char {
  unsigned int tex;
  unsigned int size[2];
  unsigned int bearing[2];
  unsigned int advance;
};

static const unsigned int MAX_CHARS = 128;
static struct Char chars[MAX_CHARS];

static Button buttons[MAX_BUTTONS];

void CMButtonInitialize(int in_program) {
  program = in_program;

  /* 1. freetype initialization */
  if (FT_Init_FreeType(&ft)) {
    printf("FAILED TO INITIIALIZE FREETYPE\n");
    exit(EXIT_FAILURE);
  }
  const char *home = getenv("HOME");
  char fontFile[256];
  sprintf(fontFile, "%s/master/game/data/fonts/code.ttf", home);

  if (FT_New_Face(ft, fontFile, 0, &face)) {
    printf("FAILED TO LOAD FONT\n");
    exit(EXIT_FAILURE);
  }
  FT_Set_Pixel_Sizes(face, 0, fontSize); 

  /* 2. character loading */
  glPixelStorei(GL_UNPACK_ALIGNMENT, 1);
  for (unsigned int i=0; i<MAX_CHARS; i++) {
    if (FT_Load_Char(face, i, FT_LOAD_RENDER)) {
      printf("FAILED TO LOAD CHARACTER\n");
      continue;
    }
    glGenTextures(1, &chars[i].tex);
    glBindTexture(GL_TEXTURE_2D, chars[i].tex);
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RED, face->glyph->bitmap.width, face->glyph->bitmap.rows, 0, GL_RED, GL_UNSIGNED_BYTE, face->glyph->bitmap.buffer);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

    chars[i].size[0] = face->glyph->bitmap.width;
    chars[i].size[1] = face->glyph->bitmap.rows;

    chars[i].bearing[0] = face->glyph->bitmap_left;
    chars[i].bearing[1] = face->glyph->bitmap_top;

    chars[i].advance = face->glyph->advance.x;
  }

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);
  glGenBuffers(1, &ebo);

  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(int)*4*4, NULL, GL_DYNAMIC_DRAW);

  glBindBuffer(GL_ELEMENT_ARRAY_BUFFER, ebo);
  glBufferData(GL_ELEMENT_ARRAY_BUFFER, sizeof(indices), indices, GL_STATIC_DRAW);

  glEnableVertexAttribArray(0);
  glVertexAttribPointer(0, 2, GL_INT, GL_FALSE, 4 * sizeof(int), (void*)0);

  glEnableVertexAttribArray(1);
  glVertexAttribPointer(1, 2, GL_INT, GL_FALSE, 4 * sizeof(int), (void*)(2*sizeof(int)));

  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);
}

void CMButtonUpdate() {
  glUseProgram(program);
  glBindVertexArray(vao);

  mat4x4 p;
  mat4x4_ortho(p, 0.0f, 500.0f, 0.0f, 500.0f, -1.0f, +1.0f);
  CGMatrix4fv(program, "projection", (float*)p);

  for (int i=0; i<CURRENT_BUTTON; i++) {
    Button *btn = &buttons[i];
    int vertices[4][4] = {
      btn->x, btn->y,                 0, 1,
      btn->x+btn->w, btn->y,          1, 1,
      btn->x+btn->w, btn->y+btn->h,   1, 0,
      btn->x, btn->y+btn->h,          0, 0,
    };
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(vertices), vertices);
    glBindBuffer(GL_ARRAY_BUFFER, 0);
    CGUniform3f(program, "color", 1.0f, 1.0f, 1.0f);
    glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)0);

    glEnable(GL_CULL_FACE);
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

    int posX = btn->x;
    int posY = btn->y;
    for (int j=0; j<strlen(btn->label); j++) {
      Char *ch = &chars[btn->label[j]];
      int x = posX + ch->bearing[0];
      int y = posY - (ch->size[1] - ch->bearing[1]);
      int w = ch->size[0];
      int h = ch->size[1];
      int vertices[4][4] = {
        x, y,     0, 1,
        x+w, y,   1, 1,
        x+w, y+h, 1, 0,
        x, y+h,   0, 0,
      };
      glBindTexture(GL_TEXTURE_2D, ch->tex);
      glBindBuffer(GL_ARRAY_BUFFER, vbo);
      glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(vertices), vertices);
      glBindBuffer(GL_ARRAY_BUFFER, 0);
      CGUniform3f(program, "color", 1.0f, 0.0f, 0.0f);
      glDrawElements(GL_TRIANGLES, 6, GL_UNSIGNED_INT, (void*)0);

      posX += ch->advance >> 6;
    }
    glBindTexture(GL_TEXTURE_2D, 0);

    glDisable(GL_CULL_FACE);
    glDisable(GL_BLEND);
  }

  glBindVertexArray(0);
  glUseProgram(0);
}

void CMButtonMake(int x, int y, int w, int h, const char *label, void (*cb)()) {
  Button *btn = &buttons[CURRENT_BUTTON];

  btn->x = x;
  btn->y = y;
  btn->w = w;
  btn->h = h;

  strcpy(btn->label, label);

  CURRENT_BUTTON += 1;
}
