#ifndef MY_COMMON_H
#define MY_COMMON_H
bool commonIsDirectory(struct dirent *entry);
bool commonDirectoryIsDot(struct dirent *entry);
int commonRecursionListDir(const char *name, int level);
void commonPrintRepeat(char ch, unsigned int count);
void commonDisplayArguments(int num_arguments, char *arguments[]);
int commonCopy(const char *sourceFile, const char *destinationFile);
int commonCreateDirectory(const char *path);
int commonFileExists(const char *path);
#endif
