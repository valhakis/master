CC = gcc

objects += objects/main.o

all: ../bin/app

objects: 
	mkdir objects

../bin/app: $(objects)
	$(CC) -o $@ $^

objects/main.o: main.c
	$(CC) -c $^ -o $@
