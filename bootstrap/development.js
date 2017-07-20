var Loc = App.masterRequire('bootstrap/Loc');

module.exports = {
  'server-watch': [
    Loc.root('Loc.js'),
    Loc.root('server'),
  ],
  'client-watch': [
    Loc.root('views'),
    Loc.root('public'),
  ]
};
