cmake_minimum_required(VERSION 2.8.9)

project(game)
include_directories(include)

include_directories(/usr/include/freetype2)
include_directories(/usr/include/libpng16)
include_directories(/usr/include/harfbuzz)
include_directories(/usr/include/glib-2.0)
include_directories(/usr/lib/glib-2.0/include)
include_directories(/usr/include/SDL2)

file(GLOB SOURCES "src/**/*.cpp")

# set(GAME_LINK_LIBS -lGL)

list(APPEND GAME_LINK_LIBS -ldl)
list(APPEND GAME_LINK_LIBS -lGL)
list(APPEND GAME_LINK_LIBS -D_REENTRANT)
list(APPEND GAME_LINK_LIBS -lglfw)
list(APPEND GAME_LINK_LIBS -lGLEW)
list(APPEND GAME_LINK_LIBS -lglut)
list(APPEND GAME_LINK_LIBS -lfreetype)
list(APPEND GAME_LINK_LIBS -lSDL2)

# libs += -D_REENTRANT 
# libs += -lfreetype
# libs += -lGL 
# libs += -lGLEW 
# libs += -lglfw 
# libs += -lglut 
# libs += -lGLU 
# libs += -ldl
# libs += -lSDL2

add_executable(game ${SOURCES})
target_link_libraries(game ${GAME_LINK_LIBS})
