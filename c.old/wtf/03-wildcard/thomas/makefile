cc = i686-w64-mingw32-gcc

all: thomas.exe

thomas.exe: main.o
	$(cc) -o thomas.exe main.o

main.o: main.c
	$(cc) -o main.o -c main.c

clean: 
	rm -f thomas.exe main.o
