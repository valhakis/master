all: src/*.cpp
	gcc -o bin/app $^ `pkg-config --cflags --libs gtk+-2.0`

run:
	./bin/app
