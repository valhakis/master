varying vec3 color;

uniform vec3 iCol = vec3(-1.0f, -1.0f, -1.0f);

void main() {
  if (iCol.x < 0.0f || iCol.y < 0.0f || iCol.z < 0.0f) {
    gl_FragColor = vec4(color, 1.0f);
  } else {
    gl_FragColor = vec4(iCol, 1.0f);
  }
}
