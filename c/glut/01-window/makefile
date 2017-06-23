cc = gcc

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

libs += -lGL
libs += -lGLU
libs += -lGLEW
libs += -lX11
libs += -lglut
libs += -lvalhakis

mkfile_path := $(abspath $(lastword $(MAKEFILE_LIST)))
current_dir := $(notdir $(patsubst %/,%,$(dir $(mkfile_path))))

# out = ../bin/01-window
out = ../bin/$(current_dir)

all: $(obj)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

run:
	./$(out)

clean:
	rm -f obj/*.o
