all: ~/man ~/man/man8 ~/man/man8/example.8

~/man: 
	mkdir -p $@

~/man/man8:
	mkdir -p $@

~/man/man8/example.8: example.8
	cp $^ $@
	gzip -f $@
