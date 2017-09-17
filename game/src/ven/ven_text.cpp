#include <ft2build.h>
#include FT_FREETYPE_H  

#include <glad/glad.h>
#include <linmath.h>

#include <app/CG.h>

/* VenTextInitialize("code.ttf", fontSize);
 *
 * while (true) {
 *  VenTextRender("TEXT", x, y);
 * }
 *
 * VenTextDestroy();
 */

typedef struct Character Character;
struct Character {
  unsigned int tex;
  unsigned int size[2];
  unsigned int bearing[2];
  unsigned int advance;
};
Character chars[128];

static FT_Library ft;
static FT_Face face;

static int program;
static unsigned int vbo, vao;

int VenTextInitialize(const char *font, float fontSize) {
  if (FT_Init_FreeType(&ft)) {
    printf("COULD NOT INITIALIZE FREETYPE\n");
  }

  // result: /home/viktor/master/game/data/fonts/code.ttf
  char result[256] = {'\0'};
  sprintf(result, "fonts/%s", font);

  char *fontFile = CGGetDataLoc(result);;
  if (FT_New_Face(ft, fontFile, 0, &face)) {
    printf("COULD NOT LOAD FONT '%s'\n", fontFile);
  }
  free(fontFile);

  program = CGLoadShader("text");

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);
  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(float)*6*4, NULL, GL_DYNAMIC_DRAW);
  glEnableVertexAttribArray(0);
  glVertexAttribPointer(0, 4, GL_FLOAT, GL_FALSE, 4*sizeof(float), 0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  FT_Set_Pixel_Sizes(face, 0, fontSize);
  glPixelStorei(GL_UNPACK_ALIGNMENT, 1);

  for (unsigned int c=0; c<128; c++) {
    if (FT_Load_Char(face, c, FT_LOAD_RENDER)) {
      printf("FAILED TO LOAD CHARACTER '%c'\n", c);
      continue;
    }
    Character *ch = &chars[c];
    glGenTextures(1, &ch->tex);
    
    FT_GlyphSlot glyph = face->glyph;
    FT_Bitmap bitmap = face->glyph->bitmap;

    glBindTexture(GL_TEXTURE_2D, ch->tex);
    float width = bitmap.width;
    float height = bitmap.rows;
    unsigned char *buffer = bitmap.buffer;
    glTexImage2D(GL_TEXTURE_2D, 0, GL_RED, width, height, 0, GL_RED, GL_UNSIGNED_BYTE, buffer);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

    ch->size[0] = bitmap.width;
    ch->size[1] = bitmap.rows;

    ch->bearing[0] = glyph->bitmap_left;
    ch->bearing[1] = glyph->bitmap_top;

    ch->advance = glyph->advance.x;
  }
  glBindTexture(GL_TEXTURE_2D, 0);

  return 0;
}

int VenTextDestroy() {
  glDeleteVertexArrays(1, &vao);
  glDeleteBuffers(1, &vbo);
  glDeleteProgram(program);
  FT_Done_Face(face);
  FT_Done_FreeType(ft);
  return 0;
}

void VenTextRender(const char *text, float posX, float posY) {
  glUseProgram(program);
  glBindVertexArray(vao);

  mat4x4 p;

  int width, height;
  CGGetWindowDimensions(&width, &height);

  mat4x4_ortho(p, 0.0f, (float)width, 0.0f, (float)height, -1.0f, 1.0f);

  CGUniform3f(program, "textColor", 1.0f, 0.3f, 0.3f);
  CGMatrix4fv(program, "projection", (float*)p);

  for (unsigned char *c=(unsigned char*)text; *c; c++) {
    Character *ch = &chars[*c];
    float x = posX + ch->bearing[0];
    float y = posY - (ch->size[1] - ch->bearing[1]);

    float w = ch->size[0];
    float h = ch->size[1];

    float vertices[6][4] = {
      x, y+h,   0.0f, 0.0f,
      x, y,     0.0f, 1.0f,
      x+w, y,   1.0f, 1.0f,

      x, y+h,   0.0f, 0.0f,
      x+w, y,   1.0f, 1.0f,
      x+w, y+h, 1.0f, 0.0f,
    };
    glBindTexture(GL_TEXTURE_2D, ch->tex);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(vertices), vertices);
    glBindBuffer(GL_ARRAY_BUFFER, 0);

    glEnable(GL_CULL_FACE);
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

    glDrawArrays(GL_TRIANGLES, 0, 6);

    glDisable(GL_CULL_FACE);
    glDisable(GL_BLEND);

    posX += (ch->advance >> 6);
  }
  glBindTexture(GL_TEXTURE_2D, 0);
  glBindVertexArray(0);
  glUseProgram(0);
}
