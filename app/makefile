CC = gcc

OUT_FILE = bin/app

SRC += src/main.c
SRC += src/common.c
SRC += src/template.c

all: $(SRC)
	$(CC) -o $(OUT_FILE) $^

run:
	./$(OUT_FILE) c generate default .
