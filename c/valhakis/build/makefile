cc = gcc
out = bin/app

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all:
	cp src/inc/* $(HOME)/include -rf
	$(MAKE) build

build: $(obj)
	ar rcs $(HOME)/lib/libvalhakis.a $(obj)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f $(obj)
