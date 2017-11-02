cc = g++

libs += -I include
libs += -pthread 
libs += -I/usr/include/gtk-3.0 
libs += -I/usr/include/at-spi2-atk/2.0 
libs += -I/usr/include/at-spi-2.0 
libs += -I/usr/include/dbus-1.0 
libs += -I/usr/lib/dbus-1.0/include 
libs += -I/usr/include/gtk-3.0 
libs += -I/usr/include/gio-unix-2.0/ 
libs += -I/usr/include/cairo 
libs += -I/usr/include/pango-1.0 
libs += -I/usr/include/atk-1.0 
libs += -I/usr/include/cairo 
libs += -I/usr/include/pixman-1 
libs += -I/usr/include/freetype2 
libs += -I/usr/include/libpng16 
libs += -I/usr/include/harfbuzz 
libs += -I/usr/include/glib-2.0 
libs += -I/usr/lib/glib-2.0/include 
libs += -I/usr/include/freetype2 
libs += -I/usr/include/harfbuzz 
libs += -I/usr/include/libpng16 
libs += -I/usr/include/gdk-pixbuf-2.0 
libs += -I/usr/include/glib-2.0 
libs += -I/usr/lib/glib-2.0/include 
libs += -lgtk-3 
libs += -lgdk-3 
libs += -lpangocairo-1.0 
libs += -lpango-1.0 
libs += -latk-1.0 
libs += -lcairo-gobject 
libs += -lcairo 
libs += -lgdk_pixbuf-2.0 
libs += -lgio-2.0 
libs += -lgobject-2.0 
libs += -lglib-2.0

all: demo

demo: main.o share.o
	$(cc) -o $@ $^ $(libs)

main.o: main.cc
	$(cc) -c -o $@ $^ $(libs)

share.o: share.cc
	$(cc) -c -o $@ $^ $(libs)

clean: 
	rm -f *.o demo
