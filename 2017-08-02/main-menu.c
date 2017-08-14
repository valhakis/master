#include <app/main-menu.h>
#include <app/share.h>
#include <app/shader.h>
#include <stb_image.h>

static struct {
	unsigned int vao, vbo, texture;
	float vertices[4][4];
} monster = {
	0, 0, 0, 
	{
		-0.5f, -0.5f, +0.0f, +0.0f,
		+0.5f, -0.5f, +1.0f, +0.0f,
		+0.0f, +0.5f, +0.5f, +1.0f,
		+0.0f, +0.0f, +0.0f, +0.0f,
	}
};
static void MonsterInitialize();
static void MonsterRender();

struct Character {
	unsigned int texture; // id to glyph texture
	float size[2]; // size of glyph
	float bearing[2]; // offset from baseline to left / top of glyph
	unsigned int advance; // offset to advance to next glyph
};
static struct Character characters[128];

static int has_error = 0;
static FT_Library ft;
static FT_Face face;
static const char* fontpath = "Arial Narrow.ttf";
static int program;

void MainMenuInitialize()
{
	program = create_program("text.vs", "text.fs");
	MonsterInitialize();

	if (FT_Init_FreeType(&ft))
	{
		has_error = error("Could not initialize freetype library.");
		return;
	}

	if (FT_New_Face(ft, fontpath, 0, &face))
	{
		has_error = error("Could not load font '%s%s%s'.", IYEL, fontpath, KNRM);
		return;
	}

	FT_Set_Pixel_Sizes(face, 0, 48);

	if (FT_Load_Char(face, 'X', FT_LOAD_RENDER))
	{
		has_error = error("Failed to load character 'X'.");
		return;
	}
}

void MainMenuUpdate()
{
	if (has_error) return;

	int DEFAULT = 0;
	int TEXTURE = 1;

	int uniform_num = glGetUniformLocation(program, "num");

	glUseProgram(program);

	glUniform1i(uniform_num, TEXTURE);
	MonsterRender();
	glUniform1i(uniform_num, DEFAULT);

	glUseProgram(0);
}

static void MonsterInitialize()
{
	glGenVertexArrays(1, &monster.vao);
	glGenBuffers(1, &monster.vbo);
	glGenTextures(1, &monster.texture);

	glBindVertexArray(monster.vao);
	glBindBuffer(GL_ARRAY_BUFFER, monster.vbo);
	glBufferData(GL_ARRAY_BUFFER, sizeof(monster.vertices), monster.vertices, GL_STATIC_DRAW);

	glVertexAttribPointer(0, 4, GL_FLOAT, GL_FALSE, 4 * sizeof(float), (void *)0);
	glEnableVertexAttribArray(0);

	glBindBuffer(GL_ARRAY_BUFFER, 0);
	glBindVertexArray(0);

	const char *texturepath = "wall.jpg";
	glBindTexture(GL_TEXTURE_2D, monster.texture);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);	
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);
	int width, height, nrChannels;
	unsigned char *data = stbi_load(texturepath, &width, &height, &nrChannels, 0);
	if (data)
	{
		glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);
		glGenerateMipmap(GL_TEXTURE_2D);
	}
	else
	{
		has_error = error("Failed to load texture '%s%s%s'.", IYEL, texturepath, KNRM);
	}
	stbi_image_free(data);
}

static void MonsterRender()
{
	glBindVertexArray(monster.vao);
	glBindTexture(GL_TEXTURE_2D, monster.texture);
	glDrawArrays(GL_TRIANGLES, 0, 3);
	glBindVertexArray(0);
}
