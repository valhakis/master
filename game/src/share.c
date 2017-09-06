#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <stdio.h>
#include <stdlib.h>
#include <GL/glew.h>
#include <GLFW/glfw3.h>
#include <glm/glm.hpp>
#include <stdio.h>
#include <stdarg.h>

#include <app/window.h>

static void resize(GLFWwindow* window, int width, int height) {
	glViewport(0, 0, width, height);
}

const char *datadir = "/home/viktor/master/game/data";

GLuint LoadShaders(const char * vertex_file_path, const char * fragment_file_path){

	std::string datadir_string = datadir;
	std::string vertex_file_path_string = datadir_string + '/' + vertex_file_path;
	std::string fragment_file_path_string = datadir_string + '/' + fragment_file_path;

	// Create the shaders
	GLuint VertexShaderID = glCreateShader(GL_VERTEX_SHADER);
	GLuint FragmentShaderID = glCreateShader(GL_FRAGMENT_SHADER);

	// Read the Vertex Shader code from the file
	std::string VertexShaderCode;
	std::ifstream VertexShaderStream(vertex_file_path_string.c_str(), std::ios::in);
	if(VertexShaderStream.is_open()){
		std::string Line = "";
		while(getline(VertexShaderStream, Line))
			VertexShaderCode += "\n" + Line;
		VertexShaderStream.close();
	}else{
		printf("Impossible to open %s. Are you in the right directory ? Don't forget to read the FAQ !\n", vertex_file_path_string.c_str());
		getchar();
		return 0;
	}

	// Read the Fragment Shader code from the file
	std::string FragmentShaderCode;
	std::ifstream FragmentShaderStream(fragment_file_path_string.c_str(), std::ios::in);
	if(FragmentShaderStream.is_open()){
		std::string Line = "";
		while(getline(FragmentShaderStream, Line))
			FragmentShaderCode += "\n" + Line;
		FragmentShaderStream.close();
	}

	GLint Result = GL_FALSE;
	int InfoLogLength;


	// Compile Vertex Shader
	printf("Compiling shader : %s\n", vertex_file_path_string.c_str());
	char const * VertexSourcePointer = VertexShaderCode.c_str();
	glShaderSource(VertexShaderID, 1, &VertexSourcePointer , NULL);
	glCompileShader(VertexShaderID);

	// Check Vertex Shader
	glGetShaderiv(VertexShaderID, GL_COMPILE_STATUS, &Result);
	glGetShaderiv(VertexShaderID, GL_INFO_LOG_LENGTH, &InfoLogLength);
	if ( InfoLogLength > 0 ) {
		std::vector<char> VertexShaderErrorMessage(InfoLogLength+1);
		glGetShaderInfoLog(VertexShaderID, InfoLogLength, NULL, &VertexShaderErrorMessage[0]);
		printf("%s\n", &VertexShaderErrorMessage[0]);
	}

	// Compile Fragment Shader
	printf("Compiling shader : %s\n", fragment_file_path_string.c_str());
	char const * FragmentSourcePointer = FragmentShaderCode.c_str();
	glShaderSource(FragmentShaderID, 1, &FragmentSourcePointer , NULL);
	glCompileShader(FragmentShaderID);

	// Check Fragment Shader
	glGetShaderiv(FragmentShaderID, GL_COMPILE_STATUS, &Result);
	glGetShaderiv(FragmentShaderID, GL_INFO_LOG_LENGTH, &InfoLogLength);
	if ( InfoLogLength > 0 ){
		std::vector<char> FragmentShaderErrorMessage(InfoLogLength+1);
		glGetShaderInfoLog(FragmentShaderID, InfoLogLength, NULL, &FragmentShaderErrorMessage[0]);
		printf("%s\n", &FragmentShaderErrorMessage[0]);
	}

	// Link the program
	printf("Linking program\n");
	GLuint ProgramID = glCreateProgram();
	glAttachShader(ProgramID, VertexShaderID);
	glAttachShader(ProgramID, FragmentShaderID);
	glLinkProgram(ProgramID);

	// Check the program
	glGetProgramiv(ProgramID, GL_LINK_STATUS, &Result);
	glGetProgramiv(ProgramID, GL_INFO_LOG_LENGTH, &InfoLogLength);
	if ( InfoLogLength > 0 ){
		std::vector<char> ProgramErrorMessage(InfoLogLength+1);
		glGetProgramInfoLog(ProgramID, InfoLogLength, NULL, &ProgramErrorMessage[0]);
		printf("%s\n", &ProgramErrorMessage[0]);
	}

	glDetachShader(ProgramID, VertexShaderID);
	glDetachShader(ProgramID, FragmentShaderID);

	glDeleteShader(VertexShaderID);
	glDeleteShader(FragmentShaderID);

	return ProgramID;
} // GLuint LoadShaders |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

