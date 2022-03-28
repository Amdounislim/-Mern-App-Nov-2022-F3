const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number },
})

const user = mongoose.model("user", userSchema)
module.exports = user