<<<<<<< HEAD:c/window.bak2/winapi/client/makefile
cc = gcc
out = ../bin/client

cflags = 
ldflags = 

libs = 

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(src)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*

run:
	../bin/client 06-win-opengl.exe
=======
cc = gcc
out = ../bin/client

cflags = 
ldflags = 

libs = 

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

all: $(src)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

clean:
	rm -f obj/*

>>>>>>> 0a226ad51efab709df186810e70ba07e1bbab598:c/windows/winapi/client/makefile
