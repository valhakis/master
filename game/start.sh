#!/bin/bash


case "$1" in 
	clean)

		make clean

		;;

	*)

		if make ; then
			# game 
			# game $@
			# game simple
			game example1
			# game ABGR
			# game help
			# game glut bitmap
			# game mysql
		fi

		;;

	esac # end switch *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
