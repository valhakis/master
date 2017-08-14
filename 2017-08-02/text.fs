#version 330 core

#define DEFAULT 0
#define TEXTURE 1

in vec2 TexCoords;
out vec4 color;

uniform sampler2D text;
uniform vec3 textColor;

uniform int num = DEFAULT;

void main()
{
	if (num == DEFAULT) 
	{
		vec4 sampled = vec4(1.0, 1.0, 1.0, texture(text, TexCoords).r);
		color = vec4(textColor, 1.0) * sampled;
	} else if (num == TEXTURE) 
	{
		color = texture(text, TexCoords);
	}
}
