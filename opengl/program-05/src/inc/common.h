#ifndef MY_COMMON_H
#define MY_COMMON_H
char *common_load_source(const char *path);
char *common_root_get();
void common_check_compilation(int elemId, bool isProgram, GLenum type);
#endif
