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
