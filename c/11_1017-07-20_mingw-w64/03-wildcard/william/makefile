cc = i686-w64-mingw32-gcc
cflags += -Wall
lflags += -Wall

objects += main.o

all: william.exe

william.exe: $(objects)
	$(cc) $(lflags) $^ -o $@ 

main.o: main.c
	$(cc) -c $^ -o $@

clean:
	rm -f william.exe $(objects)
