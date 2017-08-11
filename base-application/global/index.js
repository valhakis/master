var path = require('path');

class Application {
  constructor() {
    this._root = path.join(__dirname, '..');
    this._masterRoot = path.join(__dirname, '..', '..');
  }

  root(path) {
    if (!path) path = '';
    return this._root + '/' + path;
  }

  masterRoot(path) {
    if (!path) path = '';
    return this._masterRoot + '/' + path;
  }

  require(path) {
    if (!path) path = '';
    return require(this._root + '/' + path);
  }

  masterRequire(path) {
    if (!path) path = '';
    return require(this._masterRoot + '/' + path);
  }
}

global.App = new Application();
