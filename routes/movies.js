var express = require('express');
var router = express.Router();
var Movie = require('../models/movie');


//get all the movies
router.get('/', function(req, res, next) {
  Movie.find({}, function(err, movies){
    if (err) console.log(err);
    res.json(movies)
  });
});

router.get('/:id', function(req, res, next){
  Movie.findById(req.params.id, function(err, user){
    res.status(200).json(movies);
  });
});

//add a movie and save them to the database
router.post('/', function(req, res, next){
 Movie.create({
  title: req.body.title,
  actors: req.body.actors,
  genre: req.body.genre,
  year: req.body.year,
  rating: req.body.rating
 }, function(err, movie){
  res.status(200).json(movie);
 });
});

//edit a movie
router.put('/:id', function(req, res, next){
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true},
    function(err, movie){
    if (err) console.log(err);
    res.json(movie);
  });
});

//to delete a movie
router.delete('/:id', function(req, res, next){
  Movie.findByIdAndRemove(req.params.id, function(err, movie){
    if (err) console.log(err);
    res.json(movie);
  });
});

module.exports = router;
