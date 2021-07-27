import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';
export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(movies => setMovies(movies));
  }, []);
  const location = useLocation();
  console.log('home', location);

  return <MoviesList movies={movies} />;
}
