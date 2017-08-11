CC = i686-w64-mingw32-gcc
CFLAGS += -I./inc
CFLAGS += -mwindows -municode

all: bin obj bin/app.exe

bin:
	mkdir -p bin

obj:
	mkdir -p obj

bin/app.exe: obj/main.o obj/window.o obj/image.o
	$(CC) $^ -o bin/app.exe $(CFLAGS) $(LIBS)

obj/main.o: src/main.c
	$(CC) -c src/main.c -o obj/main.o $(CFLAGS)

obj/window.o: src/window.c
	$(CC) -c src/window.c -o obj/window.o $(CFLAGS)

obj/image.o: src/image.c
	$(CC) -c src/image.c -o obj/image.o $(CFLAGS)
