import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import MoviesPage from './MoviesPage';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchSearcingMovies } from '../../services/api';
// import HomePage from '../views/HomeView';
import { Link } from 'react-router-dom';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('query');
  console.log(searchQuery);

  useEffect(() => {
    if (!searchQuery) return;
    fetchSearcingMovies(searchQuery).then(movies => setMovies(movies));
  }, [searchQuery]);

  const handleSubmit = query => {
    if (!query || query === searchQuery) return;

    setMovies([]);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };
  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
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
