cc = i686-w64-mingw32-gcc

cflags += -I inc/

src += src/main.c
odir = obj

build:
	$(cc) -c -o obj/main.o src/main.c

app:
	$(cc) -o bin/app obj/main.o $(cflags)

world_obj = other/world/main.o

world: $(world_obj)
	$(cc) -o bin/world $< $(cflags)

other/world/%.o: other/world/%.c
	$(cc) -c -o $@ $^ $(cflags)

clean:
	rm -f bin/app bin/world $(world_obj)
