const { Router } = require("express")

const PersonController = require("../controllers/PersonController.js")
const RegistrationController = require("../controllers/RegistrationController.js")
const pagination = require("../middlewares/pagination.js")

const personController = new PersonController()
const registrationController = new RegistrationController()

const router = Router()

router
  .get("/people", pagination, personController.listAll)
  .get("/people/active", pagination, personController.listActivePeople)
  .get("/people/:id", personController.findById)
  .post("/people", personController.create)
  .put("/people/:id", personController.update)
  .put("/people/:id/disable", personController.disablePersonAndCancelRegistrations)
  .get("/people/:student_id/registrations", pagination, personController.listAllRegistrations)
  .get("/people/:student_id/activeRegistrations", pagination, personController.listActiveRegistrations)
  .get("/people/:student_id/registrations/confirmed", pagination, registrationController.listAndCountStudentRegistrations)
  .get("/people/:student_id/registrations/:id", registrationController.findOne)
  .post("/people/:student_id/registrations", registrationController.create)
  .put("/people/:student_id/registrations/:id", registrationController.update)
  .delete("/people/:student_id/registrations/:id", registrationController.delete)

module.exports = router