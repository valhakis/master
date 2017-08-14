CC = gcc

CFLAGS += -IC:/msys64/mingw32/include/freetype2 
CFLAGS += -I./include -mwindows -municode -lopengl32 -lglfw3
CFLAGS += -lfreetype

# -mms-bitfields 
# -IC:/msys64/mingw32/include 
# -IC:/msys64/mingw32/include/libpng16 
# -IC:/msys64/mingw32/include/harfbuzz 
# -IC:/msys64/mingw32/include/glib-2.0 
# -IC:/msys64/mingw32/lib/glib-2.0/include 
# -IC:/msys64/mingw32/include 
# -LC:/msys64/mingw32/lib 

app: main.o glad.o monster.o share.o work.o main-menu.o shader.o stb_image.o
	$(CC) -o app $^ $(CFLAGS)

stb_image.o: stb_image.c
	$(CC) -c $^ $(CFLAGS)

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

shader.o: shader.c
	$(CC) -c $^ $(CFLAGS)

main-menu.o: main-menu.c
	$(CC) -c $^ $(CFLAGS)

clean:
	rm -f main.o glad.o monster.o share.o work.o main-menu.o shader.o
