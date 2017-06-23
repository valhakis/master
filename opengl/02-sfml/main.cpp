#include <GL/glew.h>
#include <SFML/Window.hpp>
#include <SFML/OpenGL.hpp>

#include <stdio.h>
#include <stdlib.h>

char* readFile(const char *file)
{
  FILE *fp = fopen(file, "rb");
  fseek(fp, 0, SEEK_END);
  long fsize = ftell(fp);
  fseek(fp, 0, SEEK_SET);

  char *source = (char*)malloc(fsize + 1);
  fread(source, fsize, 1, fp);
  fclose(fp);

  source[fsize] = '\0';

  return source;
}

GLuint createShader(GLenum type, const char* file) 
{
  const char *source = readFile(file);

  printf("SOURCE: %s\n", source);

  GLuint shader = glCreateShader(type);
  glShaderSource(shader, 1, &source, NULL);
  glCompileShader(shader);

  GLint success;
  GLchar infoLog[512];
  glGetShaderiv(shader, GL_COMPILE_STATUS, &success);

  if (!success) {
    glGetShaderInfoLog(shader, 512, NULL, infoLog);
    printf("SHADER COMPILATION ERROR: %s\n", infoLog);
    exit(EXIT_FAILURE);
  }
}

int main()
{
  sf::ContextSettings settings;
  settings.depthBits = 24;
  settings.stencilBits = 8;
  settings.antialiasingLevel = 4;
  settings.majorVersion = 3;
  settings.minorVersion = 0;

  /* create window */
  // sf::Window window(sf::VideoMode(800, 600), "Window", sf::Style::Default, settings);
  sf::Window window(sf::VideoMode(800, 600), "Window", sf::Style::Default, sf::ContextSettings(32));
  window.setVerticalSyncEnabled(true);

  // GLuint vertexShader = glCreateShader(GL_VERTEX_SHADER);

  bool running = true;

  glewExperimental = GL_TRUE;
  glewInit();

  createShader(GL_VERTEX_SHADER, "default.vs");

  while (running)
  {
    sf::Event event;

    while (window.pollEvent(event))
    {
      if (event.type == sf::Event::Closed) {
        running = false;
      }

      if ((event.type == sf::Event::KeyPressed) && (event.key.code == sf::Keyboard::Escape))
        running = false;
      //kwindow.close();

      if (event.type == sf::Event::Resized) {
        glViewport(0, 0, event.size.width, event.size.height);
      }
    }

    glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
    glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

    window.display();
  }
  return 0;
}
