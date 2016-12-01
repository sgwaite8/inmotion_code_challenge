import React from 'react';

class MovieSearch extends React.Component {
  constructor(props){
    super(props);
  }
  _handleSearch(event){
    event.preventDefault();
    this.props.search(this.refs.movieSearch.value);
    // console.log(this.refs.movieSearch.value);
  }
  render(){
    return (<div>
      <form onSubmit={this._handleSearch.bind(this)}>
        <input type="search" ref="movieSearch" placeholder="Search Movies" />
        <input type="submit" value="Search" />
      </form>
    </div>)
  }
}

export default MovieSearch;
