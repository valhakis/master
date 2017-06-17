cc = gcc
out = ../bin/client

cflags = 
ldflags = 

libs = 

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(src)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*

