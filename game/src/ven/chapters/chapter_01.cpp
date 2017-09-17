#include <ft2build.h>
#include FT_FREETYPE_H  

#include <linmath.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#include <string.h>
#include <ctype.h>

#include <app/CG.h>

#include <stdio.h>

static float WIDTH = 800.0F, HEIGHT = 600.0f;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
  }
}

static struct{
  int textColor;
  int projection;
} uni;

static unsigned int vao, vbo;

int _ven_chapter_01_main(int argc, char *argv[]) {
  FT_Library ft;
  FT_Face face;

  if (FT_Init_FreeType(&ft)) {
    printf("COULD NOT INITIALIZE FREETYPE\n");
  }

  char *fontFile = CGGetDataLoc("fonts/code.ttf");;
  if (FT_New_Face(ft, fontFile, 0, &face)) {
    printf("COULD NOT LOAD FONT '%s'\n", fontFile);
  }
  free(fontFile);

  GLFWwindow* window;

  /* Initialize the library */
  if (!glfwInit())
    return -1;

  glfwWindowHint(GLFW_RESIZABLE, GLFW_FALSE);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
  glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
  glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

  /* Create a windowed mode window and its OpenGL context */
  window = glfwCreateWindow((int)WIDTH, (int)HEIGHT, "CHAPTER 01", NULL, NULL);
  if (!window)
  {
    glfwTerminate();
    return -1;
  }

  glfwSetKeyCallback(window, keyboard);
  /* Make the window's context current */
  glfwMakeContextCurrent(window);

  gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);

  glEnable(GL_CULL_FACE);
  glEnable(GL_BLEND);
  glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);

  int program = CGLoadShader("text");
  glUseProgram(program);
  uni.textColor = glGetUniformLocation(program, "textColor");
  uni.projection = glGetUniformLocation(program, "projection");

  glPixelStorei(GL_UNPACK_ALIGNMENT, 1);

  glGenVertexArrays(1, &vao);
  glGenBuffers(1, &vbo);
  glBindVertexArray(vao);
  glBindBuffer(GL_ARRAY_BUFFER, vbo);
  glBufferData(GL_ARRAY_BUFFER, sizeof(float)*6*4, NULL, GL_DYNAMIC_DRAW);
  glEnableVertexAttribArray(0);
  glVertexAttribPointer(0, 4, GL_FLOAT, GL_FALSE, 4*sizeof(float), 0);
  glBindBuffer(GL_ARRAY_BUFFER, 0);
  glBindVertexArray(0);

  char *text = CGLoadSource("/home/viktor/master/game/data/text.txt");
  CGToUpper(text);

  glClear(GL_COLOR_BUFFER_BIT);
  glfwSwapBuffers(window);

  /* Loop until the user closes the window */
  while (!glfwWindowShouldClose(window))
  {
    mat4x4 p;
    mat4x4_identity(p);
    mat4x4_ortho(p, 0.0f, WIDTH, 0.0f, HEIGHT, -1.0f, 1.0f);

    float fontSize = 16;

    FT_Set_Pixel_Sizes(face, 0, fontSize);

    /* Render here */
    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT);

    glUseProgram(program);
    glBindVertexArray(vao);

    glUniform3f(uni.textColor, 1.0f, 0.3f, 0.3f);
    glUniformMatrix4fv(uni.projection, 1, GL_FALSE, (const float*)p);

    glActiveTexture(GL_TEXTURE0);

    // const char *text = "RENDER RENDER";

    float positionX = fontSize/2;
    float positionY = HEIGHT - fontSize;

    for (int i=0; i<strlen(text); i++) {
      if (text[i] == '\n') {
        positionX = fontSize/2;
        positionY -= fontSize;
        continue;
      }
      if (text[i] == '.' || text[i] == '?' || text[i] == '!' || text[i] == ',') {
        continue;
      }
      if (positionX > WIDTH - fontSize) {
        positionX = fontSize/2;
        positionY -= fontSize;
        i -= 1;
        continue;
      }
      if (FT_Load_Char(face, text[i], FT_LOAD_RENDER)) {
        printf("FAILED TO LOAD CHAR '%c'\n", text[i]);
        continue;
      }
      GLuint texture;
      glGenTextures(1, &texture);
      int width = face->glyph->bitmap.width;
      int height = face->glyph->bitmap.rows;
      unsigned char *buffer = face->glyph->bitmap.buffer;
      glTexImage2D(GL_TEXTURE_2D, 0, GL_RED, width, height, 0, GL_RED, GL_UNSIGNED_BYTE, buffer);
      glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_CLAMP_TO_EDGE);
      glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_CLAMP_TO_EDGE);
      glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
      glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

      static struct {
        unsigned int texture;
        int size[2];
        int bearing[2];
        unsigned int advance;
      } ch = {
        texture,
        (int)face->glyph->bitmap.width, (int)face->glyph->bitmap.rows,
        face->glyph->bitmap_left, face->glyph->bitmap_top,
        (unsigned int)face->glyph->advance.x
      };

      float x = positionX + ch.bearing[0];
      float y = positionY - (ch.size[1] - ch.bearing[1]);

      float w = ch.size[0];
      float h = ch.size[1];

      float vertices[6][4] = {
        x, y+h,   0.0f, 0.0f,
        x, y,     0.0f, 1.0f,
        x+w, y,   1.0f, 1.0f,

        x, y+h,   0.0f, 0.0f,
        x+w, y,   1.0f, 1.0f,
        x+w, y+h, 1.0f, 0.0f,
      };

      // printf("%.2f, %.2f\n", x, y+h);
      // printf("%.2f, %.2f\n", x, y);
      // printf("%.2f, %.2f\n", x+w, y);
      // puts("===============================");

      glBindBuffer(GL_ARRAY_BUFFER, vbo);
      glBufferSubData(GL_ARRAY_BUFFER, 0, sizeof(vertices), vertices);

      glBindBuffer(GL_ARRAY_BUFFER, 0);
      glDrawArrays(GL_TRIANGLES, 0, 6);

      positionX += ch.advance >> 6;

      glBindTexture(GL_TEXTURE_2D, 0);
      glDeleteTextures(1, &texture);
    }


    /* Swap front and back buffers */
    glfwSwapBuffers(window);

    /* Poll for and process events */
    glfwPollEvents();
  }

  glfwTerminate();

  glDeleteVertexArrays(1, &vao);
  glDeleteBuffers(1, &vbo);
  glDeleteProgram(program);

  FT_Done_Face(face);
  FT_Done_FreeType(ft);
  return 0;
}
