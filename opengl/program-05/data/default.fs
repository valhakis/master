#version 330 core

out vec4 color;

uniform vec3 m_color;

void main() {
  color = vec4(m_color.r, m_color.g, m_color.b, 1.0f);
}
