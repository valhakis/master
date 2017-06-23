#version 330 core

out vec4 color;

in vec2 tex_coord;

uniform sampler2D my_texture;

void main()
{
  color = texture(my_texture, tex_coord);
}
