all: obj bin/start

obj:
	mkdir -p obj

bin/start: obj/main.o
	$(CC) -o $@ $^

obj/main.o: src/main.c
	$(CC) -c -o $@ $^
