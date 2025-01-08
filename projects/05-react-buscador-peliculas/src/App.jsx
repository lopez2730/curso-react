import './App.css';
import responseMovies from './mocks/whit-results.json';
// import withoutResults from './mocks/no-result.json';
import { Movies } from './components/Movies';

function App() {
  const movies = responseMovies.Search;

  const mappedMoviees = movies?.map( movie => ( {
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  } ) );

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form'>
          <input placeholder='Avengers, Marvel, Dc, Batman' />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={ mappedMoviees } />
      </main>
    </div>
  );
}

export default App;
