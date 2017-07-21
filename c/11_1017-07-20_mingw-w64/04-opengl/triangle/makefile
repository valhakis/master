CC = i686-w64-mingw32-gcc

all: ../bin/triangle.exe ../bin/default.vs ../bin/default.fs

../bin/default.vs: default.vs
	cp $^ $@

../bin/default.fs: default.fs
	cp $^ $@

../bin/triangle.exe: main.o world.o
	$(CC) -I ../glad/include -L ../glad/lib $^ -o $@ -mwindows -lopengl32 -lglfw3 -lglad

main.o: main.c
	$(CC) -c -I ../glad/include -L ../glad/lib $^ -o $@ -mwindows -lopengl32 -lglfw3 -lglad

clean:
	rm -f ./*.o ../bin/triangle.exe
