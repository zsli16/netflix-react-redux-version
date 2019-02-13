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
      // state.forEach(movie => {
      //   if (movie.id === action.id) return state;
      // })
      return [
        {
          id: action.id,
          poster_path: action.poster_path,
          favorite_movie: true
        }, ...state
      ];
    case 'REMOVE_MOVIE':
      const currentList = [...state];
      for (let i = 0; i < currentList.length; i++) {
        if (currentList[i].id === action.id) {
          currentList[i].favorite_movie = false;
          return currentList.splice(currentList[i], 1);
        }
      }
      return currentList;
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