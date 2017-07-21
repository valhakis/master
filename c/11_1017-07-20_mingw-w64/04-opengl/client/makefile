CC = gcc

all: ../bin/client

../bin/client: main.o world.o world.h
	$(CC) -o $@ $^ 

main.o: main.c
	$(CC) -c $^ -o main.o 

clean:
	rm -f ./*.o ../bin/client
