CC = i686-w64-mingw32-gcc
out = bin/app.exe
obj += obj/main.o
directories = bin obj
package = source.tar.gz

all: directories $(out)

package: $(package)

directories: $(directories)

bin:
	mkdir -p bin

obj:
	mkdir -p obj

$(out): $(obj)
	$(CC) $^ -o $@ -municode -lole32 -loleaut32 -lgdi32

obj/main.o: src/main.c
	$(CC) -c $^ -o $@ -municode -lole32 -loleaut32 -lgdi32

clean: 
	rm -f $(out) $(obj) $(package)
	rm -rf $(directories)

$(package): src/main.c makefile start.sh
	tar -czvf $@ $^
