import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { fetchTrendingMovies } from '../../services/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => setMovies(movies));
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      <ul>
        {movies &&
          movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
}
