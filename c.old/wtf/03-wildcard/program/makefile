CC = i686-w64-mingw32-gcc
DEBUG = -g
LFLAGS = -Wall $(DEBUG)
CFLAGS = -Wall -c $(DEBUG)
OBJECTS += main.o

all: program.exe

program.exe: $(OBJECTS)
	$(CC) $(LFLAGS) $(OBJECTS) -o program.exe

main.o: main.c
	$(CC) $(CFLAGS) main.c

tar:
	tar cvf program.tar main.c makefile
