cc = i686-w64-mingw32-gcc
out = ../bin/06-win-opengl.exe

cflags = 
ldflags = 

libs += -municode
libs += -lopengl32
libs += -lgdi32
libs += -lglew32

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(src)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*
