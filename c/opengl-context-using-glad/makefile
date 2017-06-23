OUT_PATH = bin/app

SRC += src/main.c
SRC += GL/src/glad.c

LIBS += -IGL/include/
LIBS += -I/usr/include/SDL2

CFLAGS += -D_REENTRANT
CFLAGS += -ldl
CFLAGS += -lSDL2

all: $(SRC)
	$(CC) $(LIBS) $(CFLAGS) -o $(OUT_PATH) $^

run:
	./$(OUT_PATH)
