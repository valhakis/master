#version 330 core

out vec4 FragColor;
in vec3 vcolor;

uniform int use_vcolor;
uniform vec4 ourColor;

in vec4 vertexColor;

void main(void)
{
  // FragColor = vec4(0.8f, 0.8f, 0.1f, 1.0f);
  if (use_vcolor == 1) {
    FragColor = vec4(vcolor, 1.0f);
  } else {
    FragColor = ourColor;
  }
}
