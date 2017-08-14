#include <app/shader.h>
#include <app/share.h>

int create_program(const char *vpath, const char *fpath)
{
	int program, shader;

	program = glCreateProgram();

	shader = create_shader(GL_VERTEX_SHADER, vpath);
	if (!shader) {
		error("No Shader.");
		return -1;
	}
	glAttachShader(program, shader);
	//glDeleteShader(shader);

	shader = create_shader(GL_FRAGMENT_SHADER, fpath);
	if (!shader) {
		error("No Shader.");
		return -1;
	}
	glAttachShader(program, shader);
	//glDeleteShader(shader);

	glLinkProgram(program);

	int link_ok = GL_FALSE;
	char info[512];

	glGetProgramiv(program, GL_LINK_STATUS, &link_ok);
	if (!link_ok)
	{
		glGetProgramInfoLog(program, 512, NULL, info);
		error("Program linking failed: %s", info);
		return -1;
	}

	return program;
}

int create_shader(GLenum type, const char *path)
{
	char *source = load_source(path);
	int shader;

	if (!(type == GL_VERTEX_SHADER || type == GL_FRAGMENT_SHADER))
	{
		error("Type can only be 'GL_VERTEX_SHADER' or 'GL_FRAGMENT_SHADER'.\n");
		return -1;
	}

	shader = glCreateShader(type);
	glShaderSource(shader, 1, (const char **)&source, NULL);
	glCompileShader(shader);
	free(source);

	GLint compile_ok;
	char info[512];

	glGetShaderiv(shader, GL_COMPILE_STATUS, &compile_ok);
	if (!compile_ok)
	{
		glGetShaderInfoLog(shader, 512, NULL, info);
		error("Shader '%s' compilation failed: {%s}", path, info);
		return -1;
	} else {
#if create_shader_debug == 1
		glGetShaderInfoLog(shader, 512, NULL, info);
		success("Shader compilation was successful: {%s}", info);
#endif
	}

	return shader;
}

