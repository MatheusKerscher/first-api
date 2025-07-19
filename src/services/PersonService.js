const dataSource = require("../database/models")
const Services = require("./Services.js");

class PersonService extends Services {
  constructor() {
    super("Person")
    this.registrationService = new Services("Registration")
  }

  async getAllRegistrations(studentId, pagination) {
    const student = await super.getRegisterById(studentId)
    const registrationList = await student.getStudentAllRegistrations({ ...pagination })

    return registrationList
  }

  async getActiveRegistrations(studentId, pagination) {
    const student = await super.getRegisterById(studentId)
    const registrationList = await student.getStudentActiveRegistrations({ ...pagination })

    return registrationList
  }

  async disablePersonAndCancelRegistration(studentId) {
    return dataSource.sequelize.transaction(async (transaction) => {
      await super.updateRegister({ id: studentId }, { active: false }, transaction)
      await this.registrationService.updateRegister({ student_id: studentId }, { status: "cancelado" }, transaction)
    })
  }
}

module.exports = PersonService