uniform mat4 MVP = mat4(1.0f);

attribute vec2 vPos;
attribute vec3 vCol;

varying vec3 color;

void main() {
  gl_Position = MVP * vec4(vPos, 0.0f, 1.0f);
  color = vCol;
}
