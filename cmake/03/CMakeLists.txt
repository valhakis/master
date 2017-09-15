cmake_minimum_required(VERSION 2.8.0)

project(application)
set(CMAKE_BUILD_TYPE Release)

include_directories(inc)
file(GLOB SOURCES "src/*.cpp")

# Generate the shared library from the sources
add_library(student SHARED ${SOURCES})

install(TARGETS student DESTINATION /usr/lib)
