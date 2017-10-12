var Loc = App.masterRequire('blog/Loc');

module.exports = {
  'server-watch': [
    Loc.root('Loc.js'),
    Loc.root('server'),
  ],
  'client-watch': [
    Loc.root('views'),
    Loc.root('public'),
    Loc.root('layouts'),
    Loc.root('partials'),
  ],
  'sass-watch': [
		{
			in: Loc.root('sass/main.scss'),
			out: Loc.root('public/main.css')
		}
  ]
};
