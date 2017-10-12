#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/freeglut.h>

static float spinning = false;
static float angle = 0.0f;
static float speed = 0.05f;

static void idle() {
  angle += speed;

  if (angle > 360.0f) {
    angle -= 360.0f;
  }

  glutPostRedisplay();
}

static void display() {
  glClear(GL_COLOR_BUFFER_BIT);

  glPushMatrix();
  glRotatef(angle, 0.0f, 0.0f, 1.0f);
  glColor3f(1.0f, 1.0f, 0.0f);
  glRectf(-25.0f, -25.0f, 25.0f, 25.0f);
  glPopMatrix();

  glutSwapBuffers();
}

static void keyboard(unsigned char key, int x, int y) {
  if (key == 27) {
    glutLeaveMainLoop();
  }
}

static void reshape(int w, int h) {
  glViewport(0, 0, w, h);
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();
}

static void mouse(int button, int state, int x, int y) {
  switch (button) {
    case GLUT_LEFT_BUTTON: 
      {
        if (state == GLUT_DOWN) 
        {
          spinning = !spinning;
          if (spinning) {
            glutIdleFunc(idle); 
          } else {
            glutIdleFunc(NULL); 
          }
        }
      }
      break;
    default: break;
  }
}

int chapter_01_main(int argc, char *argv[]) {

  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB);
  glutInitWindowSize(800, 600);
  glutInitWindowPosition(0, 0);

  int window = glutCreateWindow("CHAPTER 01");

  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glShadeModel(GL_FLAT);

  glutDisplayFunc(display);
  glutReshapeFunc(reshape);
  glutMouseFunc(mouse);
  glutKeyboardFunc(keyboard);

  glutMainLoop();

  return 0;
}
