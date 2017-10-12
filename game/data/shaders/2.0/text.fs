varying vec2 TexCoords;

uniform vec3 textColor = vec3(1.0, 1.0, 1.0);
uniform sampler2D text;

void main() {
  vec4 sampled = vec4(1.0, 1.0, 1.0, texture(text, TexCoords).r);
  gl_FragColor = vec4(textColor, 1.0) * sampled;
}
