var canvas = document.createElement('canvas');
canvas.style.backgroundColor = '#000000';

document.body.style.margin = '0px';
document.body.style.padding = '0px';
document.body.appendChild(canvas);

window.addEventListener('keydown', event => {
  keys[event.key] = true;
});

window.addEventListener('keyup', event => {
  keys[event.key] = false;
});

var camera = {
  pos: {
    x: 0,
    y: 0,
    z: 0,
  },
  speed: 0.1,
};

var player = {
  speed: 0.1,
  pos: {
    x: 0,
    y: 0,
    z: -4,
  }
};

var keys = {
  w: false,
  a: false, 
  s: false,
  d: false,
};

var vsource = `
  attribute vec3 aVertexPosition;

  uniform mat4 model;
  uniform mat4 view;
  uniform mat4 projection;

  void main() {
    gl_Position = projection * view * model * vec4(aVertexPosition, 1.0);
  }
`;

var fsource = `
  void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  }
`;

var w = canvas.width = window.innerWidth;
var h = canvas.height = window.innerHeight;

window.addEventListener('resize', event => {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
});

var GL = canvas.getContext('webgl');

var vshader = GL.createShader(GL.VERTEX_SHADER);
GL.shaderSource(vshader, vsource);
GL.compileShader(vshader);

if (!GL.getShaderParameter(vshader, GL.COMPILE_STATUS)) {
  console.log(GL.getShaderInfoLog(vshader));
}

var fshader = GL.createShader(GL.FRAGMENT_SHADER);
GL.shaderSource(fshader, fsource);
GL.compileShader(fshader);

if (!GL.getShaderParameter(fshader, GL.COMPILE_STATUS)) {
  console.log(GL.getShaderInfoLog(fshader));
}

var program = GL.createProgram();
GL.attachShader(program, vshader);
GL.attachShader(program, fshader);
GL.linkProgram(program);

if (!GL.getProgramParameter(program, GL.LINK_STATUS)) {
  console.log(GL.getProgramInfoLog(program));
}

GL.useProgram(program);
var attrib = {
  vertexPosition: GL.getAttribLocation(program, 'aVertexPosition')
};
var uniform = {
  model: GL.getUniformLocation(program, 'model'),
  view: GL.getUniformLocation(program, 'view'),
  projection: GL.getUniformLocation(program, 'projection'),
};

var Line = {
  pos: {
    x: 0,
    y: -1, 
    z: -4,
  },
  vbo: GL.createBuffer(),
  vertices: []
};

for (var i=-1.0; i<=1.0; i += 0.1) {
  Line.vertices.push(+1.0, i, 0.0);
  Line.vertices.push(-1.0, i, 0.0);

  Line.vertices.push(i, +1.0, 0.0);
  Line.vertices.push(i, -1.0, 0.0);
}

console.log(Line.vertices.length/3);

GL.bindBuffer(GL.ARRAY_BUFFER, Line.vbo);
GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(Line.vertices), GL.STATIC_DRAW);
GL.vertexAttribPointer(attrib.vertexPosition, 3, GL.FLOAT, false, 0, 0);
GL.enableVertexAttribArray(attrib.vertexPosition);

var vertices = [
  -0.5, -0.5, 0,
  +0.5, -0.5, 0,
  +0.0, +0.5, 0,
];

var vbo = GL.createBuffer();
GL.bindBuffer(GL.ARRAY_BUFFER, vbo);
GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(vertices), GL.STATIC_DRAW);
GL.vertexAttribPointer(attrib.vertexPosition, 3, GL.FLOAT, false, 0, 0);
GL.enableVertexAttribArray(attrib.vertexPosition);

GL.clearColor(0.15, 0.15, 0.15, 1.0);

GL.uniformMatrix4fv(uniform.model, false, [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
]);

GL.uniformMatrix4fv(uniform.view, false, [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
]);

GL.uniformMatrix4fv(uniform.projection, false, [
  1, 0, 0, 0,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
]);

var render = function() {
  GL.clear(GL.COLOR_BUFFER_BIT);

  var mat = {
    model: mat4.create(),
    view: mat4.create(),
    projection: mat4.create(),
  };

  mat4.translate(mat.view, mat.view, [camera.pos.x, camera.pos.y, camera.pos.z]);

  mat4.translate(mat.model, mat.model, [player.pos.x, player.pos.y, player.pos.z]);
  mat4.perspective(mat.projection, 45*Math.PI/180, w/h, 0.1, 100.0);

  GL.uniformMatrix4fv(uniform.model, false, mat.model);
  GL.uniformMatrix4fv(uniform.view, false, mat.view);
  GL.uniformMatrix4fv(uniform.projection, false, mat.projection);

  GL.bindBuffer(GL.ARRAY_BUFFER, vbo);
  GL.vertexAttribPointer(attrib.vertexPosition, 3, GL.FLOAT, false, 0, 0);
  GL.enableVertexAttribArray(attrib.vertexPosition);
  GL.drawArrays(GL.TRIANGLES, 0, 3);

  mat.model = mat4.create();
  mat4.translate(mat.model, mat.model, [Line.pos.x, Line.pos.y, Line.pos.z]);
  mat4.rotate(mat.model, mat.model, Math.PI/2, [1, 0, 0]);

  GL.uniformMatrix4fv(uniform.model, false, mat.model);
  GL.bindBuffer(GL.ARRAY_BUFFER, Line.vbo);
  GL.vertexAttribPointer(attrib.vertexPosition, 3, GL.FLOAT, false, 0, 0);
  GL.enableVertexAttribArray(attrib.vertexPosition);
  GL.drawArrays(GL.LINES, 0, Line.vertices.length / 3);

  // move player
  if (keys['w']) {
    player.pos.y += player.speed;
  }
  if (keys['a']) {
    player.pos.x -= player.speed;
  }
  if (keys['s']) {
    player.pos.y -= player.speed;
  }
  if (keys['d']) {
    player.pos.x += player.speed;
  }

  // move camera
  if (keys['ArrowUp']) {
    camera.pos.y -= camera.speed;
  }
  if (keys['ArrowLeft']) {
    camera.pos.x += camera.speed;
  }
  if (keys['ArrowDown']) {
    camera.pos.y += camera.speed;
  }
  if (keys['ArrowRight']) {
    camera.pos.x -= camera.speed;
  }

  requestAnimationFrame(render);
};
render();
