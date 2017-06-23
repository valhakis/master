cc = g++

libs = -D_GNU_SOURCE -D_DEFAULT_SOURCE -lncursesw

all: src/*.cpp
	$(cc) -o ~/.bin/notes $^ $(libs)

run: 
	~/.bin/notes
