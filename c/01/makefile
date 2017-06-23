cc1 = gcc
cc2 = i686-w64-mingw32-gcc

out1 = bin/app
out2 = bin/app.exe

src += src/main.c
src += src/linux.c
src += src/win.c

cflags2 += -lws2_32

all: $(src)
	$(cc1) -o $(out1) $^
	$(cc2) -o $(out2) $^ $(cflags2)
	touch $(out2)

run:
	./$(out1)
