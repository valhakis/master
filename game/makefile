# REQUIRED [src/*, include/*, data/{some items}, start.sh, makefile]

CC = g++

src += $(wildcard src/*.cpp)
src += $(wildcard src/*.c)

obj += $(patsubst src/%.cpp, obj/%.o, $(src))
obj += $(patsubst src/%.c, obj/%.o, $(src))

libs += -I./include -lGL -lGLEW -lglfw -lglut -lGLU -ldl

libs += -D_REENTRANT -I/usr/include/SDL2 -lSDL2

all: bin obj bin/game

example: 
	echo "obj: " $(obj)
	echo "src: " $(src)

bin:
	mkdir -p $@

obj:
	mkdir -p $@

bin/game: $(obj)
	$(CC) -o $@ $^ $(libs)

obj/%.o: src/%.cpp
	$(CC) -c $< -o $@ $(libs)

clean:
	rm -f $(obj) bin/game
