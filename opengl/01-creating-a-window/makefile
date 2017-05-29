options= -I /usr/include/libdrm -lGLU -lGL -lGLEW -lglfw -lX11 -lpthread -lXrandr -lXi

all: main.c
	gcc $^ -o bin/app $(options)

run:
	./bin/app
