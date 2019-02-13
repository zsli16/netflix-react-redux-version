

// export const updateCategory = (categoryId) => ({
//   type: 'CATEGORY_MOVIES',
//   id: categoryId,
//   name: categoryId.name
// });

export const addToFavs = (movie) => ({
  type: 'ADD_MOVIE',
  id: movie.id,
  poster_path: movie.poster_path
});

export const removeFromFavs = (movie) => ({
  type: 'REMOVE_MOVIE',
  id: movie.id,
});

export const fetchAllMovies = (movies) => ({
  type: 'DISCOVER_MOVIES',
  movies: movies
});

