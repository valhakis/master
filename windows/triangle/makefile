all: bin/app

CFLAGS += -I ./include
CFLAGS += -L ./lib/lib-mingw
LIBS += -lglfw3
LIBS += -lgdi32
LIBS += -lopengl32


bin/app: src/main.cc
	g++ $(CFLAGS) -o $@ $^ $(LIBS)
