OUT_FILE = bin/app

CC = gcc

SRC += src/main.c
SRC += src/share.c

all: $(SRC)
	$(CC) -o $(OUT_FILE) $^

run:
	./$(OUT_FILE)