int main_test() {


	if( !glfwInit() )
	{
		fprintf( stderr, "Failed to initialize GLFW\n" );
		return -1;
	}

	std::cout << "EXAMPLE STD COUT" << std::endl;

	glfwWindowHint(GLFW_SAMPLES, 4); // 4x antialiasing
	glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 3); // We want OpenGL 3.3
	glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 3);
	glfwWindowHint(GLFW_OPENGL_FORWARD_COMPAT, GL_TRUE); // To make MacOS happy; should not be needed
	glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE); // We don't want the old OpenGL 

	// Open a window and create its OpenGL context
	GLFWwindow* window; // (In the accompanying source code, this variable is global for simplicity)
	window = glfwCreateWindow( 1024, 768, "Tutorial 01", NULL, NULL);
	if( window == NULL ){
		fprintf( stderr, "Failed to open GLFW window. If you have an Intel GPU, they are not 3.3 compatible. Try the 2.1 version of the tutorials.\n" );
		glfwTerminate();
		return -1;
	}
	glfwSetWindowSizeCallback(window, resize);
	glfwMakeContextCurrent(window); // Initialize GLEW
	glewExperimental=true; // Needed in core profile
	if (glewInit() != GLEW_OK) {
		fprintf(stderr, "Failed to initialize GLEW\n");
		return -1;
	}

	glfwSetInputMode(window, GLFW_STICKY_KEYS, GL_TRUE);

	int program = LoadShaders("default.vs", "default.fs");

	// An array of 3 vectors which represents 3 vertices
	static const GLfloat g_vertex_buffer_data[] = {
		-1.0f, -1.0f, 0.0f,
		1.0f, -1.0f, 0.0f,
		0.0f,  1.0f, 0.0f,
	};

	GLuint vertexbuffer;
	GLuint VertexArrayID;

	glGenVertexArrays(1, &VertexArrayID);
	glGenBuffers(1, &vertexbuffer);

	glBindVertexArray(VertexArrayID);

	// 1rst attribute buffer : vertices
	glEnableVertexAttribArray(0);
	glBindBuffer(GL_ARRAY_BUFFER, vertexbuffer);
	glVertexAttribPointer(
			0,                  // attribute 0. No particular reason for 0, but must match the layout in the shader.
			3,                  // size
			GL_FLOAT,           // type
			GL_FALSE,           // normalized?
			0,                  // stride
			(void*)0            // array buffer offset
			);

	// Generate 1 buffer, put the resulting identifier in vertexbuffer
	// The following commands will talk about our 'vertexbuffer' buffer
	glBindBuffer(GL_ARRAY_BUFFER, vertexbuffer);
	// Give our vertices to OpenGL.
	glBufferData(GL_ARRAY_BUFFER, sizeof(g_vertex_buffer_data), g_vertex_buffer_data, GL_STATIC_DRAW);


	do{
		// Draw nothing, see you in tutorial 2 !

		// Swap buffers
		glfwSwapBuffers(window);
		glfwPollEvents();

		glUseProgram(program);
		glBindVertexArray(VertexArrayID);
		glDrawArrays(GL_TRIANGLES, 0, 3); // Starting from vertex 0; 3 vertices total -> 1 triangle
		glDisableVertexAttribArray(0);

	} // Check if the ESC key was pressed or the window was closed
	while( glfwGetKey(window, GLFW_KEY_ESCAPE ) != GLFW_PRESS &&
			glfwWindowShouldClose(window) == 0 );

	return 0;

} // int main_test |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|


namespace share
{
	const char *KNRM = "\x1B[0m";
	const char *KRED = "\x1B[31m";
	const char *KGRN = "\x1B[32m";
	const char *KYEL = "\x1B[33m";
	const char *KBLU = "\x1B[34m";
	const char *KMAG = "\x1B[35m";
	const char *KCYN = "\x1B[36m";
	const char *KWHT = "\x1B[37m";

	void print(const char *msg) {
		std::cout << KMAG << "PRINT: " << KNRM << msg << std::endl;
		printf("%s=====================================%s\n", KMAG, KNRM);
	} // void print |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

	void main(const char *msg) {
		printf("%s=====================================%s\n", KYEL, KNRM);
		printf("%s============ %s%s %s============%s\n", KYEL, KRED, msg, KYEL, KNRM);
		printf("%s=====================================%s\n", KYEL, KNRM);
	} // void main |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

	void error(const char *msg) {
		std::cout << KRED << "ERROR: " << KNRM << msg << std::endl;
		printf("%s=====================================%s\n", KRED, KNRM);
	} // void error |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

	void errorf(const char *format, ...) {
		va_list args;
		fprintf( stderr, "%sERROR: %s", KMAG, KNRM);
		va_start( args, format );
		vfprintf( stderr, format, args );
		va_end( args );
		fprintf( stderr, "\n" );
	} // void errorf |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

	void printf(const char *format, ...) {
		va_list args;
		fprintf( stdout, "%sPRINT: %s", KBLU, KNRM);
		va_start( args, format );
		vfprintf( stdout, format, args );
		va_end( args );
		fprintf( stdout, "\n" );
		fprintf(stdout, "%s=====================================%s\n", KMAG, KNRM);
	}

} // namespace share |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|

// ----------------------//\\
// ---------------------// ¤ \\
// ---------------------\\ ¤ //
// ---------------------- \\//
// -------------------- (___)
// ---------------------(___)
// ---------------------(___)
// ---------------------(___)_________
// --------\_____/\__/----\__/\_____/
// ------------\ _°_[------------]_ _° /
// ----------------\_°_¤ ---- ¤_°_/
// --------------------\ __°__ /
// ---------------------|\_°_/|
// ---------------------[|\_/|]
// ---------------------[|[¤]|]
// ---------------------[|;¤;|]
// ---------------------[;;¤;;]
// --------------------;;;;¤]|]\
// -------------------;;;;;¤]|]-\
// ------------------;;;;;[¤]|]--\
// -----------------;;;;;|[¤]|]---\
// ----------------;;;;;[|[¤]|]|---|
// ---------------;;;;;[|[¤]|]|---|
// ----------------;;;;[|[¤]|/---/
// -----------------;;;[|[¤]/---/
// ------------------;;[|[¤/---/
// -------------------;[|[/---/
// --------------------[|/---/
// ---------------------/---/
// --------------------/---/|]
// -------------------/---/]|];
// ------------------/---/¤]|];;
// -----------------|---|[¤]|];;;
// -----------------|---|[¤]|];;;
// ------------------\--|[¤]|];;
// -------------------\-|[¤]|];
// ---------------------\|[¤]|]
// ----------------------\\¤//
// -----------------------\|/
// ------------------------V
