module.exports = function latestTodosDirective() {
  return {
    controller: require('./controller'),
    template: require('./template.html'),
  };
}
