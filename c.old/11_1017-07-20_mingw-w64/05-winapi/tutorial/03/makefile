CC = i686-w64-mingw32-gcc
WINDRES = i686-w64-mingw32-windres

out = ../bin/03.exe

CFLAGS += 
LFLAGS += -mwindows

OBJ += main.o

all: $(out)

$(out): $(OBJ)
	$(CC) $(LFLAGS) $^ -o $@

main.o: main.c
	$(CC) $(CFLAGS) -c $^ -o $@

clean:
	rm -f app.exe ./*.o
