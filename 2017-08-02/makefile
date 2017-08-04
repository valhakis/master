CC = gcc
CFLAGS = -I./include -mwindows -municode -lopengl32 -lglfw3

app: main.o glad.o monster.o share.o work.o
	$(CC) -o app $^ $(CFLAGS)

main.o: main.c
	$(CC) -c $^ $(CFLAGS)

work.o: work.c
	$(CC) -c $^ $(CFLAGS)

monster.o: monster.c
	$(CC) -c $^ $(CFLAGS)

glad.o: glad.c
	$(CC) -c $^ $(CFLAGS)

share.o: share.c
	$(CC) -c $^ $(CFLAGS)

clean:
	rm -f main.o glad.o monster.o share.o
