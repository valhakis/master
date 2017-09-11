CC = gcc

libs += -I inc
libs += -lX11

objects += obj/main.o
objects += obj/master.o
objects += obj/01_basic_window.o
objects += obj/02_mouse_position.o

all: obj bin/xlib

obj: 
	mkdir -p obj

bin/xlib: $(objects)
	$(CC) -o $@ $(objects) $(libs)

obj/main.o: src/main.c
	$(CC) -c -o $@ $^ $(libs)

obj/master.o: src/master.c
	$(CC) -c -o $@ $^ $(libs)

obj/01_basic_window.o: src/01_basic_window.c
	$(CC) -c -o $@ $^ $(libs)

obj/02_mouse_position.o: src/02_mouse_position.c
	$(CC) -c -o $@ $^ $(libs)
