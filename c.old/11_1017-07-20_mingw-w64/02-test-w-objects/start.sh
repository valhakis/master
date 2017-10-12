#!/bin/bash

if [[ $# -eq 0 ]]; then
  echo 'No arguments given, execute: make'
  make
else
  case "$1" in
    make) make ;;
    build) make ;;
    clean) make clean ;;
    *) echo 'no such argument' ;;
  esac
fi


# TODO 1 
# make hello world program

# i686-w64-mingw32-gcc 01_hello-world.c -o 01_hello-world.exe

# TODO 2
# wide characters from input / unicode

# i686-w64-mingw32-gcc 02_wide-characters.c -o 02_wide-characters.exe -mwindows -municode

# TODO 3
# message box

# i686-w64-mingw32-gcc 03_message-box.c -o 03_message-box.exe -mwindows -municode

# TODO 4
# screen size

# i686-w64-mingw32-gcc 04_screen-size.c -o 04_screen-size.exe -mwindows -municode

# TODO 5
# simple window

# i686-w64-mingw32-gcc 05_simple-window.c -o 05_simple-window.exe -mwindows -municode

# TODO 6
# centering window

# i686-w64-mingw32-gcc 06_centering-window.c -o 06_centering-window.exe -mwindows -municode

# TODO 7
# glfw window

# i686-w64-mingw32-gcc 07_glfw-window.c -o 07_glfw-window.exe -mwindows -lopengl32 -lglfw3

# TODO 8
# glut window

# i686-w64-mingw32-gcc 08_glut-window.c -o 08_glut-window.exe -mwindows -lopengl32 -lfreeglut

# TODO 9
# static text

# i686-w64-mingw32-gcc 09_static-text.c -o 09_static-text.exe -mwindows -municode
