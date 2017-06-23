#include <GLFW/glfw3.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>
#include <stdio.h>
#include <stdbool.h>
#include <pthread.h>
#include "inc/share.h"

int isOpen = true;

static void keyboard(GLFWwindow* window, int key, int scancode, int action, int mod)
{
  if (key == GLFW_KEY_ESCAPE && action == GLFW_PRESS) {
    glfwSetWindowShouldClose(window, true);
    isOpen = false;
  }
}

static void *worker(void *win)
{
  GLFWwindow* window = (GLFWwindow*)win;

  int argc;
  char argv[50][500];
  char input[512];
  int open = true;

  while (open && isOpen)
  {
    printf("win> ");
    fgets(input, 512, stdin);

    if (cmp_args(input, "name", &argc, argv)) {
      char name[100];
      if (strlen(argv[0]) > 1 || argc > 0) {
        strcpy(name, argv[0]);
        printf("Set name to %s\n", name);
        glfwSetWindowTitle(window, name);
      } else {
        printf("Need name.\n");
      }
    }

    if (cmp_args(input, "pos", &argc, argv)) {
      if (argc < 1) {
        printf("Need x and y.\n");
      } else {
        int xpos = atoi(argv[0]);
        int ypos = atoi(argv[1]);
        glfwSetWindowPos(window, xpos, ypos);
      }
    }


    if (compare(input, "quit\n") || compare(input, "exit\n")) {
      open = false;
      glfwSetWindowShouldClose(window, true);
    }

  }

  return NULL;
}

int WindowInitialize()
{
  isOpen = true;
  pthread_t workerT;

  GLFWwindow* window;

  glfwInit();

  window = glfwCreateWindow(800, 600, "Window", NULL, NULL);
  workerT = pthread_create(&workerT, NULL, worker, window);

  glfwSetKeyCallback(window, keyboard);
  glfwMakeContextCurrent(window);

  int width, height;
  glfwGetFramebufferSize(window, &width, &height);
  glViewport(0, 0, width, height);
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);

  glfwSetWindowPos(window, 800, 0);
  while (!glfwWindowShouldClose(window))
  {
    float time = (float)glfwGetTime();
    glfwPollEvents();
    glClear(GL_COLOR_BUFFER_BIT);

    float red = sinf(time) * 0.5f + 0.5f;
    float green = sinf(time) * 0.5f + 0.5f;

    // printf("Red: %f\n", red);
    float color[] = {
      red,
      green,
      0.0f,
      1.0f
    };
    glClearColor(color[0], color[1], color[2], color[3]);

    // glOrtho(0.0f, (float)width, 0.0f, (float)height, 0.0f, 1.0f);

    glLoadIdentity();
    static int angle = 0.0f;
    static int x = 0.0f;
    angle += 1.0f;
    static float pos[3] = {0.0f, 0.0f, 0.0f};
    pos[0] += 0.1;
    glRotatef(angle, 1.0f, 0.0f, 0.0f);
    glTranslatef(pos[0], pos[1], pos[2]);
    glColor3f(cosf(time)*0.5f+0.5f, 0.0f, sinf(time)*0.5f+0.5f);
    glBegin(GL_TRIANGLES);

#if TRUE == FALSE
    glVertex2f(-0.5f, -0.5f);
    glVertex2f(0.5f, -0.5f);
    glVertex2f(0.0f, 0.5f);
#else
    glVertex2f(0.0f, 0.0f);
    glVertex2f(100.0f, 0.0f);
    glVertex2f(50.0f, 100.0f);
#endif

    glEnd();

    glfwSwapBuffers(window);

    if (glfwWindowShouldClose(window)) {
      printf("NEED TO QUIT\n");
      isOpen = false;
    }
  }


  glfwDestroyWindow(window);
  glfwTerminate();

  // pthread_join(workerT, NULL);
}
