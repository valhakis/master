#version 330 core
out vec4 FragColor; 

in vec2 TexCoords;

uniform vec3 color = vec3(1.0f, 1.0f, 1.0f);
uniform sampler2D tex;

void main() { 
  vec4 sampled = vec4(1.0f, 1.0f, 1.0f, texture(tex, TexCoords).r);
  FragColor = vec4(color.r, color.g, color.b, 1.0f) * sampled;
}

