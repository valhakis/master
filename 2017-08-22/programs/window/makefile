CC = gcc
LIBS += -lGL -lglfw

all: ../../bin/window

../../bin/window: main.o
	$(CC) -o $@ $^ $(LIBS)
