'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    static associate(models) {
      Registration.belongsTo(models.Course, {
        foreignKey: "course_id"
      })
      Registration.belongsTo(models.Person, {
        foreignKey: "student_id"
      })
    }
  }
  Registration.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registration',
    tableName: 'registrations',
    paranoid: true
  });
  return Registration;
};