cc = g++

# IF WINDOWS
ifeq ($(OS),Windows_NT)
	cc = i686-w64-mingw32-g++.exe
	libs += -lopengl32 
	libs += -lglfw3
	libs += -lglew32
else
	libs += -I /usr/include/libdrm 
	libs += -lGLU 
	libs += -lGL 
	libs += -lGLEW 
	libs += -lglfw 
	libs += -lX11 
	libs += -lpthread 
	libs += -lXrandr 
	libs += -lXi
endif

all: main.c
	$(cc) $^ -o bin/app $(libs)

run:
	./bin/app

clean:
	rm -f *.o ./bin/app
