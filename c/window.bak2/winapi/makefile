all:
	$(MAKE) -C client
	$(MAKE) -C server
	$(MAKE) -C 01-classic-console
	$(MAKE) -C 02-win-console
	$(MAKE) -C 03-win-main
	$(MAKE) -C 04-win-strings
	$(MAKE) -C 05-window
	$(MAKE) -C 06-win-opengl 
	$(MAKE) -C 07-random-01

clean:
	$(MAKE) -C client clean
	$(MAKE) -C server clean
	$(MAKE) -C 01-classic-console clean
	$(MAKE) -C 02-win-console clean
	$(MAKE) -C 03-win-main clean
	$(MAKE) -C 04-win-strings clean
	$(MAKE) -C 05-window clean
	$(MAKE) -C 06-win-opengl clean
	$(MAKE) -C 07-random-01 clean

run:
	./bin/client 07-random-01.exe
