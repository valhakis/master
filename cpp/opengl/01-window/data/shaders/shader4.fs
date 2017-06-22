#version 330 core

out vec4 FragColor;

in vec4 vertexColor;

void main(void)
{
  // FragColor = vec4(0.8f, 0.8f, 0.1f, 1.0f);
  FragColor = vertexColor;
}
