const mongoose = require('mongoose')
const Schema = mongoose.Schema

const listSchema = new Schema({
    name:{ type: String, required: true},
    image:{ type: String, required: true},
    price:{ type: Number, required: true},
    edition:{ type: String, required: true},
})

module.exports = mongoose.model('Lists', listSchema)
