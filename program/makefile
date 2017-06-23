cc = gcc

JSON_C_DIR = /path/to/somewhere
cflags += -I $(JSON_C_DIR)/include/json-c
ldflags += -L $(JSON_C_DIR)/lib -l json-c

GLAD_DIR = GL

CFLAGS += -I$(GLAD_DIR)/include
CFLAGS += -I/usr/include/json-c 
CFLAGS += -I/usr/include/gtk-2.0 
CFLAGS += -I/usr/lib/gtk-2.0/include 
CFLAGS += -I/usr/include/pango-1.0 
CFLAGS += -I/usr/include/atk-1.0 
CFLAGS += -I/usr/include/cairo 
CFLAGS += -I/usr/include/pixman-1 
CFLAGS += -I/usr/include/libdrm 
CFLAGS += -I/usr/include/gdk-pixbuf-2.0 
CFLAGS += -I/usr/include/libpng16 
CFLAGS += -I/usr/include/pango-1.0 
CFLAGS += -I/usr/include/freetype2 
CFLAGS += -I/usr/include/libpng16 
CFLAGS += -I/usr/include/harfbuzz 
CFLAGS += -I/usr/include/glib-2.0 
CFLAGS += -I/usr/lib/glib-2.0/include 
CFLAGS += -I/usr/include/freetype2 
CFLAGS += -I/usr/include/libpng16 
CFLAGS += -I/usr/include/harfbuzz 
CFLAGS += -I/usr/include/glib-2.0 
CFLAGS += -I/usr/lib/glib-2.0/include 

LIBS += -pthread
LIBS += -ldl
LIBS += -lGL
LIBS += -lGL
#LIBS += -lGLEW
LIBS += -lglfw
LIBS += -ljson-c
LIBS += -lX11
LIBS += -lgtk-x11-2.0 
LIBS += -lgdk-x11-2.0 
LIBS += -lpangocairo-1.0 
LIBS += -latk-1.0 
LIBS += -lcairo 
LIBS += -lgdk_pixbuf-2.0 
LIBS += -lgio-2.0 
LIBS += -lpangoft2-1.0 
LIBS += -lpango-1.0 
LIBS += -lgobject-2.0 
LIBS += -lglib-2.0 
LIBS += -lfontconfig 
LIBS += -lfreetype

SRC += $(GLAD_DIR)/src/glad.c
SRC += src/app.c
SRC += src/main.c
SRC += src/functions.c
SRC += src/master.c
SRC += src/xwindow.c
SRC += src/gwindow.c
SRC += src/twindow.c

all: $(SRC)
	$(cc) $(LDFLAGS) -o bin/app $^ $(CFLAGS) $(LIBS)

run:
	./bin/app


