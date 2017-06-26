cc = gcc
out = bin/app

src := $(wildcard src/*.c)
obj := $(patsubst src/%.c, obj/%.o, $(src))

# cflags += -I/usr/include/gtk-3.0 
# cflags += -I/usr/include/at-spi2-atk/2.0 
# cflags += -I/usr/include/at-spi-2.0 
# cflags += -I/usr/include/dbus-1.0 
# cflags += -I/usr/lib/dbus-1.0/include 
# cflags += -I/usr/include/gtk-3.0 
# cflags += -I/usr/include/gio-unix-2.0/ 
# cflags += -I/usr/include/cairo 
# cflags += -I/usr/include/pango-1.0 
# cflags += -I/usr/include/atk-1.0 
# cflags += -I/usr/include/cairo 
# cflags += -I/usr/include/pixman-1 
# cflags += -I/usr/include/freetype2 
# cflags += -I/usr/include/libpng16 
# cflags += -I/usr/include/harfbuzz 
# cflags += -I/usr/include/glib-2.0 
# cflags += -I/usr/lib/glib-2.0/include 
# cflags += -I/usr/include/freetype2 
# cflags += -I/usr/include/harfbuzz 
# cflags += -I/usr/include/libdrm 
# cflags += -I/usr/include/libpng16 
# cflags += -I/usr/include/gdk-pixbuf-2.0 
# cflags += -I/usr/include/libpng16 
# cflags += -I/usr/include/glib-2.0 
# cflags += -I/usr/lib/glib-2.0/include 

# libs += -pthread 
# libs += -lGL
# libs += -lGLU
# libs += -lGLEW
# libs += -lX11
# libs += -lvalhakis
# libs += -lglfw
# libs += -lglad
# libs += -ldl
# libs += -lgtk-3 
# libs += -lgdk-3 
# libs += -lpangocairo-1.0 
# libs += -lpango-1.0 
# libs += -latk-1.0 
# libs += -lcairo-gobject 
# libs += -lcairo 
# libs += -lgdk_pixbuf-2.0 
# libs += -lgio-2.0 
# libs += -lgobject-2.0 
# libs += -lglib-2.0

all: app
	
app: $(obj)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.c
	$(cc) $(cflags) -c $< -o $@

run:
	./$(out)

clean:
	rm -f $(obj)

