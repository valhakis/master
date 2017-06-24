cc = gcc

include_dir = ~/include
lib_dir = ~/lib

src += src/glad.c
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: make $(obj) test_glad

test_glad:
	$(MAKE) -C test

make:
	cp include/* $(include_dir) -rf
	ar rcs $(lib_dir)/libglad.a $(obj)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f $(obj)

run:
	bin/test
