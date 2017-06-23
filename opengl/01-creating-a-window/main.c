#include <stdio.h>
#include <stdlib.h>
#define GLEW_STATIC
#include <GL/glew.h>
#include <GLFW/glfw3.h>

static float vertices[] = {
   -0.5f, -0.5f, 0.0f,
   0.5f, -0.5f, 0.0f,
   0.5f, 0.5f, 0.0f,
};

GLuint VBO, VAO, EBO;

static void key_callback(GLFWwindow* window, int key, int scancode, int action, int mods)
{
   if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS)
      glfwSetWindowShouldClose(window, GL_TRUE);
}

int main()
{
   glfwInit();

   glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3);
   glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
   glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);
   glfwWindowHint(GLFW_RESIZABLE, GL_FALSE);

   GLFWwindow* window = glfwCreateWindow(800, 600, "Window", NULL, NULL);

   if (window == NULL) {
      printf("Failed to create window.\n");
      glfwTerminate();
      exit(EXIT_FAILURE);
   }
   glfwSetKeyCallback(window, key_callback);
   glfwMakeContextCurrent(window);

   glewExperimental = GL_TRUE;
   if (glewInit() != GLEW_OK) {
      printf("Failed to initialize glew.\n");
      exit(EXIT_FAILURE);
   }

   int width, height;
   glfwGetFramebufferSize(window, &width, &height);
   glViewport(0, 0, width, height);
   glClearColor(0.1f, 0.1f, 0.1f, 1.0f);

   glGenBuffers(1, &VBO);
   glBindBuffer(GL_ARRAY_BUFFER, VBO);

   glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

   while (!glfwWindowShouldClose(window)) 
   {
      glfwPollEvents();

      glClear(GL_COLOR_BUFFER_BIT);

      glfwSwapBuffers(window);
   }

   glfwTerminate();

   return 0;
}
