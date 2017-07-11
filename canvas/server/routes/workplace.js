module.exports = function(Loc) {
  var express = require('express');
  var workplace = express.Router();
  var Work = Loc.require('server/controllers/workplace')(Loc);

  workplace.get('/', Work.renderIndex);
  workplace.get('/database', Work.renderDatabaseIndex);
  workplace.get('/database/createWorksTable', Work.createWorksTable);

  return workplace;
};
