#include <app/simple/shader.h>

static std::string dir = "/home/viktor/master/game";

SShader::SShader(std::string filePath) {
	simple::printf("SHADER CONSTRUCTION");

	// std::cout << (dir + "/" + filePath + ".vs") << std::endl;

	std::string vsSource;
	std::string fsSource;

	std::ifstream vsFile;
	std::ifstream fsFile;

	vsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);
	fsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);

	try {
		vsFile.open(dir + "/" + filePath + ".vs");
		fsFile.open(dir + "/" + filePath + ".fs");

		std::stringstream vsStream;
		std::stringstream fsStream;

		vsStream << vsFile.rdbuf();
		fsStream << fsFile.rdbuf();

		vsFile.close();
		fsFile.close();

		vsSource = vsStream.str();
		fsSource = fsStream.str();
	} catch (std::ifstream::failure e) {
		simple::errorf("FAILED TO READ SOURCE '%s'", filePath);
	}

	unsigned int vs, fs;

	const char *vsSourceCStr = vsSource.c_str();
	const char *fsSourceCStr = fsSource.c_str();

	vs = glCreateShader(GL_VERTEX_SHADER);
	glShaderSource(vs, 1, &vsSourceCStr, NULL);
	glCompileShader(vs);
	checkCompileErrors(vs, false, GL_COMPILE_STATUS, "VERTEX SHADER COMPILATION FAILED");

	fs = glCreateShader(GL_FRAGMENT_SHADER);
	glShaderSource(fs, 1, &fsSourceCStr, NULL);
	glCompileShader(fs);
	checkCompileErrors(fs, false, GL_COMPILE_STATUS, "FRAGMENT SHADER COMPILATION FAILED");

	program = glCreateProgram();
	glAttachShader(program, vs);
	glAttachShader(program, fs);

	glBindAttribLocation(program, 0, "position");
	glBindAttribLocation(program, 1, "texCoord");

	glLinkProgram(program);
	checkCompileErrors(program, true, GL_LINK_STATUS, "SHADER PROGRAM LINKING FAILED");

	glDeleteShader(vs);
	glDeleteShader(fs);
}

SShader::~SShader() {
	simple::printf("SHADER DESTRUCTION");
}

void SShader::checkCompileErrors(unsigned int shader, bool isProgram, GLenum type, std::string msg)
{
	int success = GL_TRUE;
	char info[1024];

	if (isProgram) {
		glGetProgramiv(shader, type, &success);
		if (success) return;
		glGetProgramInfoLog(shader, 1024, NULL, info);
	} else {
		glGetShaderiv(shader, type, &success);
		if (success) return;
		glGetShaderInfoLog(shader, 1024, NULL, info);
	}

	simple::errorf("[%s]: %s", msg.c_str(), info);
}

void SShader::setMatrix4fv(const char *name, const float m[4][4]) {
	glUniformMatrix4fv(glGetUniformLocation(program, name), 1, GL_FALSE, (const float *)m);
}
