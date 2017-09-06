#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <stdio.h>
#include <stdlib.h>
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>

#include <app/debug.h>

#include <app/window.h>
#include <app/share.h>
#include <app/shader.h>
#include <app/mesh.h>
#include <app/texture.h>
#include <app/transform.h>
#include <app/WAY.h>
#include <app/main.h>

#include <app/example.h>

#include <app/glut/glut.h>

#include <app/ABGR/ABGR.h>

#include <app/simple/main.h>
#include <app/mysql/mysql.h>

/* ===/========================================= |
 *  ///_____________________________________ | //
 * ///																				//
 * // main																   //
 * /________________________________________ | */

int main(int argc, char *argv[])
{
	share::main("GAME ENGINE");

	WAY way;

	share::printf("NUMBER OF ARGUMENTS: [%d]", argc);
	for (int i=0; i<argc; i++) {
		share::printf("ARGUMENT [%d] => (%s)", i, argv[i]);
	}

	if (argc > 1) {
		const char *argument = argv[1];

		if (strcmp(argument, "choose") == 0) {

		} else if (strcmp(argument, "simple") == 0) {
			way.set("simple");
		} else if (strcmp(argument, "ABGR") == 0) {
			way.set("ABGR");
		} else if (strcmp(argument, "help") == 0) {
			way.set("help");
		} else if (strcmp(argument, "glut") == 0) {
			way.set("glut");
		} else if (strcmp(argument, "mysql") == 0) {
			way.set("mysql");
			MYSQLInitialize(argc, argv);
		} else if (strcmp(argument, "example1") == 0) {
			way.set("example 1");
			Example01Main();
		} else {
			way.set("NO IDEA");
		}

		share::printf("ARGUMENT: '%s'", argument);
	}

	share::printf("IS WAY: '%s'", way.get().c_str());

	if (way.is("help")) {
		printf("game\n");
		printf("game help\n");
		printf("game simple\n");
		printf("game ABGR\n");
		printf("game glut bitmap\n");
	}

	if (way.is("simple")) {
		simple_main();
	}

	if (way.is("glut")) {
		if (argc > 2) {
			const char *arg = argv[2];
			if (strcmp(arg, "bitmap") == 0) {
				GlutBitmapMain(argc, argv);
			}
		}
	}

	if (way.is("default")) {
		default_main();
	}

	if (way.is("ABGR")) {
		ABGRMain(argc, argv);
	}

	share::main("EXIT ENGINE");
	return 0;
} // int main() |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
