#version 330 core

layout (location = 0) in vec3 aPos;

out vec4 vertexColor;

void main(void)
{
  gl_Position = vec4(aPos.x, aPos.y, aPos.z, 1.0f);
  vertexColor = vec4(0.9, 0.8, 0.1, 1.0);
}
