'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registrations', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      status: {
        type: Sequelize.STRING
      },
      course_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'courses',
          key: 'id'
        }
      },
      student_id: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'people',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('registrations');
  }
};