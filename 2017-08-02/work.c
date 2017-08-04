#include <app/work.h>
#include <app/share.h>

static struct Mouse *mouse;
static int program;
static float M[4][4], V[4][4], P[4][4];
static unsigned int vbo, vao;

void translate2d(float M[4][4], float x, float y)
{
	M[0][0] = 1.0f;
	M[0][1] = 0.0f;
	M[0][2] = 0.0f;
	M[0][3] = 0.0f;

	M[1][0] = 0.0f;
	M[1][1] = 1.0f;
	M[1][2] = 0.0f;
	M[1][3] = 0.0f;

	M[2][0] = 0.0f;
	M[2][1] = 0.0f;
	M[2][2] = 1.0f;
	M[2][3] = 0.0f;

	M[3][0] = x;
	M[3][1] = y;
	M[3][2] = 0.0f;
	M[3][3] = 1.0f;

}

void WorkInitialize(int inProgram)
{
	mouse = MouseGetStructurePointer();
	program = inProgram;

	float vertices[1][3] = {
		0.0f, 0.0f, 0.0f,
	};

	glGenVertexArrays(1, &vao);
	glGenBuffers(1, &vbo);

	glBindVertexArray(vao);

	glBindBuffer(GL_ARRAY_BUFFER, vbo);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
	glEnableVertexAttribArray(0);

	glBindBuffer(GL_ARRAY_BUFFER, 0);
	glBindVertexArray(0);
}

void WorkRender()
{
	int uniform_M = glGetUniformLocation(program, "M");
	int uniform_V = glGetUniformLocation(program, "V");
	int uniform_P = glGetUniformLocation(program, "P");

	glUseProgram(program);
	glBindVertexArray(vao);

	identity(V);
	identity(P);

	ortho(P, 0.0f, 800.0f, 0.0f, 600.0f, 0.0f, 100.0f);


	glUniformMatrix4fv(uniform_V, 1, GL_FALSE, (float*)V);
	glUniformMatrix4fv(uniform_P, 1, GL_FALSE, (float*)P);


	for (int a=0; a<800; a += 20)
	{
		for (int b=0; b<600; b += 20)
		{
			identity(M);
			translate2d(M, a, b);
			glUniformMatrix4fv(uniform_M, 1, GL_FALSE, (float*)M);

			glPointSize(1.0f);
			glDrawArrays(GL_POINTS, 0, 1);
		}
	}

	identity(M);
	translate2d(M, mouse->x, mouse->y);
	glUniformMatrix4fv(uniform_M, 1, GL_FALSE, (float*)M);

	glPointSize(10.0f);
	glDrawArrays(GL_POINTS, 0, 1);

	glBindVertexArray(0);
	glUseProgram(0);
}
