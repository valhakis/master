#version 330 core

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTexCoord;

uniform mat4 model = mat4(1.0f), view = mat4(1.0f), projection = mat4(1.0f);
out vec2 TexCoord;

void main(void)
{
  gl_Position = projection * view * model * vec4(aPos.x, aPos.y, aPos.z, 1.0f);
  TexCoord = aTexCoord;
}
