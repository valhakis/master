char *vsource = loadSource("default.vs");
int vshader = glCreateShader(GL_VERTEX_SHADER);
glShaderSource(vshader, 1, &vsource, NULL);
glCompileShader(vshader);
checkCompilation(vshader, false, GL_COMPILE_STATUS);
free(vsource);

char *fsource = loadSource("default.fs");
int fshader = glCreateShader(GL_FRAGMENT_SHADER);
glShaderSource(fshader, 1, &fsource, NULL);
glCompileShader(fshader);
checkCompilation(fshader, false, GL_COMPILE_STATUS);
free(fsource);

int program = glCreateProgram();

glAttachShader(program, vshader);
glDeleteShader(vshader);

glAttachShader(program, fshader);
glDeleteShader(fshader);

glLinkProgram(program);
checkCompilation(program, true, GL_LINK_STATUS);
