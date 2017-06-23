cc = i686-w64-mingw32-gcc
out = ../bin/03-win-main.exe

#src += src/main.c

libs += -municode
libs += -luser32

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(obj)
	$(cc) -o $(out) $^ $(libs)

obj/%.o: src/%.c
	$(cc) -c $< -o $@

clean:
	rm -f obj/*
