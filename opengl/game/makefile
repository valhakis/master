CC = g++
src = $(shell find src -type f -name '*.cc')
obj += $(patsubst src/%.cc, obj/%.o, $(src))
dirs += bin obj lib
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

all: $(dirs) bin/app

lib:
	mkdir -p $@

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
