CC = g++
out = bin/today

src = $(shell find src -type f -name '*.cpp')
obj += $(patsubst src/%.cpp, obj/%.o, $(src))

dirs += bin obj
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

libs += -I./inc

all: $(dirs) $(out)

$(out): $(obj)
	$(CC) -o $@ $^ $(libs)

obj/%.o: src/%.cpp
	$(CC) -c $< -o $@ $(libs)

obj/%: src/%
	mkdir -p $@

bin: 
	mkdir -p bin

obj: 
	mkdir -p obj

clean:
	rm -rf obj
