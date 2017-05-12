(function( global ) {
   System.config({
      transpiler: 'ts',
      typescriptOptions: {
         'target': 'es5',
         'module': 'commonjs',
         'moduleResolution': 'node',
         'sourceMap': true,
         'emitDecoratorMetadata': true,
         'experimentalDecorators': true,
         'lib': [ 'es2015', 'dom' ],
         'noImplictAny': true,
         'suppressImplicitAnyIndexErrors': true
      },
      meta: {
         'typescript': {
            'exports': 'ts'
         }
      },
      paths: {
         'npm': ''
      },
   });
})(this)
