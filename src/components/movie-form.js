import React from 'react';

class MovieForm extends React.Component {
  _handleSubmit(event){
    event.preventDefault();
    let newMovieTitle = this.refs.newMovieTitle.value;
    let newMovieActors = this.refs.newMovieActors.value;
    let newMovieGenre = this.refs.newMovieGenre.value;
    let newMovieYear = this.refs.newMovieYear.value;
    let newMovieRating = this.refs.newMovieRating.value;
    $.ajax({
      url: 'movies',
      method: 'POST',
      data: {title: newMovieTitle, actors: newMovieActors, genre: newMovieGenre, year: newMovieYear, rating: newMovieRating},
      dataType: 'json'
    }) .done(function(data){
      this.props.addMovie(data);
      this.refs.newMovieTitle.value = '';
      this.refs.newMovieActors.value = '';
      this.refs.newMovieGenre.value = '';
      this.refs.newMovieYear.value = '';
      this.refs.newMovieRating.value = '';
    }.bind(this))
  }
  render(){
    return (
      <form onSubmit={ this._handleSubmit.bind(this) }>
        <input ref="newMovieTitle" type="text" placeholder="Title" />
        <input ref="newMovieActors" type="text" placeholder="Actors" />
        <input ref="newMovieGenre" type="text" placeholder="Genre" />
        <input ref="newMovieYear" type="text" placeholder="Year" />
        <input ref="newMovieRating" type="text" placeholder="Rating" />
        <input type="submit" value="Add New Movie" />
      </form>
    )
  }
}

export default MovieForm;
