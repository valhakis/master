CC = i686-w64-mingw32-gcc

all: p1.exe p2.exe p3.exe

p1.exe: p1.o
	$(CC) p1.o -o p1.exe

p2.exe: p2.o
	$(CC) p2.o -o p2.exe

p3.exe: p3.o
	$(CC) p3.o -o p3.exe

clean:
	rm -f p1.exe p2.exe p3.exe p1.o p2.o p3.o
