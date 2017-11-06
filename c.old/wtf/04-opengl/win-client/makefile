CC = i686-w64-mingw32-gcc

all: ../bin/win-client.exe

../bin/win-client.exe: main.o world.o world.h
	$(CC) -o $@ $^ -lws2_32

main.o: main.c
	$(CC) -c $^ -o main.o 

clean:
	rm -f ./*.o ../bin/win-client.exe
