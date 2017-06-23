cc = g++
out = bin/app

src := $(wildcard src/*.cpp src/misc/*.cpp lib/glad/src/glad.c)
obj := $(patsubst src/%.cpp, obj/%.o, $(src))

cflags += -I lib/stb/
cflags += -I lib/glad/include/
cflags += -IC:/msys64/mingw64/include/gtk-3.0 
cflags += -IC:/msys64/mingw64/include/cairo 
cflags += -IC:/msys64/mingw64/include 
cflags += -IC:/msys64/mingw64/include/pango-1.0 
cflags += -IC:/msys64/mingw64/include/atk-1.0 
cflags += -IC:/msys64/mingw64/include/cairo 
cflags += -IC:/msys64/mingw64/include/pixman-1 
cflags += -IC:/msys64/mingw64/include 
cflags += -IC:/msys64/mingw64/include/freetype2 
cflags += -IC:/msys64/mingw64/include/libpng16 
cflags += -IC:/msys64/mingw64/include/harfbuzz 
cflags += -IC:/msys64/mingw64/include/glib-2.0 
cflags += -IC:/msys64/mingw64/lib/glib-2.0/include 
cflags += -IC:/msys64/mingw64/include 
cflags += -IC:/msys64/mingw64/include/freetype2 
cflags += -IC:/msys64/mingw64/include 
cflags += -IC:/msys64/mingw64/include/harfbuzz 
cflags += -IC:/msys64/mingw64/include/libpng16 
cflags += -IC:/msys64/mingw64/include/gdk-pixbuf-2.0 
cflags += -IC:/msys64/mingw64/include/libpng16 
cflags += -IC:/msys64/mingw64/include/glib-2.0 
cflags += -IC:/msys64/mingw64/lib/glib-2.0/include 
cflags += -IC:/msys64/mingw64/include 
cflags += -IC:/msys64/mingw64/include 
cflags += -LC:/msys64/mingw64/lib 

ldflags += -LC:/msys64/mingw64/lib 

#libs += -lGL
#libs += -lGLU
#libs += -lGLEW
#libs += -lX11
#libs += -lvalhakis
#libs += -lglfw
#libs += -lglad
#libs += -ldl
libs += -mms-bitfields 
libs += -pthread 
libs += -mms-bitfields 
libs += -lopengl32
libs += -lgtk-3 
libs += -lgdk-3 
libs += -lgdi32 
libs += -limm32 
libs += -lshell32 
libs += -lole32 -Wl,
libs += -luuid 
libs += -lwinmm 
libs += -ldwmapi 
libs += -lsetupapi 
libs += -lcfgmgr32 
libs += -lz 
libs += -lpangowin32-1.0 
libs += -lpangocairo-1.0 
libs += -lpango-1.0 
libs += -latk-1.0 
libs += -lcairo-gobject 
libs += -lcairo 
libs += -lgdk_pixbuf-2.0 
libs += -lgio-2.0 
libs += -lgobject-2.0 
libs += -lglib-2.0 
libs += -lintl
libs += -lglfw3

all: app

app: $(obj)
	$(cc) $(cflags) $(ldflags) $^ -o $(out) $(libs)

obj/%.o: src/%.cpp
	$(cc) $(cflags) -c $< -o $@

run:
	./$(out)

clean:
	rm -f obj/*.o

