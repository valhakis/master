CC = i686-w64-mingw32-gcc
WINDRES = i686-w64-mingw32-windres

out = ../bin/05.exe

CFLAGS += 
LFLAGS += -mwindows
LFLAGS += -lcomctl32

OBJ += main.o
OBJ += example.o

all: $(out)

$(out): $(OBJ)
	$(CC) $^ $(LFLAGS) -o $@

main.o: main.c
	$(CC) $(CFLAGS) -c $^ -o $@

example.o: example.rc
	$(WINDRES) $^ $@

clean:
	rm -f app.exe ./*.o
