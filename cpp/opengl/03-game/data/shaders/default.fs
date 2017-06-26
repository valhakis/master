#version 330 core
out vec4 color;

uniform vec3 xColor = vec3(1.0f, 0.0f, 0.0f);

void main()
{
  color = vec4(xColor.x, xColor.y, xColor.z, 1.0f);
} 

