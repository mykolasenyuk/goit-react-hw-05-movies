import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
// import MoviesPage from './MoviesPage';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchSearcingMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  console.log('page', location);
  const searchQuery = new URLSearchParams(location.search).get('query');
  // console.log(searchQuery);

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
      <MoviesList movies={movies} />
    </>
  );
}
