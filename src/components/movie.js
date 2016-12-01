import React from 'react';

class Movie extends React.Component {
  constructor(){
    super();
    this.state = {display: true};
  }
  _handleClick(){
    var confirmed = confirm("Are you sure you want to delete this movie?");
    if (confirmed){
      $.ajax({
        method: 'DELETE',
        url: '/movies/' + this.props.movieId,
        dataType: 'json'
      })
        .done(function(data){
          this.setState({display: false});
        }.bind(this));
    }
  }
  render(){
    if (this.state.display) {
      return (
    <div  >
      <h3>{this.props.title}</h3>
      <p >{this.props.actors}</p>
      <p >{this.props.genre}</p>
      <p >{this.props.year}</p>
      <p >{this.props.rating}</p>
      <i onClick={ this._handleClick.bind(this) } className="fa fa-trash fa-2x" aria-hidden="true"></i>
    </div>);
    } else {
      return false;
    }
  }
}

export default Movie;
