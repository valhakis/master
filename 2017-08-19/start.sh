#!/bin/bash

function makenrun() {
	if (cd ball ; make) ; then
		./bin/ball
	fi
}

case "$1" in
	clean) (cd ball ; make clean) ;;
	*) makenrun ;;
esac

