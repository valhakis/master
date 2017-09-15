#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/freeglut.h>

#include <math.h>

static GLubyte fly[] = {
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
  0x03, 0x80, 0x01, 0xC0, 0x06, 0xC0, 0x03, 0x60, 
  0x04, 0x60, 0x06, 0x20, 0x04, 0x30, 0x0C, 0x20, 
  0x04, 0x18, 0x18, 0x20, 0x04, 0x0C, 0x30, 0x20,
  0x04, 0x06, 0x60, 0x20, 0x44, 0x03, 0xC0, 0x22, 
  0x44, 0x01, 0x80, 0x22, 0x44, 0x01, 0x80, 0x22, 
  0x44, 0x01, 0x80, 0x22, 0x44, 0x01, 0x80, 0x22,
  0x44, 0x01, 0x80, 0x22, 0x44, 0x01, 0x80, 0x22, 
  0x66, 0x01, 0x80, 0x66, 0x33, 0x01, 0x80, 0xCC, 
  0x19, 0x81, 0x81, 0x98, 0x0C, 0xC1, 0x83, 0x30,
  0x07, 0xe1, 0x87, 0xe0, 0x03, 0x3f, 0xfc, 0xc0, 
  0x03, 0x31, 0x8c, 0xc0, 0x03, 0x33, 0xcc, 0xc0, 
  0x06, 0x64, 0x26, 0x60, 0x0c, 0xcc, 0x33, 0x30,
  0x18, 0xcc, 0x33, 0x18, 0x10, 0xc4, 0x23, 0x08, 
  0x10, 0x63, 0xC6, 0x08, 0x10, 0x30, 0x0c, 0x08, 
  0x10, 0x18, 0x18, 0x08, 0x10, 0x00, 0x00, 0x08
};

static GLubyte halftone[] = {
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55,
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55,
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55,
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55,
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55, 
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55,
  0xAA, 0xAA, 0xAA, 0xAA, 0x55, 0x55, 0x55, 0x55
};

static bool spinning = false;

static void idle() {
  glutPostRedisplay();
}

static void display() {
  glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0.0f, (float)glutGet(GLUT_WINDOW_WIDTH), 0.0f, (float)glutGet(GLUT_WINDOW_WIDTH));

  glColor3f(1.0f, 1.0f, 1.0f);

  glRectf(25.0f, 25.0f, 125.0f, 125.0f);
  glEnable(GL_POLYGON_STIPPLE);

  glPolygonStipple(fly);
  glRectf(125.0f, 25.0f, 225.0f, 125.0f);

  glPolygonStipple(halftone);
  glRectf(225.0f, 25.0f, 325.0f, 125.0f);

  glDisable(GL_POLYGON_STIPPLE);

  glutSwapBuffers();
}

static void keyboard(unsigned char key, int x, int y) {
  if (key == 27) {
    glutLeaveMainLoop();
  }
}

static void reshape(int w, int h) {
  glViewport(0, 0, w, h);
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

int chapter_03_main(int argc, char *argv[]) {

  glutInit(&argc, argv);
  glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB);
  glutInitWindowSize(800, 600);
  glutInitWindowPosition(0, 0);

  int window = glutCreateWindow("CHAPTER 01");

  glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
  glClearDepth(1.0f);
  glShadeModel(GL_FLAT);

  glutDisplayFunc(display);
  glutReshapeFunc(reshape);
  glutMouseFunc(mouse);
  glutKeyboardFunc(keyboard);

  glutMainLoop();

  return 0;
}
