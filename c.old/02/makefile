cc = gcc
out = bin/app

src += src/main.c
src += src/share.c
src += src/run.c
src += src/window.c

lib += -lGL
lib += -lglfw
lib += -lm
lib += -lpthread

all: $(src)
	$(cc) -o $(out) $^ $(lib)

run:
	./$(out)
