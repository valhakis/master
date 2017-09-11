CC = gcc

LIBS += -lX11

all: obj bin/background

obj: 
	mkdir -p $@

bin/background: obj/main.o
	$(CC) -o $@ $^ $(LIBS)

obj/main.o: src/main.c
	$(CC) -c -o $@ $^ $(LIBS)
