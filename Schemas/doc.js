const mongoose = require('mongoose')
const Schema = mongoose.Schema

let docSchema = new Schema({
  title: {
    type: String,
    default: '新建文档'
  },
  apis: [
    {
      type: {
        type: String,
        default: 'GET'
      },
      url: {
        type: String,
        default: 'localhost'
      },
      query: {
        type: Object,
        default: {}
      }
    }
  ],
  meta: {
    createAt: {
      type: Date,
      default: new Date()
    },
    updateAt: {
      type: Date,
      default: new Date()
    }
  }
})

docSchema.pre('save', function(next) {
  if (this.isNew) {
    this.updateAt = this.createAt = new Date()
  } else {
    this.updateAt = new Date()
  }

  next()
})

docSchema.statics = {}
docSchema.methods = {}

module.exports = docSchema