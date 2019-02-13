import React from 'react';
import { addToFavs, removeFromFavs } from './../actions.js';
import { connect } from 'react-redux';
import btnadd from '../assets/btn-add.svg';
import btnadded from '../assets/btn-added.svg';
import '../App.css';


  const MovieItem = ({movie, ...props}) => {
    
    const handleClick = (movie) => {

      if (movie.favorite_movie !== true) {
        props.addToFavs(movie);
      } else {
        props.removeFromFavs(movie);
      }
    }
    
    const movieUrl = 'https://image.tmdb.org/t/p/w300';
    return (
      <div class="movie-item">
        <img src={movieUrl + movie.poster_path} id={movie.id} alt='poster'
        className="moviePoster" onClick={() => handleClick(movie)} />
        {movie.favorite_movie === true
        ? <img src={btnadded} alt="added" width="50px" className="button"/>
        : <img src={btnadd} alt="removed" width="50px" className="button"/>
        }
      </div>
    )
  }

  const mapStateToProps = (state) => ({
    myList: state.myList
  })

  const mapDispatchToProps = (dispatch) => ({
    addToFavs: (movieId) => dispatch(addToFavs(movieId)),
    removeFromFavs: (movie) => dispatch(removeFromFavs(movie))
  })


export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);
