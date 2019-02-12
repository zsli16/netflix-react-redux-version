import React, { Component } from 'react';
import './App.css';
import './components/discover.js';


class Discover extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      discover: [],
      mylist: []
    };
  }

  fetchDiscoverMovies() {
    let url = 'https://movied.herokuapp.com/discover';
    fetch(url)
      .then(res => res.json())
      .then((movies) => {
        this.setState({
          discover: movies
        })
    })
  }

  componentDidMount() {
    this.fetchDiscoverMovies()
  }

  addToList(data) {
    const newArray = this.state.mylist.slice();
    newArray.push(data);
    this.setState({
      mylist: newArray
    })
  }

  render() {
    const { discover } = this.state;
    const { mylist } = this.state;

    const movieUrl = 'https://image.tmdb.org/t/p/w300';
    return (
      <div>
        <ul className="discoverMovieList">  
          {discover.map(movie => 
            <li key={movie.id} className="discoverMovie">
              <img src={movieUrl + movie.poster_path} alt='poster' className="moviePoster"/>
              <button className='addToList' onClick={() => this.addToList(movie)}>Add to List</button>
            </li>
          )}
        </ul>
        <ul className="myMovieList">  
          {mylist.map(movie => 
            <li key={movie.id} className="myMovie">
              <h1>Hello</h1>
              <img src={movieUrl + movie.poster_path} alt='poster' className="moviePoster"/>
            </li>
          )}
        </ul>
      </div>   
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Movies</h1>
        <Discover listName ='mymovies'/>
        <h1>Box Office Movies</h1>
        <Discover listName ='discovermovies'/>
      </div>
    );
  }
}


export default App;
