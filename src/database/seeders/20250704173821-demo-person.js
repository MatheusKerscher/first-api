/* eslint-disable no-unused-vars */
'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'people',
      [
        {
          id: uuidv4(),
          name: 'Solange Estudante',
          email: 'solange@email.com',
          cpf: '63058133022',
          active: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Igor Estudante',
          email: 'igor@email.com',
          cpf: '99018205028',
          active: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Aline Estudante',
          email: 'aline@email.com',
          cpf: '92797497066',
          active: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Fernando Estudante',
          email: 'fernando@email.com',
          cpf: '17195730000',
          active: true,
          role: 'estudante',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Ricardo Docente',
          email: 'ricardo@email.com',
          cpf: '06946507061',
          active: true,
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          name: 'Dine Docente',
          email: 'dine@email.com',
          cpf: '80941142078',
          active: true,
          role: 'docente',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('people', null, {});
  }
};
