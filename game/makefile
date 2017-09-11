CC = g++

src = $(shell find src -type f -name '*.cpp')

obj += $(patsubst src/%.cpp, obj/%.o, $(src))

libs += -I./include -lGL -lGLEW -lglfw -lglut -lGLU -ldl

libs += -D_REENTRANT -I/usr/include/SDL2 -lSDL2

dirs += bin obj
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

all: $(dirs) bin/game

example: 
	echo "obj: " $(obj)

bin:
	mkdir -p $@

obj:
	mkdir -p $@

bin/game: $(obj)
	$(CC) -o $@ $^ $(libs)

obj/%.o: src/%.cpp
	$(CC) -c $< -o $@ $(libs)

obj/%: src/%
	mkdir -p $@

clean:
	rm -rf obj bin/game
