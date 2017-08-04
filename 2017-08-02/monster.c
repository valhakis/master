#include <app/monster.h>
#include <app/share.h>
#include <string.h>
#include <glad/glad.h>
#include <GLFW/glfw3.h>

static float M[4][4];
static float V[4][4];
static float P[4][4];

struct Monster MonsterCreate(int program)
{
	struct Monster monster;

	monster.program = program;

	float vertices[3][3] = {
		// -0.5f, -0.5f, 0.0f,
		// +0.5f, -0.5f, 0.0f,
		// +0.0f, +0.5f, 0.0f,
		0.0f, 0.0f, 0.0f,
		100.0f, 0.0f, 0.0f,
		50.0f, 50.0f, 0.0f,
	};
	memcpy(monster.vertices, vertices, sizeof(monster.vertices));

	glGenVertexArrays(1, &monster.vao);
	glGenBuffers(1, &monster.vbo);

	glBindVertexArray(monster.vao);

	glBindBuffer(GL_ARRAY_BUFFER, monster.vbo);
	glBufferData(GL_ARRAY_BUFFER, sizeof(monster.vertices), monster.vertices, GL_STATIC_DRAW);

	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 3 * sizeof(float), (void*)0);
	glEnableVertexAttribArray(0);

	glBindBuffer(GL_ARRAY_BUFFER, 0);
	glBindVertexArray(0);

	return monster;
}

void RenderMonster(struct Monster *monster)
{
	int uniform_M = glGetUniformLocation(monster->program, "M");
	int uniform_V = glGetUniformLocation(monster->program, "V");
	int uniform_P = glGetUniformLocation(monster->program, "P");

	glUseProgram(monster->program);
	glBindVertexArray(monster->vao);

	identity(M);
	identity(V);
	identity(P);

	ortho(P, 0.0f, 800.0f, 0.0f, 600.0f, 0.0f, 100.0f);
	// PrintMat("M", M);
	// PrintMat("V", V);
	// PrintMat("P", P);
	glUniformMatrix4fv(uniform_M, 1, GL_FALSE, (float*)M);
	glUniformMatrix4fv(uniform_V, 1, GL_FALSE, (float*)V);
	glUniformMatrix4fv(uniform_P, 1, GL_FALSE, (float*)P);

	glDrawArrays(GL_TRIANGLES, 0, 3);
	// glPointSize(25.0f);
	// glDrawArrays(GL_POINTS, 0, 3);
	glBindVertexArray(0);
	glUseProgram(0);
}
