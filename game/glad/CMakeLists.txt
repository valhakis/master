add_library(glad src/glad.cpp)
install(TARGETS glad LIBRARY DESTINATION lib ARCHIVE DESTINATION lib)
target_include_directories(glad PUBLIC ${CMAKE_CURRENT_LIST_DIR}/include)
target_link_libraries(glad -ldl)
