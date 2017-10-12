static char *loadSource(const char *path) {
  char *source = NULL;
  FILE *fp = NULL;
  long bufsize;
  size_t newLen;

  char file[512];
  sprintf(file, "%s/%s", root, path);
  fp = fopen(file, "r");

  if (fp == NULL) {
    fprintf(stderr, "Failed to open '%s'.\n", path);
    return NULL;
  }

  if (fseek(fp, 0L, SEEK_END) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  bufsize = ftell(fp);
  if (bufsize == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  source = (char*)malloc(sizeof(char) * (bufsize+1));

  if (fseek(fp, 0L, SEEK_SET) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  newLen = fread(source, sizeof(char), bufsize, fp);

  if (ferror(fp) == -1) {
    fprintf(stderr, "Failed to read '%s'.\n", path);
    return NULL;
  }

  source[newLen++] = '\0';

  fclose(fp);

  return source;
}
