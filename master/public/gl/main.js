(function() {
  var canvas = document.querySelector('canvas');

  GL.initialize(canvas);

  GL.setClearColor(0.1, 0.1, 0.1, 1.0);

  GL.initializeProgram('/shaders/default.vs', '/shaders/default.fs', function() {
    (function() {

      var M = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];

      var V = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];

      var P = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];

      var vbo = gl.createBuffer();
      var vertices = [
        -1.00, -1.0, 0.0,
        -0.50, -1.0, 0.0,
        -0.75, -0.50, 0.0,
      ];
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      GL.addRender(function() {
        gl.useProgram(GL.program);

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.vertexAttribPointer(GL.aVertexPosition, 3, gl.FLOAT, false, 0, 0);

        gl.uniformMatrix4fv(GL.uniforms.model, false, MatrixFlip(M));
        gl.uniformMatrix4fv(GL.uniforms.view, false, V);
        gl.uniformMatrix4fv(GL.uniforms.projection, false, P);

        gl.drawArrays(gl.TRIANGLES, 0, 3);
      });
    })();
    (function() {
      var M = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];

      var V = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];

      var P = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1,
      ];

      var right = GL.canvas.width;
      var left = 0;
      var top = 0;
      var far = 100;
      var near = -0.2;
      var bottom = GL.canvas.height;

      var P = [
        2/(right-left), 0, 0, -((right+left)/(right-left)),
        0, 2/(top-bottom), 0, -((top+bottom)/(top-bottom)),
        0, 0, -2/(far-near), -((far+near)/(far-near)),
        0, 0, 0, 1,
      ];

      var vbo = gl.createBuffer();
      var vertices = [
        0, 0, 0.0,
        GL.canvas.width, 0, 0.0,
        GL.canvas.width/2, GL.canvas.height, 0.0
      ];
      gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      GL.addRender(function() {
        gl.useProgram(GL.program);

        gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
        gl.vertexAttribPointer(GL.aVertexPosition, 3, gl.FLOAT, false, 0, 0);

        gl.uniformMatrix4fv(GL.uniforms.model, false, MatrixFlip(M));
        gl.uniformMatrix4fv(GL.uniforms.view, false, V);
        gl.uniformMatrix4fv(GL.uniforms.projection, false, MatrixFlip(P));

        gl.drawArrays(gl.TRIANGLES, 0, 3);

      });
    })();
  });

  GL.addRender(function() {
    // console.log(2);
  });

})();
