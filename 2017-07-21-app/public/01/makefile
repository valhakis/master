CC = i686-w64-mingw32-gcc
out = bin/app.exe
obj += obj/main.o
directories = bin obj

all: directories $(out) 01.tar.gz

directories: $(directories)

bin:
	mkdir -p bin

obj:
	mkdir -p obj

$(out): $(obj)
	$(CC) $^ -o $@

obj/main.o: src/main.c
	$(CC) -c $^ -o $@

clean: 
	rm -f $(out) $(obj) 01.tar.gz
	rm -rf $(directories)

01.tar.gz: src/main.c makefile start.sh
	tar -czvf $@ $^
