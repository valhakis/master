cmake_minimum_required(VERSION 2.8.0)
project(dir_app)

include_directories(inc)

# set(SOURCES src/main.cpp src/student.cpp)
# or
file(GLOB SOURCES "src/*.cpp")

add_executable(app ${SOURCES})
