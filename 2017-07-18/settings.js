var Loc = App.masterRequire('2017-07-18/app/Loc');

module.exports = {
  'client-watch': [
    Loc.root('views')
  ],
  'server-watch': [
    Loc.root('app')
  ]
};
