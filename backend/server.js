const express = require('express')
const dotenv = require('dotenv')
const color = require('colors')
const conDB = require('./config/connect')
const userRoute = require("./routes/userRoute")
const { notFound, errorHandlerMidware } = require("./middleware/errorMiddleware")

dotenv.config()
const app = express()
app.use(express.json())


// routes
app.use("/api/user", userRoute)

// error middleware
app.use(notFound)
app.use(errorHandlerMidware)

const PORT = process.env.PORT || 6000
const start = async() => {
    try {
        await conDB()
        app.listen(PORT, console.log(`App running on port ${PORT}`.cyan.bold))
    } catch (err) {
        console.log(err);
    }
}
start()