CC = i686-w64-mingw32-gcc
WINDRES = i686-w64-mingw32-windres

CFLAGS += 
LFLAGS += -mwindows
# LFLAGS += -municode

SRC += main.c

OBJ += main.o
OBJ += example.o

all: ../bin/01.exe

../bin/01.exe: $(OBJ)
	$(CC) $(LFLAGS) $^ -o $@

main.o: main.c
	$(CC) $(CFLAGS) -c $^ -o $@

example.o: example.rc
	$(WINDRES) $^ $@

clean:
	rm -f ../bin/01.exe ./*.o
