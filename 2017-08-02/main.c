#include <valhakis.h>
#include <windows.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <stdarg.h>
#include <app/monster.h>
#include <app/share.h>
#include <app/work.h>

#include <glad/glad.h>
#include <GLFW/glfw3.h>

#define MY_GL_VERSION 3
#define create_shader_debug 0

#define KNRM  "\x1B[0m"
#define KBLK  "\x1B[30m"
#define KRED  "\x1B[31m"
#define KGRN  "\x1B[32m"
#define KYEL  "\x1B[33m"
#define KBLU  "\x1B[34m"
#define KMAG  "\x1B[35m"
#define KCYN  "\x1B[36m"
#define KWHT  "\x1B[37m"

#define IBLK  "\x1B[90m"
#define IRED  "\x1B[91m"
#define IGRN  "\x1B[92m"
#define IYEL  "\x1B[93m"
#define IBLU  "\x1B[94m"
#define IMAG  "\x1B[95m"
#define ICYN  "\x1B[96m"
#define IWHT  "\x1B[97m"

static float clear_color[4] = {0.1f, 0.1f, 0.1f, 1.0f};
static GLFWwindow* window;
static unsigned int width = 800, height = 600;
static void print_colors();
static void key_callback(GLFWwindow *window, int key, int scancode, int action, int mods);
static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos);
static int error(const char *format, ...);
static int success(const char *format, ...);
static char *load_source(const char *path);
static int create_program(const char *vpath, const char *fpath);
static int create_shader(GLenum type, const char *path);
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
	glfwMakeContextCurrent(window);

	gladLoadGLLoader((GLADloadproc) glfwGetProcAddress);
	glfwSwapInterval(1);

	program = create_program("default.vs", "default.fs");
	struct Monster monster = MonsterCreate(program);

	WorkInitialize(program);

	while (!glfwWindowShouldClose(window)) 
	{
		glClearColor(clear_color[0], clear_color[1], clear_color[2], clear_color[3]);
		glClear(GL_COLOR_BUFFER_BIT);

		RenderMonster(&monster);
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

static int error(const char *format, ...)
{
	va_list args;
	fprintf(stderr, IRED);
	fprintf(stderr, "ERROR: ");
	fprintf(stderr, KNRM);
	va_start(args, format);
	vfprintf(stderr, format, args);
	va_end(args);
	fprintf(stderr, "\n");
	return -1;
}

static int success(const char *format, ...)
{
	va_list args;
	fprintf(stdout, IGRN);
	fprintf(stdout, "SUCCESS: ");
	fprintf(stdout, KNRM);
	va_start(args, format);
	vfprintf(stdout, format, args);
	va_end(args);
	fprintf(stdout, "\n");
	return 0;
}

static char *load_source(const char *path)
{
	char *source = NULL;
	FILE *fp = NULL;
	long bufsize = -1;
	size_t newLen;

	if ((fp = fopen(path, "r")) == NULL) {
		error("Unable to read file '%s'.", path);
		return NULL;
	}

	if (fseek(fp, 0L, SEEK_END) != 0) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}

	bufsize = ftell(fp);

	if (bufsize == -1) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}

	source = malloc(sizeof(char) * (bufsize + 1));

	if (fseek(fp, 0L, SEEK_SET) != 0) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}

	newLen = fread(source, sizeof(char), bufsize, fp);

	if (ferror(fp) != 0) {
		error("File read error '%s'.", path);
		fclose(fp);
		return NULL;
	}
	source[newLen++] = '\0';

	return source;

	// free source later;
}

static int create_program(const char *vpath, const char *fpath)
{
	int program, shader;

	program = glCreateProgram();

	shader = create_shader(GL_VERTEX_SHADER, vpath);
	if (!shader) {
		error("No Shader.");
		return -1;
	}
	glAttachShader(program, shader);
	//glDeleteShader(shader);

	shader = create_shader(GL_FRAGMENT_SHADER, fpath);
	if (!shader) {
		error("No Shader.");
		return -1;
	}
	glAttachShader(program, shader);
	//glDeleteShader(shader);

	glLinkProgram(program);

	int link_ok = GL_FALSE;
	char info[512];

	glGetProgramiv(program, GL_LINK_STATUS, &link_ok);
	if (!link_ok)
	{
		glGetProgramInfoLog(program, 512, NULL, info);
		error("Program linking failed: %s", info);
		return -1;
	}

	return program;
}

static int create_shader(GLenum type, const char *path)
{
	char *source = load_source(path);
	int shader;

	if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
	{
		error("Type can only be 'GL_VERTEX_SHADER' or 'GL_FRAGMENT_SHADER'.\n");
		return -1;
	}

	shader = glCreateShader(type);
	glShaderSource(shader, 1, (const char **)&source, NULL);
	glCompileShader(shader);
	free(source);

	GLint compile_ok;
	char info[512];

	glGetShaderiv(shader, GL_COMPILE_STATUS, &compile_ok);
	if (!compile_ok)
	{
		glGetShaderInfoLog(shader, 512, NULL, info);
		error("Shader '%s' compilation failed: {%s}", path, info);
		return -1;
	} else {
#if create_shader_debug == 1
		glGetShaderInfoLog(shader, 512, NULL, info);
		success("Shader compilation was successful: {%s}", info);
#endif
	}

	return shader;
}

static void cursor_position_callback(GLFWwindow* window, double xpos, double ypos)
{
	// printf("%.2f, %.2f\n", xpos, -(ypos - height));
	MouseUpdate((float)xpos, (float)-(ypos - height));
}
