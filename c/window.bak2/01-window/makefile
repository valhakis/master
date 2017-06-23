<<<<<<< HEAD:c/window.bak2/01-window/makefile
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
=======
cc = i686-w64-mingw32-gcc
out = bin/app.exe

src += src/main.c

libs += -lopengl32
libs += -lglu32
libs += -lgdi32
libs += -lglew32
libs += -lglfw3
libs += -mwindows

all: $(src)
	$(cc) -o $(out) $^ $(libs)

# $(MAKE) -C socket
# $(MAKE) -C client

build: all
	$(MAKE) -C socket 
	$(MAKE) -C client 

run:
	./bin/client

#./$(out) run
>>>>>>> 0a226ad51efab709df186810e70ba07e1bbab598:c/windows/01-window/makefile
