static void checkCompilation(int elemId, bool isProgram, GLenum type) {
  int success = GL_FALSE;
  char info[512];

  if (isProgram) {
    glGetProgramiv(elemId, type, &success);
    if (success == GL_FALSE) {
      glGetProgramInfoLog(elemId, 512, NULL, info);
      fprintf(stderr, "%s", info);
    }
  } else {
    glGetShaderiv(elemId, type, &success);
    if (success == GL_FALSE) {
      glGetShaderInfoLog(elemId, 512, NULL, info);
      fprintf(stderr, "%s", info);
    }
  }
}
