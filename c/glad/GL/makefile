cc = gcc

include_dir = ~/include
lib_dir = ~/lib

src += src/glad.c
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: 
	cp include/* $(include_dir) -rf
	$(MAKE) build

build: $(obj)
	ar rcs $(lib_dir)/libglad.a $^

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@
