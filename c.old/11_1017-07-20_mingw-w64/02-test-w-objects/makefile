cc = i686-w64-mingw32-gcc 

objects += 01_hello-world.o
objects += 02_wide-characters.o
objects += 03_message-box.o
objects += 04_screen-size.o
objects += 05_simple-window.o
objects += 06_centering-window.o
objects += 07_glfw-window.o
objects += 08_glut-window.o
objects += 09_static-text.o

all: $(objects)

01_hello-world.o: 01_hello-world.c
	$(cc) -c -o $@ $^
	$(cc) 01_hello-world.o -o 01_hello-world.exe 

02_wide-characters.o: 02_wide-characters.c
	$(cc) -c -o $@ $^
	$(cc) 02_wide-characters.o -o 02_wide-characters.exe -municode

03_message-box.o: 03_message-box.c
	$(cc) -c -o $@ $^
	$(cc) 03_message-box.o -o 03_message-box.exe -municode

04_screen-size.o: 04_screen-size.c
	$(cc) -c -o $@ $^
	$(cc) 04_screen-size.o -o 04_screen-size.exe -municode

05_simple-window.o: 05_simple-window.c
	$(cc) -c -o $@ $^
	$(cc) 05_simple-window.o -o 05_simple-window.exe -municode

06_centering-window.o: 06_centering-window.c
	$(cc) -c -o $@ $^
	$(cc) 06_centering-window.o -o 06_centering-window.exe -municode

07_glfw-window.o: 07_glfw-window.c
	$(cc) -c -o $@ $^
	$(cc) 07_glfw-window.o -o 07_glfw-window.exe -mwindows -lopengl32 -lglfw3

08_glut-window.o: 08_glut-window.c
	$(cc) -c -o $@ $^
	$(cc) 08_glut-window.o -o 08_glut-window.exe -lopengl32 -lfreeglut

09_static-text.o: 09_static-text.c
	$(cc) -c -o $@ $^
	$(cc) 09_static-text.o -o 09_static-text.exe -municode

clean:
	rm -f $(objects);
