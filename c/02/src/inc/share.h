#ifndef SHARE_H
#define SHARE_H
int Random(int min, int max);
bool compare(const char *str1, const char *str2);
int cmp(const char *input, const char *str, int *ptr);
int cmp_args(const char *input, const char *str, int *argc, char argv[50][500]);
#endif
