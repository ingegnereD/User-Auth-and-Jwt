const mongoose = require('mongoose')


const conDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {})
        console.log(`MongoDB connected successfully via ${conn.connection.host}`.yellow.bold)
    } catch (err) {
        console.log(err);
    }
}

module.exports = conDB