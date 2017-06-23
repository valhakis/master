cc = i686-w64-mingw32-gcc
out = ../bin/04-win-strings.exe

# src += src/main.c

cflags = 
ldflags = 

libs += -municode
libs += -luser32
libs += -lshlwapi

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(obj)
	$(cc) $(cflags) $(ldflags) $(libs) $^ -o $(out) 

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*
