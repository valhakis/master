#ifndef MY_SWINDOW_H
#define MY_SWINDOW_H

#include <GL/glew.h>
#include <GLFW/glfw3.h>

class SWindow {
	public:
		SWindow(unsigned int width, unsigned int height);
		~SWindow();
		void clear(float r, float g, float b, float a);
		bool isOpen();
		void events();
		void swap();
	protected:
	private:
		GLFWwindow* window;
};
#endif
