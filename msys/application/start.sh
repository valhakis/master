#!/bin/bash

make

gcc -c -o obj/main.o src/main.c

gcc -o ./bin/app obj/main.o

./bin/app
