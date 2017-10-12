CC = i686-w64-mingw32-gcc
out = bin/app.exe
obj += obj/main.o
directories = bin obj
package = 02.tar.gz

all: directories $(out)

package: $(package)

directories: $(directories)

bin:
	mkdir -p bin

obj:
	mkdir -p obj

$(out): $(obj)
	$(CC) $^ -o $@ -municode

obj/main.o: src/main.c
	$(CC) -c $^ -o $@ -municode

clean: 
	rm -f $(out) $(obj) 02.tar.gz
	rm -rf $(directories)

$(package): src/main.c makefile start.sh
	tar -czvf $@ $^
