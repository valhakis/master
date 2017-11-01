#include <GL/glut.h>

void display();

int main(int argc, char *argv[])
{
  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_SINGLE);
  glutInitWindowSize(800, 600);
  glutInitWindowPosition(0, 0);
  glutCreateWindow("Window");
  glutDisplayFunc(display);
  glutMainLoop();
  return 0;
}

void display()
{
  glClear(GL_COLOR_BUFFER_BIT);
  glFlush();
}
