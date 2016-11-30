var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({
  title: {type: String, required: true},
  actors: {type: String, required: true},
  genre: {type: String, required: true}
  year: {type: String, required: true}
  rating: {type: String, required: true}
})

var Movie = mongoose.model('Movie', movieSchema);
//make this available to our other files
module.exports = Movie;
