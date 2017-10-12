CC = i686-w64-mingw32-gcc

all: ../bin/example.exe

../bin/example.exe: main.o world.o
	$(CC) $^ -o $@ -mwindows -lopengl32 -lglfw3

clean:
	rm -f ./*.o ../bin/example.exe
