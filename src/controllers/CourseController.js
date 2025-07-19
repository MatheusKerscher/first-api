
const { Op } = require("sequelize")

const Controller = require("./Controller.js")
const CourseService = require("../services/CourseService.js")

const courseService = new CourseService()

class CourseController extends Controller {
  constructor() {
    super(courseService)

    this.listCourses = this.listCourses.bind(this)
  }

  async listCourses(req, res, next) {
    try {
      const { startDate, endDate } = req.query
      const where = {}

      startDate || endDate ? where.start_date = {} : null
      startDate ? where.start_date[Op.gte] = startDate : null
      endDate ? where.start_date[Op.lte] = endDate : null

      const courseList = await courseService.getAllRegisters({ ...req.pagination, where })

      res.json(courseList)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = CourseController