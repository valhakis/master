cc = i686-w64-mingw32-gcc
out = ../bin/01-classic-console.exe

# src += src/main.c

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(obj)
	$(cc) -o $(out) $^

obj/%.o: src/%.c
	$(cc) -c $< -o $@

clean:
	rm -f obj/*
