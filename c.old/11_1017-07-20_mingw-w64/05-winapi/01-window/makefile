CC = i686-w64-mingw32-gcc

CFLAGS += 
LFLAGS += -mwindows -municode

SRC += source/main.c
OBJ += objects/main.o

all: ../bin/01-window.exe

../bin/01-window.exe: $(OBJ)
	$(CC) $(LFLAGS) $^ -o $@

objects/main.o: source/main.c
	$(CC) $(CFLAGS) -c $^ -o $@
