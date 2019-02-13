import React, { Component } from 'react';
import './App.css';
import MovieList from './components/movielist';
import { connect } from 'react-redux';
import { addToFavs, removeFromFavs, fetchAllMovies } from './actions.js';

class App extends Component {

  
  fetchDiscoverMovies = () => {
    let url = 'https://movied.herokuapp.com/discover';
    fetch(url)
    .then(res => res.json())
    .then((res) => {
        this.props.fetchAllMovies(res);
    })
  }

  componentDidMount() {
    this.fetchDiscoverMovies()
  }

  render() {
    return (
      <div className="App">
      <h1>Box Office Movies</h1>
      <div className="movie-list"><MovieList movies = {this.props.discoverList}/></div>
      
      <h1>My Favorite Movies</h1>
        {this.props.myList.length === 0
        ? <div></div>
        : <div class="movie-list"><MovieList movies = {this.props.myList}/></div>
        }

      </div>
    );
  }
}

  const mapStateToProps = (state) => ({
    discoverList: state.discoverList,
    myList: state.myList
  })

  const mapDispatchToProps = (dispatch) => ({
    fetchAllMovies: (movies) => dispatch(fetchAllMovies(movies)),
    addToFavs: (movie) => dispatch(addToFavs(movie)),
    removeFromFavs: (movie) => dispatch(removeFromFavs(movie))
  })


export default connect(mapStateToProps, mapDispatchToProps)(App);
