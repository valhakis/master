# $ g++ -o bin/app src/main.cc
#
# or

cc = g++

src = $(shell find src -type f -name '*.cc')
src += glad/src/glad.cc
obj += $(patsubst src/%.cc, obj/%.o, $(src))
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

dirs += bin
dirs += obj
dirs += lib

libs += -L lib
libs += -I glad/include

# libs += -lGL
# libs += -lglfw
# libs += -lglad
# libs += -ldl

ifeq ($(OS),Windows_NT)
	cc = i686-w64-mingw32-g++.exe
	libs += -lopengl32 
	libs += -lglfw3
else
	libs += -lGL
	libs += -lglfw
endif
libs += -ldl

all: $(dirs) bin/app

bin: 
	mkdir -p $@

obj:
	mkdir -p $@

lib: 
	mkdir -p $@

lib/libglad.a: glad/src/glad.cc
	$(cc) -c $^ -o glad.o -I glad/include -ldl
	ar rvs $@ glad.o

bin/app: $(obj)
	$(cc) -o $@ $^ $(libs)

obj/%.o: src/%.cc
	$(cc) -c $< -o $@ $(libs)

obj/%: src/%
	mkdir -p $@

clean:
	rm -rf obj bin/app
