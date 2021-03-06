#version 330 core

layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aColor;

out vec4 vertexColor;

uniform mat4 model = mat4(1.0f), view = mat4(1.0f), projection = mat4(1.0f);

out vec3 vcolor;

void main(void)
{
  gl_Position = projection * view * model * vec4(aPos.x, aPos.y, aPos.z, 1.0f);
  vertexColor = vec4(0.9, 0.8, 0.1, 1.0);
  
  vcolor = aColor;
}
