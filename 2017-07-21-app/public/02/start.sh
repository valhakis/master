#!/bin/bash

if [[ $# -eq 0 ]] ; then
	make
	exit 0
fi

case "$1" in
	package) make package ;;
	*) echo 'no command' ;;
esac
