const API_KEY = 'f9e390b2';

export const searchMovies = async ( { search } ) => {
  if ( search === '' ) return null;

  try {
    const response = await fetch( `http://www.omdbapi.com/?apikey=${ API_KEY }&s=${ search }` );
    const json = await response.json();


    const movies = json.Search;

    return movies?.map( movie => ( {
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    } ) );
    // eslint-disable-next-line no-unused-vars
  } catch ( e ) {
    throw new Error( 'Error al buscar película' );
  }
};