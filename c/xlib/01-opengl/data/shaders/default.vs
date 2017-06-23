#version 110

attribute vec2 position;

void main()
{
  gl_Position vec4(position, 0.0f, 1.0f);
  texcoord = position * vec2(0.5) + vec2(0.5);
}
