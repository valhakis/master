cc = i686-w64-mingw32-gcc
out = bin/app.exe

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

libs += -lopengl32
libs += -lglu32
libs += -lgdi32
libs += -lglew32
libs += -lglfw3
libs += -mwindows

all: $(obj)
	$(cc) -o $(out) $^ $(libs)
	$(MAKE) -C socket
	$(MAKE) -C client

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

build: all
	$(MAKE) -C socket 
	$(MAKE) -C client 

run:
	./bin/client

#./$(out) run
