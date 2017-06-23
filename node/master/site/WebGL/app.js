/* global makePerspective */
/* global Matrix */
var win = window;
var canvas = document.getElementById('canvas');

var width = win.innerWidth;
var height = win.innerHeight;

canvas.width = width;
canvas.height = height;

var gl;

gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');

/* fragment shader */
var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
var fragmentShaderSource = `
  varying lowp vec4 vColor;

  void main() {
    // gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    gl_FragColor = vColor;
  }
`;
gl.shaderSource(fragmentShader, fragmentShaderSource);
gl.compileShader(fragmentShader);

if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
  console.log(`An error occurred compiling the fragment shader: ${gl.getShaderInfoLog(fragmentShader)}`);
  gl.deleteShader(fragmentShader);
}

/* vertex shader */
var vertexShader = gl.createShader(gl.VERTEX_SHADER);
var vertexShaderSource = `
  attribute vec3 aVertexPosition;
  attribute vec4 aVertexColor;

  uniform mat4 uMVMatrix;
  uniform mat4 uPMatrix;

  varying lowp vec4 vColor;

  void main() {
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
    vColor = aVertexColor;
  }
`;
gl.shaderSource(vertexShader, vertexShaderSource);
gl.compileShader(vertexShader);

if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
  console.log(`An error occurred compiling the vertex shader: ${gl.getShaderInfoLog(vertexShader)}`);
  gl.deleteShader(vertexShader);
}

/* shader program */
var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vertexShader);
gl.attachShader(shaderProgram, fragmentShader);
gl.linkProgram(shaderProgram);

if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
  console.log(`Unable to initialize the shader program: ${gl.getProgramInfoLog(shaderProgram)}`);
}

/* use the program */
gl.useProgram(shaderProgram);

/* get vertex position attribute */
var vertexPositionAttribute = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
gl.enableVertexAttribArray(vertexPositionAttribute);
var vertexColorAttribute = gl.getAttribLocation(shaderProgram, 'aVertexColor');
gl.enableVertexAttribArray(vertexColorAttribute);

/* create the object */
var horizAspect = height / width;

/* square vertices */
var squareVerticesBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);

var vertices = [
  1, 1, 0,
  -1, 1, 0,
  1, -1, 0,
  -1, -1, 0
];

gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

/* square colors */

var colors = [
  1.0, 1.0, 1.0, 1.0,
  1.0, 0.0, 0.0, 1.0,
  0.0, 1.0, 0.0, 1.0,
  0.0, 0.0, 1.0, 1.0,
];

var squareVerticesColorBuffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

gl.viewport(0, 0, width, height);
gl.clearColor(0.1, 0.1, 0.1, 1.0);
gl.enable(gl.DEPTH_TEST);
gl.depthFunc(gl.LEQUAL);

/* render */
gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
var perspectiveMatrix = makePerspective(45, width / height, 0.1, 100.0);

var mvMatrix;

/* load identity */
mvMatrix = Matrix.I(4);

mvMatrix = mvMatrix.x(Matrix.Translation($V([-0.0, 0.0, -6.0])).ensure4x4());

var pUniform = gl.getUniformLocation(shaderProgram, 'uPMatrix');
gl.uniformMatrix4fv(pUniform, false, new Float32Array(perspectiveMatrix.flatten()));

var mvUniform = gl.getUniformLocation(shaderProgram, 'uMVMatrix');
gl.uniformMatrix4fv(mvUniform, false, new Float32Array(mvMatrix.flatten()));

gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesBuffer);
gl.vertexAttribPointer(vertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
gl.bindBuffer(gl.ARRAY_BUFFER, squareVerticesColorBuffer);
gl.vertexAttribPointer(vertexColorAttribute, 4, gl.FLOAT, false, 0, 0);
// setMatrixUniforms();
gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

/* window event listener */
win.addEventListener('resize', function(event) {
  width = win.innerWidth;
  height = win.innerHeight;

  canvas.width = width;
  canvas.height = height;

  gl.viewport(0, 0, width, height);
});
