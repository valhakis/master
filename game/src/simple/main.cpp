#include <app/simple/main.h>
#include <app/simple/simple.h>
#include <app/simple/swindow.h>
#include <app/simple/shader.h>
#include <stb_image.h>

float vertices[3][5] = {
	-0.5f, -0.5f, 0.0f, 0.0f, 0.0f,
	+0.5f, -0.5f, 0.0f, 1.0f, 0.0f,
	+0.0f, +0.5f, 0.0f, 0.5f, 1.0f,
};

unsigned int vbo, vao;

int simple_main() {
	simple::cprintf(simple::KYEL, "START OF SIMPLE MAIN");

	SWindow swindow(800, 600);

	SShader shader("data/default");

	glGenVertexArrays(1, &vao);
	glGenBuffers(1, &vbo);

	glBindVertexArray(vao);
	glBindBuffer(GL_ARRAY_BUFFER, vbo);
	glBufferData(GL_ARRAY_BUFFER, sizeof(vertices), vertices, GL_STATIC_DRAW);

	glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)0);
	glEnableVertexAttribArray(0);

	glVertexAttribPointer(1, 2, GL_FLOAT, GL_FALSE, 5 * sizeof(float), (void*)(3 * sizeof(float)));
	glEnableVertexAttribArray(1);

	glBindVertexArray(0);
	glBindBuffer(GL_ARRAY_BUFFER, 0);

	unsigned int texture;
	glGenTextures(1, &texture);
	glBindTexture(GL_TEXTURE_2D, texture);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);	
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

	int width, height, numChannels;
	unsigned char *data = stbi_load("/home/viktor/master/game/data/wall.jpg", &width, &height, &numChannels, 0);

	if (data == NULL) {
		simple::errorf("UNABLE TO LOAD TEXTURE");
		return -1;
	}

	glTexImage2D(GL_TEXTURE_2D, 0, GL_RGB, width, height, 0, GL_RGB, GL_UNSIGNED_BYTE, data);
	glGenerateMipmap(GL_TEXTURE_2D);
	stbi_image_free(data);
	glBindTexture(GL_TEXTURE_2D, 0);

	float model[4][4] = {
		1.0f, 0.0f, 0.0f, 0.0f,
		0.0f, 1.0f, 0.0f, 0.0f,
		0.0f, 0.0f, 1.0f, 0.0f,
		0.0f, 0.0f, 0.0f, 1.0f,
	};

	while (swindow.isOpen()) {
		swindow.clear(0.1f, 0.1f, 0.1f, 1.0f);

		shader.use();
		glBindVertexArray(vao);

		glBindTexture(GL_TEXTURE_2D, texture);
		shader.setMatrix4fv("transform", model);
		glDrawArrays(GL_TRIANGLES, 0, 3);

		glBindVertexArray(0);

		swindow.events();
		swindow.swap();
	}

	simple::cprintf(simple::KYEL, "END OF SIMPLE MAIN");
	return 0;
}
