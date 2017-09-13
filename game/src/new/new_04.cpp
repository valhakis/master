#include <glad/glad.h>
#include <app/new.h>

#include <ft2build.h>
#include FT_FREETYPE_H

static FT_GlyphSlot g;
static int program;
static NewWindow window;
static FT_Library ft;
static FT_Face face;
static unsigned int vbo;

static void LoadVertices(float *vertices, const char *name, const char *fileName) {
  char filePath[256] = {'\0'};
  const char *dataDir = "/home/viktor/master/game/data";
  sprintf(filePath, "%s/%s", dataDir, fileName);
  FILE* file = fopen(filePath, "r");
  char line[256];

  int numVertices = 0;
  int lineIndex = 0;
  char action[256] = {"none"};
  char currentName[256] = {"none"};

  if (!file) {
    printf("FAILED TO OPEN '%s'.\n", filePath);
    return;
  }

  while (fgets(line, sizeof(line), file)) {
    if (strncmp(line, "start", 5) == 0) {
      strcpy(action, "start");
      // strcpy(currentName, line+6);
    }
    if (strncmp(line, "end", 3) == 0) {
      strcpy(action, "end");
    }

    printf("LINE [%d -> (%s|%s)]: %s", lineIndex, action, currentName, line);
    lineIndex += 1;
  }

  printf("NUM VERTICES: %d.\n", numVertices);

  fclose(file);
}

static void renderText(const char *text, float x, float y, float sx, float sy) {
  const char *p;
  for (p=text; *p; p++) {
    if (FT_Load_Char(face, *p, FT_LOAD_RENDER)) {
      continue;
    }
    glTexImage2D(
        GL_TEXTURE_2D, 
        0, 
        GL_RED, 
        g->bitmap.width, 
        g->bitmap.rows,
        0,
        GL_RED,
        GL_UNSIGNED_BYTE,
        g->bitmap.buffer
        );

    float x2 = x + g->bitmap_left * sx;
    float y2 = -y - g->bitmap_top * sy;
    float w = g->bitmap.width * sx;
    float h = g->bitmap.rows * sy;

    GLfloat box[4][4] = {
      {x2,     -y2    , 0, 0},
      {x2 + w, -y2    , 1, 0},
      {x2,     -y2 - h, 0, 1},
      {x2 + w, -y2 - h, 1, 1},
    };

    glBufferData(GL_ARRAY_BUFFER, sizeof box, box, GL_DYNAMIC_DRAW);
    glDrawArrays(GL_TRIANGLE_STRIP, 0, 4);

    x += (g->advance.x/64) * sx;
    y += (g->advance.y/64) * sy;
  }
}

int _New_04(int argc, char *argv[]) {

  if (FT_Init_FreeType(&ft)) {
    printf("COULD NOT INITIALIZE FREETYPE\n");
  }

  if (FT_New_Face(ft, "/home/viktor/master/game/data/courier.ttf", 0, &face)) {
    printf("COULD NOT LOAD FONT\n");
  }

  FT_Set_Pixel_Sizes(face, 0, 48);

  if (FT_Load_Char(face, 'X', FT_LOAD_RENDER)) {
    printf("COULD NOT LOAD CHARACTER\n");
  }

  g = face->glyph;

  window = NewWindowCreate();
  program = NewProgramCreate("text");

  glUseProgram(program);

  glEnable(GL_BLEND);
  glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

  GLuint tex;
  glActiveTexture(GL_TEXTURE0);
  glGenTextures(1, &tex);
  glBindTexture(GL_TEXTURE_2D, tex);
  glUniform1i(glGetUniformLocation(program, "tex"), 0);

  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);

  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
  glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

  glPixelStorei(GL_UNPACK_ALIGNMENT, 1);

  glGenBuffers(1, &vbo);

  glEnableVertexAttribArray(glGetAttribLocation(program, "coord"));
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glVertexAttribPointer(glGetAttribLocation(program, "coord"), 4, GL_FLOAT, GL_FALSE, 0, 0);

  struct {
    unsigned int vao;
    unsigned int vbo;
    float *vertices;
  } mesh;

  glGenVertexArrays(1, &mesh.vao);
  glGenBuffers(1, &mesh.vbo);

  LoadVertices(mesh.vertices, "TRIANGLE", "vertices.data");

  while (NewWindowOpen(&window)) {
    glClear(GL_COLOR_BUFFER_BIT);

    glUniform3f(glGetUniformLocation(program, "color"), 1.0f, 1.0f, 1.0f);

    float sx = 2.0 / 800.0f;
    float sy = 2.0 / 600.0f;

    renderText("ONE WORD", -1+8*sx, 1-50*sy, sx, sy);

    NewWindowEvents(&window);
    NewWindowSwap(&window);
  }

  NewWindowTerminate(&window);

  return 0;
}
