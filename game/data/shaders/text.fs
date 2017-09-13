#version 120

varying vec2 texcoord;
uniform sampler2D tex;
uniform vec3 color;

void main() {
  gl_FragColor = vec4(1, 1, 1, texture2D(tex, texcoord).r * vec4(color, 1.0f));
}
