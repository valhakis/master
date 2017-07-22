#!/bin/bash

if [[ $# -eq 0 ]] ; then
	make
	exit 0
fi

case "$1" in
	package) make package ;;
	clean) make clean ;;
	*) echo 'no command' ;;
esac
