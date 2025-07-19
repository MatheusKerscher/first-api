/* eslint-disable no-unused-vars */
'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) { 
     await queryInterface.bulkInsert(
      'courses', 
      [
        {
          id: uuidv4(),
          title: 'API com Express',
          description: 'Curso de API com Express e MongoDB',
          start_date: '2023-01-01',
          category_id: "ef67f570-0a68-4a34-856a-266261a9adc2",
          professor_id: "f316459e-f2a4-4c5b-9b4f-3869db5fd2bd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'SpringBoot',
          description: 'Curso de Java com Spring Framework',
          start_date: '2023-01-01',
          category_id: "eb9af960-0d8a-47c3-abe4-0f8da51915bb",
          professor_id: "f316459e-f2a4-4c5b-9b4f-3869db5fd2bd",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Python Web com Django',
          description: 'Curso de aplicações web com Django',
          start_date: '2023-01-01',
          category_id: "a315ba83-15b5-4c56-a2b4-e1ac181dbf90",
          professor_id: "58bcff96-4a5b-4c27-93ce-d2f1dfc320cc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          title: 'Orientação a Objetos com C#',
          description: 'Curso de C#: coleções, arquivos e libs',
          start_date: '2023-01-01',
          category_id: "32a2f7ba-bdeb-42d3-a518-51e2252269e8",
          professor_id: "58bcff96-4a5b-4c27-93ce-d2f1dfc320cc",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('courses', null, {});
  }
};
