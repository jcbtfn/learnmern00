const mongoose = require('mongoose')

const composerSchema = mongoose.Schema({
    name: String,
    complete_name: String,
    epoch: String,
    birth: Date,
    death: Date,
    popular: Number,
    reccomended: Number,
    works: [{
      title: String,
      subtitle: String,
      searchterms: String,
      popular: String,
      reccomended: String,
      genre: String
    }]
  }
)

const Composer = mongoose.model('composer', composerSchema)

module.exports = Composer