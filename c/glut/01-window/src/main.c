#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <GL/glew.h>
#include <GL/freeglut.h>
#include <valhakis.h>

struct {
} Global;

int win;

bool open = true;

void update()
{

}


void render()
{
  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClear(GL_COLOR_BUFFER_BIT);
  glutSwapBuffers();
}

void keyboard(unsigned char key, int x, int y)
{
  if (key == 27)
  {
    glutDestroyWindow(win);
    exit(EXIT_SUCCESS);
  } else {
    printf("Key: %d.\n", key);
  }
}

int main(int argc, char *argv[]) 
{
  system("clear");

  glutInit(&argc, argv);

  glutInitDisplayMode(GLUT_RGB | GLUT_DOUBLE);
  glutInitWindowSize(800, 600);
  win = glutCreateWindow("Window");
  glutIdleFunc(&update);
  glutDisplayFunc(&render);
  glutKeyboardFunc(keyboard);

  glewInit();

  if (!GLEW_VERSION_2_0)
  {
    ValErr("OpenGL 2.0 not available.\n");
    return 1;
  }

  ValLog("OpenGL Version: %s.\n", glGetString(GL_VERSION));

  char *source = ValReadSource("data/sample.txt");
  ValLog("Source: \n%s.\n", source);

  while (open)
  {
    glutMainLoopEvent();
  }

  return 0;
}

