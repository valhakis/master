(function() {

  var gl, canvas;

  var width = 500, height = 300;

  var GL = {
    aVertexPosition: null,
    program: null,
    uniforms: {
      model: null,
      view: null,
      projection: null
    }
  };

  GL.renderers = [];

  GL.render = function() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    if (GL.program) {
      for (var x=0; x<GL.renderers.length; x++) {
        var renderer = GL.renderers[x];
        renderer();
      }
    }

    requestAnimationFrame(GL.render);
  };

  GL.initialize = function(Icanvas) {
    GL.canvas = canvas = Icanvas;
    window.gl = gl = canvas.getContext('webgl');
    canvas.width = width, canvas.height = height;

    gl.viewport(0, 0, width, height);
    gl.clearColor(0.1, 0.1, 0.1, 1.0);

    // gl.enable(gl.DEPTH_TEST);
    // gl.depthFunc(gl.LEQUAL);

    GL.render();
  };

  GL.setClearColor = function(r, g, b, a) {
    gl.clearColor(r, g, b, a);
  };

  GL.addRender = function(renderer) {
    GL.renderers.push(renderer);
  };

  GL.initializeProgram = function(vpath, fpath, done) {

    var createShader = function(path, type) {
      return new Promise(function(resolve, reject) {
        var shader, xhr;

        if (type == 'vertex-shader') {
          shader = gl.createShader(gl.VERTEX_SHADER);
        } else if (type == 'fragment-shader') {
          shader = gl.createShader(gl.FRAGMENT_SHADER);
        } else {
          console.log(`only 'vertex-shader' or 'fragment-shader'`);
        }

        xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            gl.shaderSource(shader, this.responseText);
            gl.compileShader(shader);

            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
              console.log(`Error: ${type}: ${gl.getShaderInfoLog(shader)}`);
              gl.deleteShader(shader);
              reject('error creating shader');
            }

            resolve(shader);
          }
        };

        xhr.open('GET', path, true);
        xhr.send(null);

      });
    };

    var vpromise = createShader(vpath, 'vertex-shader');
    var fpromise = createShader(fpath, 'fragment-shader');

    Promise.all([vpromise, fpromise]).then(shaders => {
      var program = gl.createProgram();
      gl.attachShader(program, shaders[0]);
      gl.attachShader(program, shaders[1]);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log(`Unable to initialize program: ${gl.getProgramInfoLog(program)}`);
      }
      gl.useProgram(program);

      GL.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');
      gl.enableVertexAttribArray(GL.aVertexPosition);

      GL.uniforms.model = gl.getUniformLocation(program, 'model');
      GL.uniforms.view = gl.getUniformLocation(program, 'view');
      GL.uniforms.projection = gl.getUniformLocation(program, 'projection');

      GL.program = program;

      done();
    });

  };

  window.GL = GL;
})();

function MatrixFlip(M) {

  return [
    M[0], M[4], M[8], M[12],
    M[1], M[5], M[9], M[13],
    M[2], M[6], M[10], M[14],
    M[3], M[7], M[11], M[15]
  ];
}
