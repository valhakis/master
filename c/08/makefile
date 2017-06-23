all:
	$(MAKE) -C client
	$(MAKE) -C server
	$(MAKE) -C xwin
	$(MAKE) -C test

run:
	terminator -e "./bin/xwin && echo -n \"PRESS ANY KEY TO CONTINUE\"; read answer;"
	# terminator -e "./bin/test && echo -n \"PRESS ANY KEY TO CONTINUE\"; read answer;"
	# terminator -e "./bin/server && echo -n \"PRESS ANY KEY TO CONTINUE\"; read answer;"
	# terminator -e "./bin/client && echo -n \"PRESS ANY KEY TO CONTINUE\"; read answer;"
