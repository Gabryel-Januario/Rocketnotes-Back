




class AppError {
  Message
  statusCode

  constructor(Message, statusCode = 400) {
    this.Message = Message
    this.statusCode = statusCode
  }
}

module.exports = AppError
