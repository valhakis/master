#!/bin/bash

mkdir -p $HOME/.vim/{backup,swp}

curl -fLo $HOME/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
