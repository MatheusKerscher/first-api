const DefaultError = require("./DefaultError");

class NotFoundError extends DefaultError {
  constructor(message) {
    super(404, message)
  }
}

module.exports = NotFoundError