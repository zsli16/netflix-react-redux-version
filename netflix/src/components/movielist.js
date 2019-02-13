import React from 'react';
import MovieItem from './movieitem';
import '../App.css';

const MovieList = ({movies}) => {
  return movies.map(movie => (<MovieItem movie = {movie} key={movie.id}/>))
}

// const MovieList = (props) => {
//   return props.movies.map(movie => (<MovieItem movie = {movie} key={movie.id}/>))
// }

export default MovieList;