CC = g++

src = $(shell find src -type f -name '*.cpp')

obj += $(patsubst src/%.cpp, obj/%.o, $(src))

libs += -I./include 
libs += -L./lib
libs += -I./glad/include
libs += -I/usr/include/freetype2 
libs += -I/usr/include/libpng16 
libs += -I/usr/include/harfbuzz 
libs += -I/usr/include/glib-2.0 
libs += -I/usr/lib/glib-2.0/include 
libs += -I/usr/include/SDL2 

libs += -ldl
libs += -lglad
libs += -lX11
libs += -lstb
libs += -D_REENTRANT 
libs += -lfreetype
libs += -lGL 
libs += -lGLEW 
libs += -lglfw 
libs += -lglut 
libs += -lGLU 
libs += -lSDL2

dirs += bin obj lib
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

all: $(dirs) lib/libstb.a lib/libglad.a bin/game

lib:
	mkdir -p $@

lib/libglad.a: glad.o 
	ar rvs lib/libglad.a $^

glad.o: glad/src/glad.cpp
	$(CC) -I./glad/include -c $^ -o $@

lib/libstb.a: stb.o
	ar rvs $@ $^

stb.o: stb/stb.cpp
	$(CC) -I./stb -c $^ -o $@

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
