#version 120
// #version 330 core
// layout(location = 0) in vec3 vertexPosition_modelspace;

attribute vec3 position;
attribute vec2 texCoord;
attribute vec3 normal;

varying vec3 normal0;
varying vec2 texCoord0;
uniform mat4 transform;

void main() {
  // gl_Position.xyz = vertexPosition_modelspace;
  // gl_Position.w = 1.0;
	gl_Position = transform * vec4(position, 1.0f);

	texCoord0 = texCoord;
	normal0 = (transform * vec4(normal, 0.0f)).xyz;
} // void main |=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=|
