#include <app/simple/main.h>
#include <app/simple/simple.h>
#include <app/simple/swindow.h>

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mods) {
	if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
		glfwSetWindowShouldClose(window, GL_TRUE);
	}
}

SWindow::SWindow(unsigned int width, unsigned int height) {
	simple::printf("SWINDOW CONSTRUCTION");

	glfwInit();
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
	glfwWindowHint(GLFW_RESIZABLE, GL_FALSE);

	window = glfwCreateWindow(width, height, "Window [swindow]", NULL, NULL);
	if (window == NULL)
	{
		simple::errorf("FAILED TO CREATE GLFW WINDOW");
		glfwTerminate();
		return;
	}
	glfwSetKeyCallback(window, keyboard);
	glfwMakeContextCurrent(window);

	glewExperimental = GL_TRUE;
	glewInit();
}

SWindow::~SWindow() {
	simple::cprintf(simple::KYEL, "SWINDOW DESTRUCTION");
	glfwTerminate();
}

bool SWindow::isOpen() {
	return !glfwWindowShouldClose(window);
}
void SWindow::events() {
	glfwPollEvents();
}
void SWindow::swap() {
	glfwSwapBuffers(window);
}

void SWindow::clear(float r, float g, float b, float a)
{
	glClearColor(r, g, b, a);
	glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);
}
