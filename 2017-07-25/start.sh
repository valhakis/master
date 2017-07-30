#!/bin/bash

start_webkit() {
	nw webkit
}

start_make_and_run() {
	if make ; then
		./bin/app.exe
	fi
}

start_main() {
	start_webkit
}

if [[ $# -eq 0 ]] ; then
	start_main
	exit 0
fi

case "$1" in
	make) start_make_and_run ;;
	webkit) start_webkit ;;
esac

