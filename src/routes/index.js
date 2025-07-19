const peopleRoutes = require("./peopleRoutes.js")
const categoriesRoutes = require("./categoriesRoutes.js")
const coursesRoutes = require("./coursesRoutes.js")

const routes = (app) => {
  app.use(peopleRoutes)
  app.use(categoriesRoutes)
  app.use(coursesRoutes)
}

module.exports = routes