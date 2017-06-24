cc = g++
out = bin/app

src := $(wildcard src/*.cpp)
obj := $(patsubst src/%.cpp, obj/%.o, $(src))

libs += -lGL
libs += -lGLU
libs += -lGLEW
libs += -lX11
libs += -lvalhakis
libs += -lglfw
libs += -lglad
libs += -ldl

all: app
	
app: $(obj)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.cpp
	$(cc) $(cflags) -c $< -o $@

run:
	./$(out)

clean:
	rm -f $(obj)

