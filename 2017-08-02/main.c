#include <valhakis.h>
#include <windows.h>
#include <stdarg.h>
#include <app/monster.h>
#include <app/share.h>
#include <app/main-menu.h>
#include <app/work.h>
#include <app/shader.h>

#include <windows.h>
#include <glad/glad.h>
#define GLFW_EXPOSE_NATIVE_WIN32
#include <GLFW/glfw3native.h>
#include <GLFW/glfw3.h>

static float clear_color[4] = {0.3f, 0.1f, 0.2f, 1.0f};
static GLFWwindow* window;
static unsigned int width = 800, height = 600;
static void print_colors();
static void key_callback(GLFWwindow *window, int key, int scancode, int action, int mods);
static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos);
static GLint vertex_position_location, vertex_color_location;
static int program;
static GLuint vertex_buffer;
static const struct {
	float x, y;
	float r, g, b;
} vertices[3] = {
	{-0.5f, -0.5f, 		1.0f, 1.0f, 1.0f},
	{+0.5f, -0.5f, 		1.0f, 1.0f, 1.0f},
	{+0.0f, +0.5f, 		1.0f, 1.0f, 1.0f},
};

static struct Mouse *mouse;

int WINAPI wWinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, PWSTR pCmdLine, int nCmdShow)
{
	setbuf(stdout, NULL);
	setbuf(stderr, NULL);

	MouseInitialize();

	mouse = MouseGetStructurePointer();

	glfwInit();
#if MY_GL_VERSION == 2
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 2);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 0);
#elif MY_GL_VERSION == 3
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
#endif

#ifdef __APPLE__
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); // uncomment this statement to fix compilation on OS X
#endif

	window = glfwCreateWindow(width, height, "Window", NULL, NULL);
	glfwSetKeyCallback(window, key_callback);
	glfwSetCursorPosCallback(window, cursor_position_callback);
	HWND hwnd = glfwGetWin32Window(window);
	glfwSetWindowPos(window, 0, 0);
	glfwMakeContextCurrent(window);

	gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);
	glfwSwapInterval(1);

	program = create_program("default.vs", "default.fs");
	struct Monster monster = MonsterCreate(program);

	WorkInitialize(program);
	MainMenuInitialize();

	while (!glfwWindowShouldClose(window)) 
	{
		glClearColor(clear_color[0], clear_color[1], clear_color[2], clear_color[3]);
		glClear(GL_COLOR_BUFFER_BIT);

		RenderMonster(&monster);
		MainMenuUpdate();
		WorkRender();

		glfwSwapBuffers(window);
		glfwPollEvents();
	}

	glfwTerminate();
	return 0;
}

static void key_callback(GLFWwindow *window, int key, int scancode, int action, int mods)
{
	if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
		glfwSetWindowShouldClose(window, GL_TRUE);
}

static void print_colors()
{
	printf("%sBLACK: TEXT IS AWESOME.%s\n", KBLK, KNRM);
	printf("%sRED: TEXT IS AWESOME.%s\n", KRED, KNRM);
	printf("%sGREEN: TEXT IS AWESOME.%s\n", KGRN, KNRM);
	printf("%sYELLOW: TEXT IS AWESOME.%s\n", KYEL, KNRM);
	printf("%sBLUE: TEXT IS AWESOME.%s\n", KBLU, KNRM);
	printf("%sMAGENTA: TEXT IS AWESOME.%s\n", KMAG, KNRM);
	printf("%sCYAN: TEXT IS AWESOME.%s\n", KCYN, KNRM);
	printf("%sWHITE: TEXT IS AWESOME.%s\n", KWHT, KNRM);

	printf("%sBLACK: TEXT IS AWESOME.%s\n", IBLK, KNRM);
	printf("%sRED: TEXT IS AWESOME.%s\n", IRED, KNRM);
	printf("%sGREEN: TEXT IS AWESOME.%s\n", IGRN, KNRM);
	printf("%sYELLOW: TEXT IS AWESOME.%s\n", IYEL, KNRM);
	printf("%sBLUE: TEXT IS AWESOME.%s\n", IBLU, KNRM);
	printf("%sMAGENTA: TEXT IS AWESOME.%s\n", IMAG, KNRM);
	printf("%sCYAN: TEXT IS AWESOME.%s\n", ICYN, KNRM);
	printf("%sWHITE: TEXT IS AWESOME.%s\n", IWHT, KNRM);
}

static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos)
{
	// printf("%.2f, %.2f\n", xpos, -(ypos - height));
	MouseUpdate((float)xpos, (float)-(ypos - height));
}
