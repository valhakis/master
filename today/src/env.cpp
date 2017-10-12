static const char masterDir[] = "/home/viktor/master";
static const char todayDir[] = "/home/viktor/master/today";
static const char dataDir[] = "/home/viktor/master/today/data";
static const char storeDir[] = "/home/viktor/master/today/store";

int env_init(int argc, char *argv[]) {

}

const char *EnvGetMasterDir() {
  return masterDir;
}

const char *EnvGetTodayDir() {
  return todayDir;
}

const char *EnvGetDataDir() {
  return dataDir;
}

const char *EnvGetStoreDir() {
  return storeDir;
}
