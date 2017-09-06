#include <app/ABGR/ABGR.h>
#include <app/share.h>

#include <GL/glew.h>
#include <GL/glut.h>

static GLubyte ubImage[65536];

static void TextFunction() {
	glEnable(GL_TEXTURE_2D);

	glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
	glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
	glTexParameterf(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_NEAREST);
	glTexEnvf(GL_TEXTURE_ENV, GL_TEXTURE_ENV_MODE, GL_DECAL);


#if GL_EXT_abgr
	glTexImage2D(GL_TEXTURE_2D, 0, 3, 128, 128, 0, GL_ABGR_EXT, GL_UNSIGNED_BYTE, ubImage);

	glBegin(GL_POLYGON);
	glTexCoord2f(1.0, 1.0);
	glVertex3f(-0.2, 0.8, -100.0);
	glTexCoord2f(0.0, 1.0);
	glVertex3f(-0.8, 0.8, -2.0);
	glTexCoord2f(0.0, 0.0);
	glVertex3f(-0.8, 0.2, -2.0);
	glTexCoord2f(1.0, 0.0);
	glVertex3f(-0.2, 0.2, -100.0);
	glEnd();
#endif
	glTexImage2D(GL_TEXTURE_2D, 0, 3, 128, 128, 0, GL_RGBA, GL_UNSIGNED_BYTE, ubImage);

	glBegin(GL_POLYGON);
	glTexCoord2f(1.0, 1.0);
	glVertex3f(0.8, 0.8, -2.0);
	glTexCoord2f(0.0, 1.0);
	glVertex3f(0.2, 0.8, -100.0);
	glTexCoord2f(0.0, 0.0);
	glVertex3f(0.2, 0.2, -100.0);
	glTexCoord2f(1.0, 0.0);
	glVertex3f(0.8, 0.2, -2.0);
	glEnd();

	glDisable(GL_TEXTURE_2D);
}

static void initialize() {
	GLubyte *img;
	GLsizei imgWidth = 128;

	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
	gluPerspective(60.0f, 1.0f, 0.1f, 1000.0f);
	glMatrixMode(GL_MODELVIEW);
	glDisable(GL_DITHER);

	// CREATE IMAGE
	img = ubImage;

	for (int i=0; i<32*imgWidth; i++) {
		*img++ = 0xff;
		*img++ = 0x00;
		*img++ = 0x00;
		*img++ = 0xff;
	}
	for (int i=0; i<32*imgWidth; i++) {
		*img++ = 0xff;
		*img++ = 0x00;
		*img++ = 0xff;
		*img++ = 0x00;
	}
	for (int i=0; i<32*imgWidth; i++) {
		*img++ = 0xff;
		*img++ = 0xff;
		*img++ = 0x00;
		*img++ = 0x00;
	}
	for (int i=0; i<32*imgWidth; i++) {
		*img++ = 0x00;
		*img++ = 0xff;
		*img++ = 0x00;
		*img++ = 0xff;
	}
}

static void resize(int width, int height) {
	glViewport(0, 0, width, height);
	// glutReshapeWindow(800, 600);
}

static void keyboard(unsigned char key, int x, int y) {
	if (key == 27) {
		share::printf("EXIT 0");
		exit(0);
	}
}

static void display() {
	glClearColor(0.1f, 0.1f, 0.1f, 1.0f);
	glClear(GL_COLOR_BUFFER_BIT);

	glRasterPos3f(-0.8, -0.8, -1.5);
	glDrawPixels(128, 128, GL_ABGR_EXT, GL_UNSIGNED_BYTE, ubImage);

	glRasterPos3f(0.2, -0.8, -1.5);
	glDrawPixels(128, 128, GL_RGBA, GL_UNSIGNED_BYTE, ubImage);

	TextFunction();

	glutSwapBuffers();
}

int ABGRMain(int argc, char *argv[]) {
	glutInit(&argc, argv);

	glutInitDisplayMode(GLUT_RGB|GLUT_DOUBLE);
	glutCreateWindow("ABGR extension");

	/*
		 if (!glutExtensionSupported("ABGR extension")) {
		 share::errorf("COULD NOT FIND EXTENSION 'ABGR'");
		 exit(0);
		 }
		 */

	// GLEW_{extension_name}

	glewExperimental = GL_TRUE;
	GLenum status = glewInit();
	if (status != GLEW_OK) {
		share::errorf("COULD NOT LOAD GLEW: '%s'.\n", glewGetErrorString(status));
		exit(1);
	}
	share::printf("GLEW STATUS: %s", glewGetString(GLEW_VERSION));

	if (GLEW_VERSION_1_3) {
		share::printf("GLEW VERSION 1.3 IS SUPPORTED!");
	}

	if (GLEW_ARB_vertex_program) {
		share::printf("GLEW: IT IS SAFE TO USE 'ARG_vertex_program extension'");
	}

	if (GL_EXT_abgr) {
		share::printf("GL_EXT_abgr should be ok to use.");
	}

	initialize();
	glutDisplayFunc(display);
	glutKeyboardFunc(keyboard);
	glutReshapeFunc(resize);
	glutMainLoop();
	return 0;
}
