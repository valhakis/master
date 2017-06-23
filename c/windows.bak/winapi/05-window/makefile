cc = i686-w64-mingw32-gcc
out = ../bin/05-window.exe

cflags = 
ldflags = 

libs += -municode
libs += -lopengl32
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
