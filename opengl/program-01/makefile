# $ g++ -o bin/app src/main.cc
#
# or

CC = g++

src = $(shell find src -type f -name '*.cc')
obj += $(patsubst src/%.cpp, obj/%.o, $(src))
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

dirs += bin

libs += -lGL
libs += -lglfw

all: $(dirs) bin/app

bin: 
	mkdir -p $@

obj:
	mkdir -p $@

bin/app: $(obj)
	$(CC) -o $@ $^ $(libs)

obj/%.o: src/%.cpp
	$(CC) -c $< -o $@ $(libs)

obj/%: src/%
	mkdir -p $@

clean:
	rm -r obj 
