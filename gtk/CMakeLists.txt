cmake_minimum_required(VERSION 2.8.9)

project(gtk)

include_directories(include)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

include_directories(/usr/include/freetype2)
include_directories(/usr/include/gtk-3.0)
include_directories(/usr/include/at-spi2-atk/2.0)
include_directories(/usr/include/at-spi-2.0)
include_directories(/usr/include/dbus-1.0)
include_directories(/usr/lib/dbus-1.0/include)
include_directories(/usr/include/gtk-3.0)
include_directories(/usr/include/gio-unix-2.0/)
include_directories(/usr/include/cairo)
include_directories(/usr/include/pango-1.0)
include_directories(/usr/include/atk-1.0)
include_directories(/usr/include/cairo)
include_directories(/usr/include/pixman-1)
include_directories(/usr/include/freetype2)
include_directories(/usr/include/libpng16)
include_directories(/usr/include/harfbuzz)
include_directories(/usr/include/glib-2.0)
include_directories(/usr/lib/glib-2.0/include)
include_directories(/usr/include/freetype2)
include_directories(/usr/include/harfbuzz)
include_directories(/usr/include/libpng16)
include_directories(/usr/include/gdk-pixbuf-2.0)
include_directories(/usr/include/glib-2.0)
include_directories(/usr/lib/glib-2.0/include)

file(GLOB_RECURSE SOURCES src/*.cpp)

list(APPEND LINK_LIBS -pthread)
list(APPEND LINK_LIBS -lgtk-3)
list(APPEND LINK_LIBS -lgdk-3)
list(APPEND LINK_LIBS -lpangocairo-1.0)
list(APPEND LINK_LIBS -lpango-1.0)
list(APPEND LINK_LIBS -latk-1.0)
list(APPEND LINK_LIBS -lcairo-gobject)
list(APPEND LINK_LIBS -lcairo)
list(APPEND LINK_LIBS -lgdk_pixbuf-2.0)
list(APPEND LINK_LIBS -lgio-2.0)
list(APPEND LINK_LIBS -lgobject-2.0)
list(APPEND LINK_LIBS -lglib-2.0)

add_executable(gtk ${SOURCES})
target_link_libraries(gtk ${LINK_LIBS})

