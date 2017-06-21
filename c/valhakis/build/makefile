cc = gcc
out = bin/app

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(obj)
	ar rcs ~/.lib/libvalhakis.a $(obj)
	cp src/inc/* ~/.include -rf

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

