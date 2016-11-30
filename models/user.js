var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  title: {type: String, required: true},
  actors: {type: String, required: true},
  genre: {type: String, required: true}
  year: {type: String, required: true}
  rating: {type: String, required: true}
})

var User = mongoose.model('User', userSchema);
//make this available to our other files
module.exports = User;
