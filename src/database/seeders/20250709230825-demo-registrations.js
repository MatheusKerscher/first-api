/* eslint-disable no-unused-vars */
'use strict';

const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'registrations', 
      [
        {
          id: uuidv4(),
          student_id: "3cadb5e3-9138-4446-98b2-a9606ec1cbc9",
          course_id: "05fa9e4d-26df-4ff6-a566-677e64126e0a",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "3cadb5e3-9138-4446-98b2-a9606ec1cbc9",
          course_id: "5498475d-bfb9-48ae-8b21-70f0a4ff3f02",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "3cadb5e3-9138-4446-98b2-a9606ec1cbc9",
          course_id: "5d2727b7-91a2-4f11-85af-e556d7e0e4b8",
          status: 'cancelado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "b8e91ec6-6145-42ec-8666-75d2d2cba6e1",
          course_id: "c892a4d2-a3dd-4aee-bd62-32927263ce98",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "b8e91ec6-6145-42ec-8666-75d2d2cba6e1",
          course_id: "05fa9e4d-26df-4ff6-a566-677e64126e0a",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "70a87790-3f82-46eb-a7d9-bcb8b1388bb6",
          course_id: "94239937-9d5c-44ab-afa9-2c1113125b30",
          status: 'cancelado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "70a87790-3f82-46eb-a7d9-bcb8b1388bb6",
          course_id: "c6002d0c-c603-46ff-b1b9-e05e5ce2430e",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "70a87790-3f82-46eb-a7d9-bcb8b1388bb6",
          course_id: "5498475d-bfb9-48ae-8b21-70f0a4ff3f02",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "fe9f60a8-18ca-4c84-ae75-59f623065607",
          course_id: "c9914d20-729a-49cb-b40b-b08d12b1bc40",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "fe9f60a8-18ca-4c84-ae75-59f623065607",
          course_id: "c3842fbf-2c07-4e89-8e73-372e049e41fd",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: uuidv4(),
          student_id: "fe9f60a8-18ca-4c84-ae75-59f623065607",
          course_id: "c892a4d2-a3dd-4aee-bd62-32927263ce98",
          status: 'matriculado',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ], 
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('registrations', null, {});
  }
};
