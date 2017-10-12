#!/bin/bash

mkdir -p "$HOME/.vim/syntax"
mkdir -p "$HOME/.vim/ftdetect"

ln -s "$HOME/master/nvim/ftdetect/val.vim" "$HOME/.vim/ftdetect/val.vim"
ln -s "$HOME/master/nvim/syntax/val.vim" "$HOME/.vim/syntax/val.vim"
