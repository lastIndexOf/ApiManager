const mongoose = require('mongoose')
const docSchema = require('../Schemas/doc.js')

module.exports = mongoose.model('Doc', docSchema)