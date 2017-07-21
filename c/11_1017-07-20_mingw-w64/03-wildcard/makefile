cc = i686-w64-mingw32-gcc

binaries += 01_hello-world.exe
binaries += 02_wide-characters.exe
binaries += 03_message-box.exe
binaries += 04_screen-size.exe
binaries += 05_simple-window.exe
binaries += 06_centering-window.exe
binaries += 07_glfw-window.exe
binaries += 08_glut-window.exe
binaries += 09_static-text.exe

all: $(binaries) hello.exe thomas.exe
	$(MAKE) -C william
	$(MAKE) -C programs
	$(MAKE) -C program

thomas.exe:
	$(MAKE) -C thomas

# hello.exe

hello.o: hello.c hello.h 
	$(cc) -Wall -c hello.c

hello.exe: hello.o
	$(cc) -Wall hello.o -o hello.exe

# 01 hello world

01_hello-world.exe: 01_hello-world.o
	$(cc) 01_hello-world.o -o 01_hello-world.exe 

01_hello-world.o: 01_hello-world.c
	$(cc) -c -o $@ $^

# 02 wide characters

02_wide-characters.exe: 02_wide-characters.o
	$(cc) 02_wide-characters.o -o 02_wide-characters.exe -municode

02_wide-characters.o: 02_wide-characters.c
	$(cc) -c -o $@ $^

# 03 message box

03_message-box.exe: 03_message-box.o
	$(cc) 03_message-box.o -o 03_message-box.exe -municode

03_message-box.o: 03_message-box.c
	$(cc) -c -o $@ $^

# 04 screen size

04_screen-size.exe: 04_screen-size.o
	$(cc) 04_screen-size.o -o 04_screen-size.exe -municode

04_screen-size.o: 04_screen-size.c
	$(cc) -c -o $@ $^

# 05 simple window

05_simple-window.exe: 05_simple-window.o
	$(cc) 05_simple-window.o -o 05_simple-window.exe -municode

05_simple-window.o: 05_simple-window.c
	$(cc) -c -o $@ $^

# 06 centering window

06_centering-window.exe: 06_centering-window.o
	$(cc) 06_centering-window.o -o 06_centering-window.exe -municode

06_centering-window.o: 06_centering-window.c
	$(cc) -c -o $@ $^

# 07 glfw window

07_glfw-window.exe: 07_glfw-window.o
	$(cc) 07_glfw-window.o -o 07_glfw-window.exe -mwindows -lopengl32 -lglfw3

07_glfw-window.o: 07_glfw-window.c
	$(cc) -c -o $@ $^

# 08 glut window

08_glut-window.exe: 08_glut-window.o
	$(cc) 08_glut-window.o -o 08_glut-window.exe -lopengl32 -lfreeglut

08_glut-window.o: 08_glut-window.c
	$(cc) -c -o $@ $^

# 09 static text

09_static-text.exe: 09_static-text.o
	$(cc) 09_static-text.o -o 09_static-text.exe -municode

09_static-text.o: 09_static-text.c
	$(cc) -c -o $@ $^

clean:
	rm -f hello.o

	rm -f 01_hello-world.exe
	rm -f 02_wide-characters.exe
	rm -f 03_message-box.exe
	rm -f 04_screen-size.exe
	rm -f 05_simple-window.exe
	rm -f 06_centering-window.exe
	rm -f 07_glfw-window.exe
	rm -f 08_glut-window.exe
	rm -f 09_static-text.exe

	rm -f 01_hello-world.o
	rm -f 02_wide-characters.o
	rm -f 03_message-box.o
	rm -f 04_screen-size.o
	rm -f 05_simple-window.o
	rm -f 06_centering-window.o
	rm -f 07_glfw-window.o
	rm -f 08_glut-window.o
	rm -f 09_static-text.o

	$(MAKE) -C thomas clean
	$(MAKE) -C william clean
	$(MAKE) -C programs clean
	$(MAKE) -C program clean
