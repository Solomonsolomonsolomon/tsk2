class CustomError extends Error {
  status;
  #msg;
  constructor(message, status) {
    super(message);
    this.status = status;
    this.#msg = message;
  }
}

module.exports = CustomError;
