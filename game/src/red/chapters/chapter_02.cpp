#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#include <GL/gl.h>
#include <GL/glu.h>
#include <GL/freeglut.h>

#include <math.h>

static float spinning = false;
static float angle = 0.0f;
static float speed = 0.05f;
static float pos[3] = {0.0f, 0.0f, 0.0f};

static void idle() {
  angle += speed;

  if (angle > 360.0f) {
    angle -= 360.0f;
  }

  pos[0] += speed;
  pos[1] += speed;

  glutPostRedisplay();
}

static void display() {
  glClear(GL_COLOR_BUFFER_BIT|GL_DEPTH_BUFFER_BIT);

  // FIRST ONE
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();

  glPushMatrix();
  // glTranslatef(pos[0], pos[1], pos[2]);
  glRotatef(angle, 0.0f, 0.0f, 1.0f);
  glColor3f(1.0f, 1.0f, 0.0f);
  glRectf(-25.0f, -25.0f, 25.0f, 25.0f);
  glPopMatrix();

  // SECOND ONE
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  gluOrtho2D(0.0f, glutGet(GLUT_WINDOW_WIDTH), 0.0f, glutGet(GLUT_WINDOW_HEIGHT));
  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();

  glPushMatrix();
  glTranslatef(pos[0], pos[1], pos[2]);
  glRotatef(angle, 0.0f, 0.0f, 1.0f);
  glColor3f(1.0f, 0.0f, 1.0f);
  glRectf(-25.0f, -25.0f, 25.0f, 25.0f);
  glPopMatrix();

  // THIRD ONE
  glMatrixMode(GL_PROJECTION);
  glLoadIdentity();
  glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
  glMatrixMode(GL_MODELVIEW);
  glLoadIdentity();

  glPushMatrix();

  glPointSize(5.0f);
  glColor3f(0.4f, 0.4f, 0.4f);
  glBegin(GL_POINTS);
  glVertex2f(0.0f, 0.0f);
  glVertex2f(0.0f, 3.0f);
  glVertex2f(4.0f, 3.0f);
  glVertex2f(6.0f, 1.5f);
  glVertex2f(4.0f, 0.0f);
  glEnd();
  glPointSize(1.0f);

  glColor3f(1.0f, 0.0f, 0.0f);
  glBegin(GL_POLYGON);
  glVertex2f(0.0f, 0.0f);
  glVertex2f(0.0f, 3.0f);
  glVertex2f(4.0f, 3.0f);
  glVertex2f(6.0f, 1.5f);
  glVertex2f(4.0f, 0.0f);
  glEnd();

  glPopMatrix();

  // FOURTH ONE | CIRCLE
  {
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glColor3f(0.0f, 0.0f, 1.0f);
    int points = 100;
    float angle = 0.0f;
    float radius = 10.0f;
    glBegin(GL_LINE_LOOP);
    for (int i=0; i<points; i++) {
      angle = 2 * M_PI * i / points;
      glVertex2f(cosf(angle) * radius, sinf(angle) * radius);
    }
    glEnd();
  }

  // FIFTH ONE
  {
    float width = glutGet(GLUT_WINDOW_WIDTH);
    float height = glutGet(GLUT_WINDOW_HEIGHT);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0.0f, width, 0.0f, height);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glEnable(GL_LINE_STIPPLE);
    glColor3f(0.5f, 0.5f, 0.5f);
    glLineStipple(1, 0x00FF);
    glBegin(GL_LINES);
    glVertex2f(0.0f, height / 2);
    glVertex2f(width, height / 2);
    glVertex2f(width/2, 0.0f);
    glVertex2f(width/2, height);
    glEnd();
    glDisable(GL_LINE_STIPPLE);
  }

  // SIXTH ONE
  {
    float width = glutGet(GLUT_WINDOW_WIDTH);
    float height = glutGet(GLUT_WINDOW_HEIGHT);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    gluOrtho2D(0.0f, width, 0.0f, height);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    int vertices[] = {
      50, 100,
      100, 100,
      150, 100,
      200, 100,
    };
    float colors[] = {
      1.0f, 0.0f, 0.0f,
      1.0f, 1.0f, 0.0f,
      0.0f, 1.0f, 1.0f,
      0.0f, 0.0f, 1.0f,
    };
    glEnableClientState(GL_VERTEX_ARRAY);
    glEnableClientState(GL_COLOR_ARRAY);

    glVertexPointer(2, GL_INT, 6 * sizeof(float), vertices);
    glColorPointer(3, GL_FLOAT, 6 * sizeof(float), colors);

    glPointSize(50.0f);
    glColor3f(0.0f, 0.0f, 1.0f);
    glBegin(GL_POINTS);
    glArrayElement(0);
    glArrayElement(1);
    glArrayElement(2);
    glArrayElement(3);
    glArrayElement(4);
    glArrayElement(5);
    glArrayElement(6);
    glArrayElement(7);
    glArrayElement(8);
    glArrayElement(9);
    glEnd();
    glPointSize(1.0f);
  }

  // SEVENTH ONE | CIRCLE
  {
    float width = glutGet(GLUT_WINDOW_WIDTH);
    float height = glutGet(GLUT_WINDOW_HEIGHT);
    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    // glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
    gluOrtho2D(0.0f, width, 0.0f, height);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glColor3f(0.0f, 0.0f, 1.0f);
    int points = 100;
    float angle = 0.0f;
    float radius = 150.0f;
    float centerX = width / 2;
    float centerY = height / 2;
    glTranslatef(centerX, centerY, 0.0f);
    glBegin(GL_LINE_LOOP);
    for (int i=0; i<points; i++) {
      angle = 2 * M_PI * i / points;
      glVertex2f(cosf(angle) * radius, sinf(angle) * radius);
    }
    glEnd();
  }

  // EIGHT ONE | LINES BOX
  {

    float width = glutGet(GLUT_WINDOW_WIDTH);
    float height = glutGet(GLUT_WINDOW_HEIGHT);
    static bool current = false;
    static float outer = 0.0f;
    float maxOuter = 100.0f;
    float minOuter = 0.0f;

    if (current == false && outer < maxOuter) {
      outer += 0.1f;
    }
    if (outer >= maxOuter) {
      current = true;
    }

    if (current == true && outer > minOuter) {
      outer -= 0.1f;
    }
    if (outer <= minOuter) {
      current = false;
    }

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    // glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
    gluOrtho2D(0.0f, width, 0.0f, height);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();

    glColor3f(0.0f, 1.0f, 0.0f);
    glBegin(GL_LINE_LOOP);
    glVertex2i(outer, outer);
    glVertex2i(width-outer, outer);
    glVertex2i(width-outer, height-outer);
    glVertex2i(outer, height-outer);
    glEnd();
  }

  {
    static int frame = 0;
    float width = glutGet(GLUT_WINDOW_WIDTH);
    float height = glutGet(GLUT_WINDOW_HEIGHT);
    static bool change = false;
    int minEdges = 4;
    int maxEdges = 40;
    static int edges = 4;
    float radius = (width / 2) - 10.0f;

    if (frame % 500 == 0 && frame != 0) {
      if (change) {
        edges -= 1;
      } else {
        edges += 1;
      }
    }

    if (edges <= minEdges) {
      change = false;
    }
    if (edges >= maxEdges) {
      change = true;
    }

    glMatrixMode(GL_PROJECTION);
    glLoadIdentity();
    // glOrtho(-50.0f, 50.0f, -50.0f, 50.0f, -1.0f, 1.0f);
    gluOrtho2D(0.0f, width, 0.0f, height);
    glMatrixMode(GL_MODELVIEW);
    glLoadIdentity();
    glTranslatef(width / 2, height / 2, 0.0f);

    glColor3f(0.0f, 0.0f, 1.0f);
    glBegin(GL_LINE_STRIP);
    for (int i=0; i<= edges; i++) {
      float circleX = cosf(2*M_PI*(float)i/(float)edges) * radius;
      float circleY = sinf(2*M_PI*(float)i/(float)edges) * radius;
      glVertex2f(circleX, circleY);
    }
    glEnd();
    frame += 1;
  }

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

int chapter_02_main(int argc, char *argv[]) {

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
