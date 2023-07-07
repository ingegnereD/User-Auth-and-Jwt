const { CreateAPIError } = require('../error/error')

const notFound = (req, res) => res.status(404).send("Page not found")



const errorHandlerMidware = (err, req, res, next) => {
    if (err instanceof CreateAPIError) {
        res.status(err.statusCode).json({ msg: err.message })
    }
    res.status(500).json({ msg: "Something wwent wrong try again" })
}


module.exports = { notFound, errorHandlerMidware }