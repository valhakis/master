cmake_minimum_required(VERSION 2.8.9)

project(game)

add_subdirectory(glad)
# add_subdirectory(stb)

include_directories(include)
include_directories(glad/include)

set(CMAKE_RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin)

include_directories(/usr/include/freetype2)
include_directories(/usr/include/libpng16)
include_directories(/usr/include/harfbuzz)
include_directories(/usr/include/glib-2.0)
include_directories(/usr/lib/glib-2.0/include)
include_directories(/usr/include/SDL2)

file(GLOB_RECURSE SOURCES src/*.cpp)

list(APPEND GAME_LINK_LIBS -lX11)
list(APPEND GAME_LINK_LIBS -ldl)
list(APPEND GAME_LINK_LIBS -lGL)
list(APPEND GAME_LINK_LIBS -D_REENTRANT)
list(APPEND GAME_LINK_LIBS -lglfw)
list(APPEND GAME_LINK_LIBS -lGLEW)
list(APPEND GAME_LINK_LIBS -lglut)
list(APPEND GAME_LINK_LIBS -lfreetype)
list(APPEND GAME_LINK_LIBS -lSDL2)
list(APPEND GAME_LINK_LIBS -lGLU)
list(APPEND GAME_LINK_LIBS glad)
list(APPEND GAME_LINK_LIBS stb)

add_executable(game ${SOURCES})
target_link_libraries(game ${GAME_LINK_LIBS})

