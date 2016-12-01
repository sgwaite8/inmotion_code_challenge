import React from 'react';
import MovieForm from './movie-form';
import MovieList from './movie-list';

class MovieContainer extends React.Component {
  constructor(){
    super();
    this.state = {movies: []};
  }
  componentDidMount(){
    $.ajax({
      method: 'GET',
      url: '/movies',
      dataType: 'json'
    }) .done(function(data){
      this.setState({movies: data})
    }.bind(this))
  }
  _addMovie(newMovie){
    let currentMovies = this.state.movies;
    currentMovies.push(newMovie);
    this.setState({movies: currentMovies});
  }
  render(){
    return (
      <div>
        <MovieForm addMovie={ this._addMovie.bind(this) } />
        <MovieList movies={ this.state.movies } />
      </div>
    )
  }
}

export default MovieContainer;
