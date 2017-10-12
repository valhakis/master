CC = i686-w64-mingw32-gcc
out = ../bin/2017-07-21.exe 
AR = i686-w64-mingw32-ar

CFLAGS += -mwindows
CFLAGS += -municode
CFLAGS += -lgdi32
CFLAGS += -lopengl32
CFLAGS += -lglad

LFLAGS += -I./glad/include -L./glad/lib -I ./include

all: glad/lib/libglad.a $(out) ../bin/default.vs ../bin/default.fs

../bin/default.vs: data/default.vs
	cp $^ $@

../bin/default.fs: data/default.fs
	cp $^ $@

glad/lib/libglad.a: glad/objects/glad.o
	$(AR) -cvq $@ $^

glad/objects/glad.o: glad/src/glad.c
	$(CC) -I./glad/include -c $^ -o $@

$(out): objects/main.o objects/line.o
	$(CC) $(LFLAGS) $^ -o $(out) $(CFLAGS)

objects/main.o: source/main.c
	$(CC) $(LFLAGS) -c $^ -o $@ $(CFLAGS)

objects/line.o: source/line.c
	$(CC) $(LFLAGS) -c $^ -o $@ $(CFLAGS)

clean:
	rm -f $(out) objects/main.o objects/line.o
