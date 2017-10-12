#ifndef MY_EXAMPLE_H
#define MY_EXAMPLE_H

#include <iostream>
#include <string>
#include <fstream>
#include <sstream>

#include <GL/glew.h>
#include <GLFW/glfw3.h>

class LWindow {
	public:
		LWindow(int width, int height);
		~LWindow();
		bool isOpen();
		void swapbuffers();
		void pollevents();
		void clear(float r, float g, float b, float a);
	protected:
	private:
		GLFWwindow* window;
		int width;
		int height;
};

class LPerson {
	public:
		LPerson(std::string name);
		~LPerson();
	protected:
	private:
		std::string name;
};

class LShader {
	public:
		LShader(std::string path);
		~LShader();
		void use();
		void setMatrix4fv(const char *name, const float m[4][4]);
	protected:
	private:
		unsigned int program;
		void checkCompileErrors(unsigned int shader, bool isProgram, GLenum type, std::string msg);
};

int Example01Main();

#endif
