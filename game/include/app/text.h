#ifndef MY_TEXT_H
#define MY_TEXT_H

#include <app/shader.h>

#include <map>

/// Holds all state information relevant to a character as loaded using FreeType
struct Character {
  GLuint TextureID;   // ID handle of the glyph texture
  glm::ivec2 Size;    // Size of glyph
  glm::ivec2 Bearing;  // Offset from baseline to left/top of glyph
  GLuint Advance;    // Horizontal offset to advance to next glyph
};

class Text {
  public:
    Text(Shader &shader);
    ~Text();
    void render(std::string text, float x, float y, float scale, glm::vec3 color);
  protected:
  private:
    std::map<GLchar, Character> Characters;
    unsigned int VAO, VBO;
    Shader *shader;
};
#endif
