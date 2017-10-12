#ifndef MY_WINDOW_H
#define MY_WINDOW_H

#include <string>
#include <iostream>
#include <SDL2/SDL.h>

#define WINDOW_KEY_W 26
#define WINDOW_KEY_A 4
#define WINDOW_KEY_S 22
#define WINDOW_KEY_D 7

class Window {
	public:
	  int argc;
	  char **argv;
		Window();
		~Window();
		Window(int argc, char **argv, int width, int height, const std::string& title);
		void Update();
		bool isClosed();
		void clear(float r, float g, float b, float a);
		float getWidth();
		float getHeight();
		void GetDimensions(float *w, float *h);
		bool keys[1000];
		void setMouseMotion(void (*callback)(Window* window, float x, float y));
		void setMouseButtonDownCallback(void (*callback)(Window* window, float x, float y));

	protected:

	private:
		SDL_Window* m_window;
		SDL_GLContext m_glContext;
    bool m_isClosed;
    void (*mouseButtonDownCallback)(Window* window, float x, float y);
    void (*mouseMotionCallback)(Window* window, float x, float y);

}; // class Window |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

#endif // #define MY_WINDOW_H |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
