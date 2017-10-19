CC = g++

LIBS += -lGL
LIBS += -lglfw

all: app

app: main.o
	$(CC) -o $@ $^ $(LIBS)

clean:
	rm -f *.o app
