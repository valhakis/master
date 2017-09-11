#!/bin/bash


case "$1" in 
	clean)

		make clean

		;;

	*)

		if make example ; then
		  echo "done"
		  # make example
			# game 01
			# game 02
			# game 03
			# game 04
			# game new
			# game 
			# game $@
			# game simple
			# game example1
			# game ABGR
			# game help
			# game glut bitmap
			# game mysql
		fi

		;;

	esac # end switch *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
