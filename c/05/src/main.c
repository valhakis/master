#include <valhakis/default.h>
#include <stdbool.h>
#include <GL/glew.h>
#include <GL/freeglut.h>

#include <ft2build.h>
#include FT_FREETYPE_H

char* read_file(const char *file)
{
  char *source = NULL;
  FILE *fp = fopen(file, "r");

  if (fp == NULL)
  {
    ValErr("Failed to read '%s'.", file);
    return NULL;
  }

  int size = BUFSIZ;
  source = (char *)malloc(size);

  int source_size = BUFSIZ;
  int read_total = 0;

  while (!feof(fp) && !ferror(fp))
  {
    if (read_total + BUFSIZ > source_size)
    {
      if (source_size > 10*1024*1024)
      {
        break;
      }
      source_size = source_size * 2;
      source = (char*)realloc(source, source_size);
    }
    char *pointer_source = source + read_total;
    read_total += fread(pointer_source, 1, BUFSIZ, fp);
  }

  fclose(fp);
  source = (char *)realloc(source, read_total + 1);
  source[read_total] = '\0';

  return source;
}

void (*Render)();

void display()
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);

  Render();

  glutSwapBuffers();
}

int CreateShader(const char *path, GLenum type)
{
  int shader;
  char *source = read_file(path);

  if (source == NULL) 
  {
    ValErr("Failed to create shader '%s'.\n", path);
    return -1;
  }

  if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
  {
    ValErr("Only 'GL_VERTEX_SHADER' or 'GL_FRAGMENT_SHADER' are allowed.\n");
    return -1;
  }

  shader = glCreateShader(type);

#ifdef GL_ES_VERSION_2_0
  ValLog("OpenGL ES Version: 2.0 '#version 100'.\n");
#else
  ValLog("OpenGL Version: 2.1 '#version 120'.\n");
#endif

  // ValLog("SOURCE: \n%s\n", (const char **)source);
  glShaderSource(shader, 1, (const char **)&source, NULL);
  glCompileShader(shader);

  int compile_ok = false;
  char info[512];

  glGetShaderiv(shader, GL_COMPILE_STATUS, &compile_ok);
  if (!compile_ok)
  {
    glGetShaderInfoLog(shader, 512, 0, info);
    ValErr("Failed to compile shader '%s'.\n%s\n", path, info);
    glDeleteShader(shader);
    return 0;
  }

  free((void *)source);
  return shader;
}

int CreateProgram(const char *vpath, const char *fpath)
{
  int program, shader;

  program = glCreateProgram();

  shader = CreateShader(vpath, GL_VERTEX_SHADER);
  glAttachShader(program, shader);

  shader = CreateShader(fpath, GL_FRAGMENT_SHADER);
  glAttachShader(program, shader);

  glLinkProgram(program);

  int link_ok = false;
  char info[512];
  glGetProgramiv(program, GL_LINK_STATUS, &link_ok);

  if (!link_ok)
  {
    glGetProgramInfoLog(program, 512, 0, info);
    ValErr("Failed to link program.\n%s\n", info);
    glDeleteProgram(program);
    return -1;
  }

  return program;
}

int GetAttribute(int program, const char *name)
{
  int attribute = glGetAttribLocation(program, name);

  if (attribute == -1)
  {
    ValErr("Unable to get attribute '%s'.\n", name);
    return -1;
  }

  ValLog("Got attribute '%s'.\n", name);
  return attribute;
}

int GetUniform(int program, const char *name)
{
  int uniform = glGetUniformLocation(program, name);

  if (uniform == -1)
  {
    ValErr("Unable to get uniform '%s'.\n", name);
    return -1;
  }

  ValLog("Got uniform '%s'.\n", name);
  return uniform;
}

int (*SetShouldClose)();

void keyboard(unsigned char key, int x, int y)
{
  if (key == 27)
  {
    ValLog("YOU HAVE TO CLOSE.\n");
    SetShouldClose();
  } else {
    ValLog("KEY HAS BEEN PRESSED: %d.\n", key);
  }
}

