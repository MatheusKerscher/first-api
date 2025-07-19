const { ValidationError } = require("sequelize");
const DefaultError = require("../errors/DefaultError");
const ValidationFieldError = require("../errors/ValidationFieldError");
const NotFoundError = require("../errors/NotFoundError");
const UpdateError = require("../errors/UpdateError");
const QueryParamsError = require("../errors/QueryParamsError");

// eslint-disable-next-line no-unused-vars
function handleErrors(err, req, res, next) {
  if(err instanceof ValidationError) {
    new ValidationFieldError(err.message).sendErrorResponse(res)
  } else if(err instanceof NotFoundError || err instanceof UpdateError || err instanceof QueryParamsError) {
    err.sendErrorResponse(res)
  } else {
    console.log(err);
    
    new DefaultError().sendErrorResponse(res)
  }
}

module.exports = handleErrors