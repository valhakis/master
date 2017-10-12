attribute vec3 aVertexPosition;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
  gl_Position = projection * view * model * vec4(aVertexPosition, 1.0);
}
