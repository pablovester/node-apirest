'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Roles', [
      {
        name: 'ROLE_USER_LIST',
        createdAt: new Date()
      },
      {
        name: 'ROLE_USER_CREATE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_USER_UPDATE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_USER_DELETE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_PROFILE_LIST',
        createdAt: new Date()
      },
      {
        name: 'ROLE_PROFILE_CREATE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_PROFILE_ASSIGN',
        createdAt: new Date()
      },
      {
        name: 'ROLE_PROFILE_UPDATE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_PROFILE_DELETE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_ROLE_LIST',
        createdAt: new Date()
      },
      {
        name: 'ROLE_ROLE_CREATE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_ROLE_UPDATE',
        createdAt: new Date()
      },
      {
        name: 'ROLE_ROLE_DELETE',
        createdAt: new Date()
      },
      ], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Roles', null, {});

  }
};