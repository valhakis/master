#version 330 core

layout (location = 0) in vec3 vertexPosition;

uniform mat4 model = mat4(1.0f);
uniform mat4 view = mat4(1.0f);
uniform mat4 projection = mat4(1.0f);

void main()
{
  // gl_Position = projection * view * model * vec4(vertexPosition, 1.0f);
  gl_Position = vec4(vertexPosition.x + 0.5f, vertexPosition.y, vertexPosition.z, 1.0f);
}
