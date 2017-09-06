#version 120
// #version 330 core
// layout(location = 0) in vec3 vertexPosition_modelspace;

attribute vec3 position;
attribute vec2 texCoord;

varying vec2 texCoord0;
uniform mat4 transform;

void main() {
  // gl_Position.xyz = vertexPosition_modelspace;
  // gl_Position.w = 1.0;
	gl_Position = transform * vec4(position, 1.0f);

	texCoord0 = texCoord;
} // void main |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|