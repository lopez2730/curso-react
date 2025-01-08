/* eslint-disable react/prop-types */
export function ListOfMovies( { movies } ) {
  return (

    <ul>
      { movies.map( movies => (
        <li key={ movies.id }>
          <h3>{ movies.title }</h3>
          <h3>{ movies.year }</h3>
          <img src={ movies.poster } alt={ movies.title } />
        </li>
      ) ) }
    </ul>

  );
}
export function NoMovieResults() {
  return (
    <p>No se encontraron películas para esta búsqueda</p>
  );
}


export function Movies( { movies } ) {
  const hasMovies = movies?.length > 0;

  return (

    hasMovies
      ? <ListOfMovies movies={ movies } />
      : <NoMovieResults />
  );
}