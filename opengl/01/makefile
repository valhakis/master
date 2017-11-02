cc = g++
src = $(shell find src -type f -name '*.cc')
src += ext/glad/src/glad.cc
obj += $(patsubst src/%.cc, obj/%.o, $(src))
dirs += bin obj lib
dirs += $(patsubst src/%, obj/%, $(shell find src -type d))

libs += -I ./inc
libs += -I ./ext/glad/include

libs += -lGL
libs += -lglfw
libs += -ldl

all: $(dirs) bin/app

bin/app: $(obj)
	$(cc) -o $@ $^ $(libs)
obj/%.o: src/%.cc
	$(cc) -c $< -o $@ $(libs)
obj/%: src/%
	mkdir -p $@

clean:
	rm -rf obj bin/app

lib:
	mkdir -p $@
bin:
	mkdir -p $@
obj:
	mkdir -p $@
