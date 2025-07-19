const DefaultError = require("./DefaultError");

class ValidationFieldError extends DefaultError {
  constructor(message) {
    const errorMessage = `Os seguintes erros foram encontrados: ${message.split(",")
        .map(msg => msg.split(":")[1]?.trim())
        .filter(Boolean)
        .join(", ")
      }`

    super(404, errorMessage)
  }
}

module.exports = ValidationFieldError