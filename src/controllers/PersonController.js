const Controller = require("./Controller.js")
const PersonService = require("../services/PersonService.js")

const personService = new PersonService()

class PersonController extends Controller {
  constructor() {
    super(personService)

    this.listAllRegistrations = this.listAllRegistrations.bind(this)
    this.listActiveRegistrations = this.listActiveRegistrations.bind(this)
    this.listActivePeople = this.listActivePeople.bind(this)
    this.disablePersonAndCancelRegistrations = this.disablePersonAndCancelRegistrations.bind(this)
  }

  async listAllRegistrations(req, res, next) {
    try {
      const { student_id: studentId } = req.params
      const registrationList = await personService.getAllRegistrations(studentId, { ...req.pagination })

      res.json(registrationList)
    } catch (error) {
      next(error)
    }
  }

  async listActiveRegistrations(req, res, next) {
    try {
      const { student_id: studentId } = req.params
      const registrationList = await personService.getActiveRegistrations(studentId, { ...req.pagination })

      res.json(registrationList)
    } catch (error) {
      next(error)
    }
  }

  async listActivePeople(req, res, next) {
    try {
      const peopleList = await personService.getAllRegistersByScope("activeRegisters", { ...req.pagination })

      res.json(peopleList)
    } catch (error) {
      next(error)
    }
  }

  async disablePersonAndCancelRegistrations(req, res, next) {
    try {
      const { id } = req.params
      await personService.disablePersonAndCancelRegistration(id)

      res.status(204)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = PersonController