int main(int argc, char *argv[]) 
{
  bool open = true;

  int setShouldClose()
  {
    open = false;
  }
  SetShouldClose = setShouldClose;

  int width = 800, height = 600;

  glutInit(&argc, argv);
  ValLog("GLUT has been initialized.\n");

  glutInitContextVersion(2, 0);
  ValLog("GLUT context version has been set to 2.0.\n");

  glutInitDisplayMode(GLUT_RGB);
  ValLog("GLUT Display mode: 'GLUT_RGB'.\n");

  glutInitWindowSize(width, height);
  ValLog("GLUT Window size width: %d, height: %d.\n", width, height);

  int Win = glutCreateWindow("Window");
  ValLog("GLUT Window has been created.\n");

  if (glewInit() != GLEW_OK)
  {
    ValErr("GLEW: Failed to initialze.\n");
    return -1;
  }
  ValLog("GLEW: Has been initialized.\n");

  if (!GLEW_VERSION_2_0)
  {
    ValErr("GLEW: No support for OpenGL 2.0.\n");
    return -1;
  }
  ValLog("GLEW: Has support for OpenGL 2.0.\n");

  /* freetype initialization */

  const char *fontfile = "data/font.ttf";
  FT_Library freetype_library;
  FT_Face fontface;
  FT_GlyphSlot glyph_slot;

  /* initialize freetype library */
  if (FT_Init_FreeType(&freetype_library)) 
  {
    ValErr("FREETYPE: Library initialization failed.\n");
    return -1;
  }
  ValLog("FREETYPE: Library has been initialized.\n");

  /* load font face */
  if (FT_New_Face(freetype_library, fontfile, 0, &fontface))
  {
    ValErr("FREETYPE: Failed to load font '%s'.\n", fontfile);
    return -1;
  }
  ValLog("FREETYPE: Fontface '%s' has been loaded.\n", fontfile);

  /* set pixel size */
  FT_Set_Pixel_Sizes(fontface, 0, 48);
  ValLog("FREETYPE: Pixel sizes has been set to 'pixel_width': 0, 'pixel_height': 48.\n");

  /* load character */
  if (FT_Load_Char(fontface, 'X', FT_LOAD_RENDER))
  {
    ValErr("FREETYPE: Failed to load character 'X'.\n");
    return -1;
  }
  ValLog("FREETYPE: Character 'X' has been loaded.\n");

  /* set glyph slot */
  glyph_slot = fontface->glyph;
  ValLog("FREETYPE: glyph_slot has been set to fontface->glyph.\n");

  /* enable blending */
  glEnable(GL_BLEND);
  ValLog("OPENGL: GL_BLEND has been enabled.\n");

  /* create program */
  int program = CreateProgram("data/default.vs", "data/default.fs");
  ValLog("SHADER: Program has been created.\n");

  /* get attribue locations */
  int attribute_coord = GetAttribute(program, "coord");

  /* get uniform locations */
  int uniform_tex = GetUniform(program, "tex");
  int uniform_color = GetUniform(program, "color");

  /* vertex buffer object creation */
  int vbo;
  glGenBuffers(1, &vbo);
  ValLog("vbo buffer has been generated.\n");

  void RenderText(const char *string)
  {
    const char *ch;
    FT_GlyphSlot glyph = fontface->glyph;

    /* create texture that holds one 'glyph' */
    GLuint tex;
    glActiveTexture(GL_TEXTURE0);
    glGenTextures(1, &tex);
    glBindTexture(GL_TEXTURE_2D, tex);
    glUniform1i(uniform_tex, 0);

    /* we require 1 byte alignment when uploading texture data */
    glPixelStorei(GL_UNPACK_ALIGNMENT, 1);

    /* important to prevent artifacts when scaling */
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);

    /* best for text */
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
    glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

    /* set vbo for vertex data */
    glEnableVertexAttribArray(attribute_coord);
    glBindBuffer(GL_ARRAY_BUFFER, vbo);
    glVertexAttribPointer(attribute_coord, 4, GL_FLOAT, GL_FALSE, 0, 0);

    /* loop trought all characters */
    for (ch = string; *ch; ch++)
    {
      /* try to load and render the character */
      if (FT_Load_Char(fontface, *ch, FT_LOAD_RENDER))
      {
        continue;
      }

      /* update the 'bitmap', which contains 8-bit grayscale image as alpha texture */
      glTexImage2D(GL_TEXTURE_2D, 0, GL_ALPHA, glyph->bitmap.width, glyph->bitmap.rows, 0, GL_ALPHA, GL_UNSIGNED_BYTE, glyph->bitmap.buffer);

      /* calculate the vertex and texture coordinates */
    }
  }

  void render()
  {
    float sx = 2.0 / glutGet(GLUT_WINDOW_WIDTH);
    float sy = 2.0 / glutGet(GLUT_WINDOW_HEIGHT);

    printf("SCREEN X: %f, SCREEN Y: %f\n", sx, sy);

    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

    FT_Set_Pixel_Sizes(fontface, 0, 48);

    float black[4] = {0.0f, 0.0f, 0.0f, 1.0f};
    glUniform4fv(uniform_color, 1, black);

    RenderText("The Quick Thomas jumped over William and laughed.\n");
  }

  Render = render;

  /* end of freetype initialization */
  glutDisplayFunc(display);

  glutKeyboardFunc(keyboard);
  while (open) {
    glutMainLoopEvent();
  }

  return 0;
}

