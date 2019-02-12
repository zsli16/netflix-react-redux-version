import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './discover.css';

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };

  }
  getInitialState() {
    let url = 'https://movied.herokuapp.com/discover';
    fetch(url).then(res => res.json()).then((movie) => {
      console.log(movie);
    });
  }

  componentDidMount() {
    this.getInitialState();
  }

  render() {
    return (
    <div class="movie-container">
     <h1>Box Office Movies</h1>
     <Discover movies={this.state.movies}/>
    </div>
    );

  }


}

ReactDOM.render(
  Discover,
    document.getElementById('root')
);
