#ifndef MY_WINDOW_H
#define MY_WINDOW_H

#include <string>
#include <iostream>
#include <SDL2/SDL.h>

class Window {
	public:
		Window();
		~Window();
		Window(int width, int height, const std::string& title);
		void Update();
		bool isClosed();
		void clear(float r, float g, float b, float a);

	protected:

	private:
		SDL_Window* m_window;
		SDL_GLContext m_glContext;
		bool m_isClosed;

}; // class Window |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

#endif // #define MY_WINDOW_H |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
