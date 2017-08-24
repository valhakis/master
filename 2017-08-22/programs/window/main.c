#include <stdio.h>
#include <GLFW/glfw3.h>

GLFWwindow* window;
const int ESCAPE = GLFW_KEY_ESCAPE;
const int PRESS = GLFW_PRESS;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mode)
{
	if (key == ESCAPE && action == PRESS)
		glfwSetWindowShouldClose(window, GL_TRUE);
}

int main()
{
	puts("LOG: MAIN ENTER");

	/* Initialize the library */
	if (!glfwInit())
		return -1;

	/* Create a windowed mode window and its OpenGL context */
	window = glfwCreateWindow(640, 480, "Hello World", NULL, NULL);
	if (!window)
	{
		glfwTerminate();
		return -1;
	}
	glfwSetKeyCallback(window, keyboard);

	/* Make the window's context current */
	glfwMakeContextCurrent(window);

	/* Loop until the user closes the window */
	while (!glfwWindowShouldClose(window))
	{
		/* Render here */
		glClear(GL_COLOR_BUFFER_BIT);

		/* Swap front and back buffers */
		glfwSwapBuffers(window);

		/* Poll for and process events */
		glfwPollEvents();
	}

	glfwTerminate();

	printf("LOG: MAIN EXIT");
	return 0;
}
