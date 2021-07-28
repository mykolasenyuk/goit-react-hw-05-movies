import { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchSearcingMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import LoaderSpiner from '../LoaderSpiner/LoaderSpiner';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const [status, setStatus] = useState('idle');
  console.log('page', location);
  const searchQuery = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    if (!searchQuery) return;
    setStatus('pending');
    fetchSearcingMovies(searchQuery).then(movies => {
      if (movies === []) {
        toast.error(`${searchQuery} not finded`);
        setStatus('rejected');
      } else {
        toast.error(`${searchQuery}  finded`);
        setMovies(movies);
        setStatus('resolved');
      }
    });
  }, [searchQuery]);

  const handleSubmit = query => {
    if (!query || query === searchQuery) return;

    setMovies([]);

    history.push({
      ...location,
      search: `query=${query}`,
    });
  };

  switch (status) {
    case 'idle':
      return (
        <div>
          <SearchBar onSubmit={handleSubmit} />
          <ToastContainer />
          <h1>Search your favorites movies here!</h1>
        </div>
      );
    case 'pending':
      return (
        <>
          <SearchBar onSubmit={handleSubmit} />
          <ToastContainer />
        </>
      );
    case 'resolved':
      return (
        <>
          <SearchBar onSubmit={handleSubmit} />
          <MoviesList movies={movies} />
          <ToastContainer />
          <h1>resolv!</h1>
        </>
      );
    case 'rejected':
      return (
        <>
          <SearchBar onSubmit={handleSubmit} />
          <ToastContainer />
          <h1>Search here!</h1>
        </>
      );

    default:
      return;
  }
}
