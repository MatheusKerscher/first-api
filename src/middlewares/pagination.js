const QueryParamsError = require("../errors/QueryParamsError")

 
const pagination = (req, res, next) => {
  try {
    let { page = 1, limit = 5 } = req.query

    page = parseInt(page)
    limit = parseInt(limit)
    
    if(page < 1 || limit < 1) {
      next(new QueryParamsError("Page e limit devem ser números maiores que zero"))
    }

    req.pagination = {
      offset: (page - 1) * limit,
      limit
    }

    next()
  } catch (error) {
    next(error)
  }
}

module.exports = pagination