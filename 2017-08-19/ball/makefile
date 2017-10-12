CC = gcc

OBJECTS = main.o

all: ../bin/ball

../bin/ball: $(OBJECTS)
	$(CC) -o $@ $^

clean:
	rm -f ../bin/ball $(OBJECTS)
