CC = g++ 

# IF WINDOWS
ifeq ($(OS),Windows_NT)
	LIBS += -lopengl32
	LIBS += -I/mingw32/include 
	LIBS += -L/mingw32/lib 
	LIBS += -lglfw3 
	LIBS += -lgdi32

# IF NOT WINDOWS
else
	LIBS += -lGL
	LIBS += -lglfw
endif

all: app

app: main.cc
	$(CC) -o $@ $^ $(LIBS)

clean:
	rm -f *.o app
