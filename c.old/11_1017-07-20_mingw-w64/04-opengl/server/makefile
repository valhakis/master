CC = gcc

all: ../bin/server

../bin/server: main.o world.o world.h
	$(CC) -o $@ $^

clean:
	rm -f ./*.o ../bin/server
