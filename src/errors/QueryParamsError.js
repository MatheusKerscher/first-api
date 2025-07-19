const DefaultError = require("./DefaultError");

class QueryParamsError extends DefaultError {
  constructor(message) {
    super(404, message)
  }
}

module.exports = QueryParamsError