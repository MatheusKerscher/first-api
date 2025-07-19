const { Router } = require("express")

const CategoryController = require("../controllers/CategoryController.js")
const pagination = require("../middlewares/pagination.js")

const categoryController = new CategoryController()

const router = Router()

router
  .get("/categories", pagination, categoryController.listAll)
  .get("/categories/:id", categoryController.findById)
  .post("/categories", categoryController.create)
  .put("/categories/:id", categoryController.update)
  .delete("/categories/:id", categoryController.delete)

module.exports = router