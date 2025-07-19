'use strict';

const isCPFValid = require("../../utils/validateCpfHelper.js")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'professor_id'
      })
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id',
        as: "studentAllRegistrations"
      })
      Person.hasMany(models.Registration, {
        foreignKey: 'student_id',
        scope: { status: "matriculado" },
        as: "studentActiveRegistrations"
      })
    }
  }
  Person.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 30],
          msg: "O nome deve conter entre 3 e 30 caracteres"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "informe um e-mail válido"
        }
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isValidCPF: (cpf) => {
          if(!isCPFValid(cpf)) throw new Error("número de CPF inválido")
        }
      }
    },
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Person',
    tableName: 'people',
    paranoid: true,
    scopes: {
      activeRegisters: {
        where: {
          active: true
        }
      }
    }
  });
  return Person;
};