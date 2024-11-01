import './App.css';
import { useCatFact } from './hook/useCatFact';
import { useCatImage } from './hook/useCatImage';

export function App() {
  const { refreshFact, fact } = useCatFact();
  const { imageUrl } = useCatImage( { fact } );

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={ handleClick }>Get new fact</button>
      { fact && <p>{ fact }</p> }
      { imageUrl && <img src={ imageUrl } alt={ `Image extracted using the first trhee words for ${ fact }` } /> }
    </main>
  );
}