requirejs.config({
  baseUrl: 'lib',
  paths: {
    app: '/scrap/nodes/app'
  }
});

requirejs(['app/index']);
