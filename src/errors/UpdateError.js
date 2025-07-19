const DefaultError = require("./DefaultError");

class UpdateError extends DefaultError {
  constructor(message) {
    super(400, message)
  }
}

module.exports = UpdateError