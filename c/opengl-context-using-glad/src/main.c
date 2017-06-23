#include <stdio.h>
#include <stdlib.h>

#include <glad/glad.h>

#include <SDL2/SDL.h>

#include <stdbool.h>

int main()
{
  SDL_Window *window = NULL;
  SDL_GLContext context;

  if (SDL_Init(SDL_INIT_VIDEO) < 0) {
    printf("UNABLE TO INITIALIZE SDL\n");
    return -1;
  }
  SDL_GL_LoadLibrary(NULL);
  // Request an OpenGL 4.5 context (should be core)
  SDL_GL_SetAttribute(SDL_GL_ACCELERATED_VISUAL, 1);
  SDL_GL_SetAttribute(SDL_GL_CONTEXT_MAJOR_VERSION, 4);
  SDL_GL_SetAttribute(SDL_GL_CONTEXT_MINOR_VERSION, 5);
  // Also request a depth buffer
  SDL_GL_SetAttribute(SDL_GL_DOUBLEBUFFER, 1);
  SDL_GL_SetAttribute(SDL_GL_DEPTH_SIZE, 24);

  window = SDL_CreateWindow("Window", SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED, 800, 600, SDL_WINDOW_OPENGL);
  
  if (window == NULL) {
    printf("FAILED TO INITIALIZE WINDOW\n");
    return -1;
  }

  context = SDL_GL_CreateContext(window);
  if (context == NULL) {
    printf("UNABLE TO CREATE VIDEO CONTEXT\n");
    return -1;
  }

  SDL_GL_SetSwapInterval(1);

  glDisable(GL_DEPTH_TEST);
  glDisable(GL_CULL_FACE);

  int w,h;
  SDL_GetWindowSize(window, &w, &h);
  glViewport(0, 0, w, h);
  glClearColor(0.0f, 0.5f, 1.0f, 0.0f);

  SDL_Event event;

  bool open = true;

  while (open) 
  {
    while (SDL_PollEvent(&event)) {
      if (event.type == SDL_QUIT) {
        open = false;
      }
    }
    glClear(GL_COLOR_BUFFER_BIT);
    SDL_GL_SwapWindow(window);
  }

  return 0;
}
