# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.9

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:


#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:


# Remove some rules from gmake that .SUFFIXES does not remove.
SUFFIXES =

.SUFFIXES: .hpux_make_needs_suffix_list


# Suppress display of executed commands.
$(VERBOSE).SILENT:


# A target that is always out of date.
cmake_force:

.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /usr/bin/cmake

# The command to remove a file.
RM = /usr/bin/cmake -E remove -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /home/viktor/master/game

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /home/viktor/master/game

# Include any dependencies generated for this target.
include glad/CMakeFiles/glad.dir/depend.make

# Include the progress variables for this target.
include glad/CMakeFiles/glad.dir/progress.make

# Include the compile flags for this target's objects.
include glad/CMakeFiles/glad.dir/flags.make

glad/CMakeFiles/glad.dir/src/glad.cpp.o: glad/CMakeFiles/glad.dir/flags.make
glad/CMakeFiles/glad.dir/src/glad.cpp.o: glad/src/glad.cpp
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --progress-dir=/home/viktor/master/game/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Building CXX object glad/CMakeFiles/glad.dir/src/glad.cpp.o"
	cd /home/viktor/master/game/glad && /usr/bin/c++  $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -o CMakeFiles/glad.dir/src/glad.cpp.o -c /home/viktor/master/game/glad/src/glad.cpp

glad/CMakeFiles/glad.dir/src/glad.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Preprocessing CXX source to CMakeFiles/glad.dir/src/glad.cpp.i"
	cd /home/viktor/master/game/glad && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /home/viktor/master/game/glad/src/glad.cpp > CMakeFiles/glad.dir/src/glad.cpp.i

glad/CMakeFiles/glad.dir/src/glad.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green "Compiling CXX source to assembly CMakeFiles/glad.dir/src/glad.cpp.s"
	cd /home/viktor/master/game/glad && /usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /home/viktor/master/game/glad/src/glad.cpp -o CMakeFiles/glad.dir/src/glad.cpp.s

glad/CMakeFiles/glad.dir/src/glad.cpp.o.requires:

.PHONY : glad/CMakeFiles/glad.dir/src/glad.cpp.o.requires

glad/CMakeFiles/glad.dir/src/glad.cpp.o.provides: glad/CMakeFiles/glad.dir/src/glad.cpp.o.requires
	$(MAKE) -f glad/CMakeFiles/glad.dir/build.make glad/CMakeFiles/glad.dir/src/glad.cpp.o.provides.build
.PHONY : glad/CMakeFiles/glad.dir/src/glad.cpp.o.provides

glad/CMakeFiles/glad.dir/src/glad.cpp.o.provides.build: glad/CMakeFiles/glad.dir/src/glad.cpp.o


# Object files for target glad
glad_OBJECTS = \
"CMakeFiles/glad.dir/src/glad.cpp.o"

# External object files for target glad
glad_EXTERNAL_OBJECTS =

glad/libglad.a: glad/CMakeFiles/glad.dir/src/glad.cpp.o
glad/libglad.a: glad/CMakeFiles/glad.dir/build.make
glad/libglad.a: glad/CMakeFiles/glad.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color --switch=$(COLOR) --green --bold --progress-dir=/home/viktor/master/game/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Linking CXX static library libglad.a"
	cd /home/viktor/master/game/glad && $(CMAKE_COMMAND) -P CMakeFiles/glad.dir/cmake_clean_target.cmake
	cd /home/viktor/master/game/glad && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/glad.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
glad/CMakeFiles/glad.dir/build: glad/libglad.a

.PHONY : glad/CMakeFiles/glad.dir/build

glad/CMakeFiles/glad.dir/requires: glad/CMakeFiles/glad.dir/src/glad.cpp.o.requires

.PHONY : glad/CMakeFiles/glad.dir/requires

glad/CMakeFiles/glad.dir/clean:
	cd /home/viktor/master/game/glad && $(CMAKE_COMMAND) -P CMakeFiles/glad.dir/cmake_clean.cmake
.PHONY : glad/CMakeFiles/glad.dir/clean

glad/CMakeFiles/glad.dir/depend:
	cd /home/viktor/master/game && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /home/viktor/master/game /home/viktor/master/game/glad /home/viktor/master/game /home/viktor/master/game/glad /home/viktor/master/game/glad/CMakeFiles/glad.dir/DependInfo.cmake --color=$(COLOR)
.PHONY : glad/CMakeFiles/glad.dir/depend

