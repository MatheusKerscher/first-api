const db = require("../database/models")

class Services {
  constructor(modelName) {
    this.modelName = modelName
  }

  async getAllRegisters(options) {
    return db[this.modelName].findAll({ ...options })
  }

  async getAllRegistersByScope(scopeName, options) {
    return db[this.modelName].scope(scopeName).findAll({ ...options })
  }

  async getRegistersAndCount(options) {
    return db[this.modelName].findAndCountAll({ ...options })
  }

  async getRegisterById(id) {
    return db[this.modelName].findByPk(id)
  }

  async getRegister(where) {
    return db[this.modelName].findOne({
      where: {
        ...where
      }
    })
  }

  async updateRegister(where, dataToUpdate, transaction = {}) {
    const updatedRegisterList = await db[this.modelName].update(
      { ...dataToUpdate },
      {
        where: {
          ...where
        },
        transaction: transaction
      }
    )

    if (updatedRegisterList[0] === 0) {
      return false
    }

    return true
  }

  async createRegister(dataToRegister) {
    return db[this.modelName].create({ ...dataToRegister })
  }

  async deleteRegister(id) {
    const deletedRow = await db[this.modelName].destroy({
      where: {
        id: id
      }
    })

    if (deletedRow === 0) {
      return false
    }

    return true
  }
}

module.exports = Services