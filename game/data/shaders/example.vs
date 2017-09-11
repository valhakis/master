#version 330 core

layout (location = 0) in vec3 aPos; 
layout (location = 1) in vec3 aCol; 
layout (location = 2) in vec2 aTexCoord; 

out vec3 ACol; 
out vec2 TexCoord;

uniform float xOffset = 0.0f;
uniform float yOffset = 0.0f;

uniform mat4 transform = mat4(1.0f);
uniform mat4 model = mat4(1.0f);
uniform mat4 view = mat4(1.0f);
uniform mat4 projection = mat4(1.0f);

void main() { 

  gl_Position = projection * view * model * transform * vec4(aPos.x + xOffset, aPos.y + yOffset, aPos.z, 1.0f); 

  ACol = aCol; 
  TexCoord = aTexCoord;

} 
