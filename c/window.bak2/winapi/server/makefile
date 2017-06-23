cc = i686-w64-mingw32-gcc
out = ../bin/server.exe

cflags = 
ldflags = 

libs += -lws2_32

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(src)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*
