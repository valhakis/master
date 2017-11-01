#!/bin/bash

pkg=""

function add {
  pkg+="$1 "
}

add 'gcc'
add 'vim'
add 'make'
add 'tmux'
add 'mingw-w64-i686-glfw'

pacman -S $pkg --needed
