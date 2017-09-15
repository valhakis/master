#!/bin/bash


case "$1" in 
	clean)

		make clean

		;;

	*)

		if make ; then
		  # make example
			# game 01
			# game 02
			# game 03
			# game 04
			# game new 05
			# game new 07
			# game new 08
			# game new 06
			# game red 1
			# game red 2
			# game red 3
			game
			# game new
			# game new 1
			# game new 02
			# game new 03
			# game new 04
			# game c_tut
			# game c_tut 1
			# game c_tut 02
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
