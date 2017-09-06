# REQUIRED [src/*, include/*, data/{some items}, start.sh, makefile]

CC = g++
OBJECTS += obj/stb_image.o obj/main.o obj/window.o obj/share.o obj/shader.o obj/mesh.o obj/texture.o obj/default_main.o obj/simple.main.o
OBJECTS += obj/transform.o
OBJECTS += obj/simple.swindow.o
OBJECTS += obj/simple.simple.o
OBJECTS += obj/simple.shader.o
OBJECTS += obj/example.example.o
OBJECTS += obj/example.example01.o
OBJECTS += obj/ABGR.ABGR.o
OBJECTS += obj/glut.bitmap.o
OBJECTS += obj/mysql.mysql.o
INCLUDES += ./include/app/window.h ./include/app/share.h ./include/app/mesh.h ./include/app/transform.h ./include/app/WAY.h
INCLUDES += ./include/app/main.h
LIBS += -I./include -lGL -lGLEW -lglfw -lglut -lGLU

LIBS += -D_REENTRANT -I/usr/include/SDL2 -lSDL2

all: bin obj bin/game

bin:
	mkdir -p $@

obj:
	mkdir -p $@

bin/game: $(OBJECTS) $(INCLUDES)
	$(CC) -o $@ $(OBJECTS) $(LIBS)

obj/main.o: src/main.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/window.o: src/window.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/share.o: src/share.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/shader.o: src/shader.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/mesh.o: src/mesh.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/texture.o: src/texture.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/stb_image.o: src/stb_image.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/transform.o: src/transform.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/default_main.o: src/default_main.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/simple.main.o: src/simple/main.cpp
	$(CC) -c -o $@ $^ $(LIBS)

obj/simple.swindow.o: src/simple/swindow.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/simple.simple.o: src/simple/simple.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/simple.shader.o: src/simple/shader.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/ABGR.ABGR.o: src/ABGR/ABGR.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/glut.bitmap.o: src/GLUT/bitmap.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/mysql.mysql.o: src/mysql/mysql.c
	$(CC) -c -o $@ $^ $(LIBS)

obj/example.example01.o: src/example/example01.cpp
	$(CC) -c -o $@ $^ $(LIBS)

obj/example.example.o: src/example/example.cpp
	$(CC) -c -o $@ $^ $(LIBS)

clean:
	rm -f $(OBJECTS) bin/game
