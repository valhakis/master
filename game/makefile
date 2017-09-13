CC = g++

src = $(shell find src -type f -name '*.cpp')

obj += $(patsubst src/%.cpp, obj/%.o, $(src))

libs += -I./include 
libs += -I/usr/include/freetype2 
libs += -I/usr/include/libpng16 
libs += -I/usr/include/harfbuzz 
libs += -I/usr/include/glib-2.0 
libs += -I/usr/lib/glib-2.0/include 
libs += -I/usr/include/SDL2 

libs += -D_REENTRANT 
libs += -lfreetype
libs += -lGL 
libs += -lGLEW 
libs += -lglfw 
libs += -lglut 
libs += -lGLU 
libs += -ldl
libs += -lSDL2

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
