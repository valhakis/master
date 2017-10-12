CC = g++

libs += -I ./glad/include
libs += -L ./lib
libs += -lglad
libs += -lGL 
libs += -lglfw
libs += -ldl

all: lib lib/libglad.a app

lib: 
	mkdir -p $@

app: main.cc
	$(CC) -o $@ $^ $(libs)

lib/libglad.a: glad.o
	ar rvs $@ $^

glad.o: glad/src/glad.cc
	$(CC) -c -o $@ $^ -I./glad/include -ldl
