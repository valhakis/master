#ifndef MY_ENV_H
#define MY_ENV_H
const char *EnvGetMasterDir();
const char *EnvGetTodayDir();
const char *EnvGetDataDir();
const char *EnvGetStoreDir();
int env_init(int argc, char *argv[]);
#endif
