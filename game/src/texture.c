#include <app/texture.h>
#include <app/share.h>
#include <stb_image.h>
#include <assert.h>

Texture::Texture(const std::string& path) {
	share::print("CONSTRUCTION OF TEXTURE");
	int width, height, numComponents;

	unsigned char *imageData = stbi_load(("/home/viktor/master/game/" + path).c_str(), &width, &height, &numComponents, 4);

	if (imageData == NULL) {
		share::errorf("Texture loading failed for texture: '%s'.", path.c_str());
	}

	glGenTextures(1, &m_texture);
	glBindTexture(GL_TEXTURE_2D, m_texture);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_S, GL_REPEAT);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_WRAP_T, GL_REPEAT);

	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MIN_FILTER, GL_LINEAR);
	glTexParameteri(GL_TEXTURE_2D, GL_TEXTURE_MAG_FILTER, GL_LINEAR);

	glTexImage2D(GL_TEXTURE_2D, 0, GL_RGBA, width, height, 0, GL_RGBA, GL_UNSIGNED_BYTE, imageData);

	stbi_image_free(imageData);
}

Texture::~Texture() {
	share::print("DESTRUCTION OF TEXTURE");
	glDeleteTextures(1, &m_texture);
}

void Texture::Bind(unsigned int unit) {
	assert(unit >= 0 && unit <= 31);

	glActiveTexture(GL_TEXTURE0 + unit);
	glBindTexture(GL_TEXTURE_2D, m_texture);
}
