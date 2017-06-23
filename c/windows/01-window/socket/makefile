out = ../bin/socket.exe
cc = i686-w64-mingw32-gcc

src += src/main.c

libs += -lws2_32

all: $(src)
	$(cc) -o $(out) $^ $(libs)
