const { Sequelize } = require("sequelize")

const Controller = require("./Controller.js")
const RegistrationService = require("../services/RegistrationService.js")
const NotFoundError = require("../errors/NotFoundError.js")

const registrationService = new RegistrationService()

class RegistrationController extends Controller {
  constructor() {
    super(registrationService)

    this.listAndCountStudentRegistrations = this.listAndCountStudentRegistrations.bind(this)
    this.listCrowdedCourses = this.listCrowdedCourses.bind(this)
  }

  async listAndCountStudentRegistrations(req, res, next) {
    try {
      const { student_id } = req.params
      const registrationListAndCount = await registrationService.getRegistersAndCount({
        ...req.pagination,
        where: {
          student_id,
          status: "matriculado"
        }
      })

      if (registrationListAndCount) {
        res.json({
          total: registrationListAndCount.count,
          registrations: registrationListAndCount.rows
        })
      } else {
        next(new NotFoundError("Nenhum registro encontrado"))
      }
    } catch (error) {
      next(error)
    }
  }

  async listCrowdedCourses(req, res, next) {
    try {
      const maximumCapacity = 1

      const crowdedCoursesList = await registrationService.getRegistersAndCount({
        ...req.pagination,
        attributes: ["course_id"],
        group: ["course_id"],
        having: Sequelize.literal(`COUNT(course_id) > ${maximumCapacity}`)
      })

      res.json(crowdedCoursesList.count)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = RegistrationController