CC = i686-w64-mingw32-gcc

OBJECTS += main.o

all: ../../bin ../../bin/example.exe

../../bin: 
	mkdir -p $@
	
../../bin/example.exe: $(OBJECTS)
	$(CC) -o $@ $^
