#version 330 core

layout (location = 0) in vec3 pos;

uniform mat4 M = mat4(1.0), V = mat4(1.0), P = mat4(1.0);

void main()
{
	gl_Position = P * V * M * vec4(pos.x, pos.y, pos.z, 1.0);
}
