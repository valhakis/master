#include <app/example.h>
#include <app/share.h>

static std::string dir = "/home/viktor/master/game";

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
	if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
		glfwSetWindowShouldClose(window, GL_TRUE);
	}
}

// +|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|
// LWindow
// ======================================================

LWindow::LWindow(int width, int height) {
	this->width = width;
	this->height = height;

	glfwInit();
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
	glfwWindowHint(GLFW_RESIZABLE, GL_FALSE);

	window = glfwCreateWindow(width, height, "Window [swindow]", NULL, NULL);
	if (window == NULL)
	{
		share::errorf("FAILED TO CREATE GLFW WINDOW");
		glfwTerminate();
		return;
	}
	glfwSetKeyCallback(window, keyboard);
	glfwMakeContextCurrent(window);

	glewExperimental = GL_TRUE;
	glewInit();
}

bool LWindow::isOpen() {
	return !glfwWindowShouldClose(window);
}

void LWindow::swapbuffers() {
	glfwSwapBuffers(window);
}

void LWindow::pollevents() {
	glfwPollEvents();
}

void LWindow::clear(float r, float g, float b, float a) {
	glClearColor(r, g, b, a);
	glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
}

LWindow::~LWindow() {
	glfwTerminate();
}

// +|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|
// LPerson
// ======================================================

LPerson::LPerson(std::string name) {
	this->name = name;
}

LPerson::~LPerson() {

}

// +|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|+|
// LShader
// ======================================================

LShader::LShader(std::string path) {
	std::string vsSource;
	std::string fsSource;

	std::ifstream vsFile;
	std::ifstream fsFile;

	vsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);
	fsFile.exceptions(std::ifstream::failbit | std::ifstream::badbit);

	try {
		vsFile.open(dir + "/" + path + ".vs");
		fsFile.open(dir + "/" + path + ".fs");

		std::stringstream vsStream;
		std::stringstream fsStream;

		vsStream << vsFile.rdbuf();
		fsStream << fsFile.rdbuf();

		vsFile.close();
		fsFile.close();

		vsSource = vsStream.str();
		fsSource = fsStream.str();
	} catch (std::ifstream::failure e) {
		share::errorf("FAILED TO READ SOURCE '%s'", path);
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

void LShader::checkCompileErrors(unsigned int shader, bool isProgram, GLenum type, std::string msg)
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

	share::errorf("[%s]: %s", msg.c_str(), info);
}

void LShader::setMatrix4fv(const char *name, const float m[4][4]) {
	glUniformMatrix4fv(glGetUniformLocation(program, name), 1, GL_FALSE, (const float *)m);
}

LShader::~LShader() {

}

void LShader::use() {
	glUseProgram(program);
}
