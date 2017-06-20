cc = gcc
out = bin/app

src += src/sample.c
src += src/valhakis.c

all:
	$(cc) -c src/sample.c -o obj/sample.o $(libs)
	$(cc) -c src/valhakis.c -o obj/valhakis.o $(libs)
	ar rcs ~/.lib/libvalhakis.a obj/sample.o obj/valhakis.o
	cp src/inc/* ~/.include -rf

