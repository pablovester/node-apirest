'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Profiles', [{
      name: 'Admin',
      description: 'Todos los privilegios.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'User',
      description: 'Puede obtener listas, crear, editar. No puede borrar.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guest',
      description: 'Puede obtener listas.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ], {});

},
down: (queryInterface, Sequelize) => {
  return queryInterface.dropTable('Profiles');
  }
};
