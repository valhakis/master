all: window.cpp main.cpp master.cpp
	g++ $^ -o bin/app -lGL -lGLEW -lglfw `pkg-config --libs --cflags gtk+-3.0`

run:
	./bin/app
