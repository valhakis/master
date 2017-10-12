CC = i686-w64-mingw32-gcc
AR = i686-w64-mingw32-ar

all: lib/libglad.a

lib/libglad.a: glad.o
	$(AR) -cvq lib/libglad.a $^

glad.o: src/glad.c
	$(CC) -I./include -c $^ -o glad.o

clean:
	rm -f ./*.o lib/libglad.a
