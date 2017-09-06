#include <app/shader.h>
#include <app/share.h>

#include <fstream>
#include <sstream>
#include <iostream>

static void CheckShaderError(GLuint shader, GLuint flag, bool isProgram, const std::string& errorMessage);
static std::string LoadShader(const std::string& path);
static GLuint CreateShader(const std::string& text, GLenum shaderType);

Shader::Shader(const std::string& path) {
	share::print("SHADER CREATION");

	m_program = glCreateProgram();
	m_shaders[0] = CreateShader(LoadShader(path + ".vs"), GL_VERTEX_SHADER);
	m_shaders[1] = CreateShader(LoadShader(path + ".fs"), GL_FRAGMENT_SHADER);

	for (unsigned int i=0; i<NUM_SHADERS; i++) {
		glAttachShader(m_program, m_shaders[i]);
	}

	glBindAttribLocation(m_program, 0, "position");
	glBindAttribLocation(m_program, 1, "texCoord");

	glLinkProgram(m_program);
	CheckShaderError(m_program, GL_LINK_STATUS, true, "SHADER PROGRAM LINKING FAILED");

	glValidateProgram(m_program);
	CheckShaderError(m_program, GL_VALIDATE_STATUS, true, "SHADER PROGRAM VALIDATION FAILED");

	m_uniforms[TRANSFORM_U] = glGetUniformLocation(m_program, "transform");
} // Shader |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

Shader::~Shader() {
	share::print("SHADER DESTRUCTION");

	for (unsigned int i=0; i<NUM_SHADERS; i++) {
		glDetachShader(m_program, m_shaders[i]);
		glDeleteShader(m_shaders[i]);
	}

	glDeleteProgram(m_program);
} // ~Shader |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

void Shader::Bind() {
	glUseProgram(m_program);
} // void Shader::Bind |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

static GLuint CreateShader(const std::string& text, GLenum shaderType) {
	GLuint shader = glCreateShader(shaderType);

	if (shader == 0) {
		share::error("SHADER CREATION FAILED");
		return 0;
	}

	const GLchar* source[1];
	GLint sourceLen[1];
	source[0] = text.c_str();
	sourceLen[0] = text.length();

	glShaderSource(shader, 1, source, sourceLen);
	glCompileShader(shader);
	CheckShaderError(shader, GL_COMPILE_STATUS, false, "FAILED TO COMPILE SHADER");

	return shader;
} // GLuint CreateShader |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

static std::string LoadShader(const std::string& path) {
	std::stringstream fullPathStream;
	fullPathStream << "/home/viktor/master/game/" << path;

	std::string fullPath = fullPathStream.str();

	std::ifstream file;
	file.open((fullPath).c_str());

	std::string output;
	std::string line;

	if (file.is_open()) {
		while (file.good()) {
			getline(file, line);
			output.append(line + "\n");
		}
	} else {
		share::errorf("Unable to load shader: %s.", fullPath.c_str());
	}

	return output;
}
// std::string LoadShader |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

void Shader::Update(const Transform& transform) {
	glm::mat4 model = transform.GetModel();
	glUniformMatrix4fv(m_uniforms[TRANSFORM_U], 1, GL_FALSE, &model[0][0]);
} // void Shader::Update |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

static void CheckShaderError(GLuint shader, GLuint flag, bool isProgram, const std::string& errorMessage)
{
	GLint success = 0;
	GLchar error[1024] = {0};

	if (isProgram) 
		glGetProgramiv(shader, flag, &success);
	else
		glGetShaderiv(shader, flag, &success);

	if (success == GL_FALSE) {
		if (isProgram) {
			glGetProgramInfoLog(shader, sizeof(error), NULL, error);
		} else {
			glGetShaderInfoLog(shader, sizeof(error), NULL, error);
		}
		share::errorf("%s: %s", errorMessage.c_str(), error);
	}
} // int CheckShaderError |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
