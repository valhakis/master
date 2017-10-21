
requirejs.config({
  baseUrl: '/',
  paths: {
    app: '/site/game/'
  }
});

requirejs(["app/main"]);
