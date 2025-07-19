class DefaultError extends Error {
  constructor(status = 500, message = "Ocorreu um erro interno no sistema") {
    super()
    this.status = status
    this.message = message
  }

  sendErrorResponse(res) {
    res.status(this.status).json({
      status: this.status,
      message: this.message
    })
  }
}

module.exports = DefaultError