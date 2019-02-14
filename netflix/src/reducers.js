import { combineReducers } from 'redux';

const discoverList = (state = [], action) => {
  switch(action.type) {
    case 'DISCOVER_MOVIES':
    return [
      ...state,
      ...action.movies
    ]
    
  default:
    return state;
  }
}

const myList = (state = [], action) => {
  switch(action.type) {
    
    case 'ADD_MOVIE':
    for (let i = 0; i < state.length; i++) {
      if (state[i].id === action.id) {
        return state;
      }
    }

    return [
      ...state,
      {
        id: action.id,
        poster_path: action.poster_path,
        favorite_movie: true
      }
    ];

    case 'REMOVE_MOVIE':
      const currentList = [...state];
      return currentList.filter((movie) => movie.id !== action.id);
    default:
      return state;
  }
}

// const categoryList = (state = [], action) => {
//   switch(action.type) {
//   case 'CATEGORY_MOVIES':
//     return [] 
//   }
// } 

const movieApp = combineReducers({
  myList,
  discoverList
});

export default movieApp;