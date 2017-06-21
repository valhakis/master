cc = gcc
out = bin/app

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

libs += -lGL
libs += -lGLU
libs += -lGLEW
libs += -lX11
libs += -lvalhakis
libs += -lglfw
libs += -lglad
libs += -ldl

all: build app

build:
	mkdir -p bin && mkdir -p obj

app: $(obj)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

run:
	./$(out)

clean:
	rm -f obj/*.o

