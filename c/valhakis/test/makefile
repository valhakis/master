cc = gcc
out = bin/app

libs += -lvalhakis

src += src/main.c

all: $(src)
	$(cc) -o $(out) $^ $(libs)

run:
	./$(out)
