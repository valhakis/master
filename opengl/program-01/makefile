# $ g++ -o bin/app src/main.cc
#
# or

CC = g++

src = $(shell find src -type f -name '*.cc')
obj += $(patsubst src/%.cc, obj/%.o, $(src))
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

dirs += bin

ifeq ($(OS),Windows_NT)
	cc = i686-w64-mingw32-g++.exe
	libs += -lopengl32 
	libs += -lglfw3
else
	libs += -lGL
	libs += -lglfw
endif

all: $(dirs) bin/app

bin: 
	mkdir -p $@

obj:
	mkdir -p $@

bin/app: $(obj)
	$(CC) -o $@ $^ $(libs)

obj/%.o: src/%.cc
	$(CC) -c $< -o $@ $(libs)

obj/%: src/%
	mkdir -p $@

clean:
	rm -rf obj bin/app
