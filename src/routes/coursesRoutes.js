const { Router } = require("express")

const CouseController = require("../controllers/CourseController.js")
const RegistrationController = require("../controllers/RegistrationController.js")
const pagination = require("../middlewares/pagination.js")

const courseController = new CouseController()
const registrationController = new RegistrationController()

const router = Router()

router
  .get("/courses", pagination, courseController.listCourses)
  .get("/courses/crowded", pagination, registrationController.listCrowdedCourses)
  .get("/courses/:id", courseController.findById)
  .post("/courses", courseController.create)
  .put("/courses/:id", courseController.update)
  .delete("/courses/:id", courseController.delete)

module.exports = router