# REQUIRED [src/*, include/*, data/{some items}, start.sh, makefile]

CC = g++

src += $(wildcard src/*.cpp)
src += $(wildcard src/*.c)

obj += $(patsubst src/%.cpp, obj/%.o, $(src))
obj += $(patsubst src/%.c, obj/%.o, $(src))

LIBS += -I./include -lGL -lGLEW -lglfw -lglut -lGLU -ldl

LIBS += -D_REENTRANT -I/usr/include/SDL2 -lSDL2

all: bin obj bin/game

bin:
	mkdir -p $@

obj:
	mkdir -p $@

bin/game: $(OBJECTS) $(INCLUDES)
	$(CC) -o $@ $(OBJECTS) $(LIBS)

obj/%.o: src/%.cpp
	$(CC) -c $< -o $@ $(LIBS)

clean:
	rm -f $(obj) $(OBJECTS) bin/game
