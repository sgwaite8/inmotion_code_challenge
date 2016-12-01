import React from 'react';
import Movie from './movie';

class MovieList extends React.Component {
  render(){
    return(
      <div>
        { this.props.movies.map((movie, index) => <Movie movieId={movie._id} key={index} title={movie.title} actors={movie.actors} genre={movie.genre} year={movie.year} rating={movie.rating}/>)}
      </div>
    )
  }
}

export default MovieList;



