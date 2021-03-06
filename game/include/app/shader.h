#ifndef MY_SHADDER_H
#define MY_SHADDER_H

#include <string>
#include <fstream>
#include <sstream>
#include <GL/glew.h>
#include <app/transform.h>
#include <app/camera.h>

class Shader {
	public:

		Shader(const std::string& path);

		void Bind();
		void bind() { glUseProgram(m_program); }
		void Update(const Transform& transform, const Camera& camera);
		int GetProgram();

		virtual ~Shader();

		// ! public 		^^============================================================
	protected:
		// ! protected 		^^============================================================
	private:

		static const unsigned int NUM_SHADERS	 = 2;
		// static const unsigned int NUM_UNIFORMS = 2;

		enum {
			TRANSFORM_U,

			NUM_UNIFORMS
		};

		GLuint m_program;

		GLuint m_uniforms[NUM_UNIFORMS];
		GLuint m_shaders[NUM_SHADERS];

		// ! private 		^^============================================================
};

#endif
