CC = g++

all: app

app: main.o
	$(CC) -o $@ $^ $(LIBS)

clean:
	rm -f *.o app
