
CC = gcc
OUT_PATH = bin/app

SRC += src/main.c

all: $(SRC)
	$(CC) -o $(OUT_PATH) $^

run:
	./$(OUT_PATH)
