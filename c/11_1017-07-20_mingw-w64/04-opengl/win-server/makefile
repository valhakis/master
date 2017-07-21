CC = i686-w64-mingw32-gcc

all: ../bin/win-server.exe

../bin/win-server.exe: main.o world.o world.h
	$(CC) -o $@ $^ -lws2_32

clean:
	rm -f ./*.o ../bin/win-server.exe
