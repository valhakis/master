// npm install --save sequelize-cli

// sequelize db:migrate
// sequelize db:migrate:undo
// sequelize help
// sequelize init
// sequelize migration:create
// sequelize version

// sequelize help:init
// sequelize help:db:migrate
// sequelize help:db:migrate:undo

// sequelize model:create --name User --attributes name:string,email:string

// skeleton
module.exports = {
  up: function(queryInterface, Sequelize) {
    // transform into new state
  },
  down: function(queryInterface, Sequelize) {
    // revert to changes
  }
};

// what is this
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.dropAllTables();
  }
};

// drop table
queryInterface.dropTable('sampleTable');

// drop all tables
queryInterface.dropAllTables();

// rename table
queryInterface.renameTable('Person', 'User');

// show all tables
queryInterface.showAllTables().then(function(tables) {});

// describe table
queryInterface.describeTable('Person').then(function(attribs) {});

// add column
queryInterface.addColumn('Person', 'name', Sequelize.STRING);

// remove column
queryInterface.removeColumn('Person', 'name');

// change column
queryInterface.changeColumn('Person', 'name', {
  type: Sequelize.STRING,
  allowNull: false,
  defaultValue: 'no name'
});

// rename column
queryInterface.renameColumn('Person', 'name', 'NAME');

// add index ... remove index ...

// create table
queryInterface.createTable('sampleTable', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: Sequelize.STRING,
  createdAt: {
    type: Sequelize.DATE
  },
  updatedAt: {
    type: Sequelize.DATE
  },
  example: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  number: {
    type: Sequelize.INTEGER,
    references: {
      model: 'anotherTable',
      key: 'id'
    },
    onUpdate: 'cascade',
    onDelete: 'cascade'
  }
}, {
  engine: 'InnoDB',
  charset: null,
  // schema: 'public' // postgres
});
