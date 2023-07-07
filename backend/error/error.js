class CreateAPIError {
    constructor(message, statusCode) {
        super(message)
        this.statusCode = statusCode
    }
}


const createCustomError = (msg, stutusCode) => {
    return new CreateAPIError(msg, stutusCode)
}

module.exports = { createCustomError, CreateAPIError }