#ifndef MY_SIMPLE_SHADER_H
#define MY_SIMPLE_SHADER_H

#include <app/simple/simple.h>
#include <GL/glew.h>
#include <iostream>
#include <string>
#include <fstream>
#include <sstream>

class SShader {
	public:
		SShader(std::string filePath);
		~SShader();
		void use() {
			glUseProgram(program);
		}
		void setMatrix4fv(const char *name, const float m[4][4]);
	protected:
	private:
		unsigned int program;
		void checkCompileErrors(unsigned int shader, bool isProgram, GLenum type, std::string msg);
};
#endif
