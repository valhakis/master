CC = i686-w64-mingw32-g++

CFLAGS = -I./inc -mwindows -municode
LIBS = 
LDFLAGS =

src = $(wildcard src/*.cpp)
obj = $(patsubst src/%.cpp, obj/%.o, $(src))

all: obj bin bin/app.exe

obj: 
	mkdir -p $@

bin:
	mkdir -p $@

bin/app.exe: $(obj)
	$(CC) $^ $(LDFLAGS) $(CFLAGS) $(LIBS) -o $@

obj/%.o: src/%.cpp
	$(CC) -c $< $(CFLAGS) -o $@
