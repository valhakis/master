cc = g++

src = $(shell find src -type f -name '*.cc')
src += glad/src/glad.cc
obj += $(patsubst src/%.cc, obj/%.o, $(src))
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

dirs += bin obj lib

libs += -I./glad/include
libs += -I./src/inc

ifeq ($(OS),Windows_NT)
	cc = i686-w64-mingw32-g++.exe
	libs += -lopengl32 
	libs += -lglfw3
else
	libs += -lGL
	libs += -lglfw
endif
libs += -ldl

all: $(dirs) app

bin: 
	mkdir -p $@

obj:
	mkdir -p $@

lib: 
	mkdir -p $@

app: $(obj)
	$(cc) -o $@ $^ $(libs)

obj/%.o: src/%.cc
	$(cc) -c $< -o $@ $(libs)

obj/%: src/%
	mkdir -p $@

clean:
	rm -rf obj app
