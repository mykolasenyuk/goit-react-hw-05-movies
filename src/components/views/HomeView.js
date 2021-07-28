import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../services/api';
import MoviesList from '../MoviesList/MoviesList';
import LoaderSpiner from '../LoaderSpiner/LoaderSpiner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');
    fetchTrendingMovies().then(movies => {
      if (movies.lenght === 0) {
        setStatus('rejected');
        toast.error(`Error!`);
      } else {
        toast.error(` finded`);
      }
      setMovies(movies);
      setStatus('resolved');
    });
  }, []);

  switch (status) {
    case 'idle':
      return <div></div>;

    case 'pending':
      return <LoaderSpiner />;
    case 'resolved':
      return (
        <div>
          <MoviesList movies={movies} />
          <ToastContainer />
        </div>
      );
    case 'rejected':
      return (
        <div>
          <h1>Something goes wrong!</h1>
        </div>
      );

    default:
      return;
  }
}
