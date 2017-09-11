#include <stdlib.h>
#include <string.h>
#include <GL/glut.h>
#include <string>

static void *font = GLUT_BITMAP_TIMES_ROMAN_24;
static void *fonts[] = {
	GLUT_BITMAP_9_BY_15,
	GLUT_BITMAP_TIMES_ROMAN_10,
	GLUT_BITMAP_TIMES_ROMAN_24
};

std::string defaultMessage = "THIS IS DEFAULT MESSAGE";
std::string message = defaultMessage;

static void selectMessage(int msg) {
	switch (msg) {
		case 1:
			message = "abcdefghijklmnop";
			break;
		case 2:
			message = "ABCDEFGHIJKLMNOP";
			break;
	}
}

static void keyboard(unsigned char key, int x, int y) {
	if (key == 27) {
		exit(0);
	}
}

static void reshape(int width, int height) {
	glViewport(0, 0, width, height);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluOrtho2D(0, width, height, 0);
	glMatrixMode(GL_MODELVIEW);
}

static void display() {
	glClear(GL_COLOR_BUFFER_BIT);

	struct Item {
		float x;
		float y;
		const char *string;
	};

	struct Item items[3] = {
		{100, 100, "THIS IS ITEM ONE"},
		{50, 145, "THIS IS ITEM TWO"},
		{0, 200, "THIS IS ITEM THREE"},
	};

	for (int i=0; i<sizeof(items)/sizeof(items[0]); i++) {
		struct Item *item = &items[i];
		glRasterPos2f(item->x, item->y);
		for (int n=0; n<strlen(item->string); n++) {
			glutBitmapCharacter(font, item->string[n]);
		}
	}

	glRasterPos2f(0, 24);
	const char *str = "THIS IS WRITTEN IN A BITMAP FONT";
	for (int i=0; i<strlen(str); i++) {
		glutBitmapCharacter(font, str[i]);
	}

	glutSwapBuffers();
}

int GlutBitmapMain(int argc, char *argv[])
{
	int msgSubMenu;

	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB);
	glutInitWindowSize(800, 600);
	glutCreateWindow("GLUT BITMAP FONT");
	glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
	glutDisplayFunc(display);
	glutReshapeFunc(reshape);
	glutKeyboardFunc(keyboard);

	msgSubMenu = glutCreateMenu(selectMessage);
	glutAddMenuEntry("abc", 1);
	glutAddMenuEntry("ABC", 2);
	glutAttachMenu(GLUT_RIGHT_BUTTON);

	glutMainLoop();

	return 0;
}
