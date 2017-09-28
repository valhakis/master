#!/bin/bash
clear

# i686-w64-mingw32-gcc -o bin/world other/world/main.c -I ./inc

# ./bin/world

make build

make app

make world

make clean
