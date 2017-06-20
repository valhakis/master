cc = gcc

include_dir = ~/.include
lib_dir = ~/.lib

src += src/glad.c
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(obj)
	cp include/* $(include_dir) -rf
	ar rcs $(lib_dir)/libglad.a $^

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@
