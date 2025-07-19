const NotFoundError = require("../errors/NotFoundError");
const UpdateError = require("../errors/UpdateError");


class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity
    this.listAll = this.listAll.bind(this);
    this.findById = this.findById.bind(this);
    this.findOne = this.findOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  async listAll(req, res, next) {
    try {
      const registersList = await this.serviceEntity.getAllRegisters({ ...req.pagination })

      res.json(registersList)
    } catch (error) {
      next(error)
    }
  }

  async findById(req, res, next) {
    try {
      const { id } = req.params
      const register = await this.serviceEntity.getRegisterById(id)

      if (register) {
        res.json(register)
      } else {
        next(new NotFoundError("Nenhum registro foi encontrado com o ID informado"))
      }
    } catch (error) {
      next(error)
    }
  }

  async findOne(req, res, next) {
    try {
      const { ...params } = req.params
      console.log(params);
      
      const register = await this.serviceEntity.getRegister(params)

      if (register) {
        res.json(register)
      } else {
        next(new NotFoundError("Nenhum registro foi encontrado"))
      }
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      const dataToRegister = req.body
      const newRegister = await this.serviceEntity.createRegister(dataToRegister)

      res.status(201).json(newRegister)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      const { ...params } = req.params
      const dadosToUpdate = req.body
      const isUpdated = await this.serviceEntity.updateRegister(params, dadosToUpdate)

      if (isUpdated) {
        res.json({
          message: "Registro atualizado"
        })
      } else {
        next(new UpdateError("Falha ao atualizar registro"))
      }
    } catch (error) {
      next(error)
    }
  }

  async delete(req, res, next) {
    try {
      const { id } = req.params
      const isDeleted = await this.serviceEntity.deleteRegister(id)

      if (isDeleted) {
        res.status(204).end()
      } else {
        next(new UpdateError("Erro ao remover registro do banco"))
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = Controller