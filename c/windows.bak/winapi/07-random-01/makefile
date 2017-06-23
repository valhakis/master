cc = i686-w64-mingw32-gcc
out = ../bin/07-random-01.exe

cflags = 
ldflags = 

libs += -municode
libs += -luser32

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(src)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*
