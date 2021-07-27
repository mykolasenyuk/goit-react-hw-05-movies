import { useEffect, useState, lazy, Suspense } from 'react';
import {
  Link,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import Cast from '../Cast/Cast';
// import Reviews from '../Reviews/Reviews';
import { fetchMovieById } from '../../services/api';

const Cast = lazy(() => import('../Cast/Cast' /*webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /*webpackChunkName: "review"*/),
);

export default function MovieDetailsView() {
  const { url } = useRouteMatch();
  //   console.log({ url });
  //   const match = useRouteMatch();
  //   console.log(match);
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log('details', location);

  useEffect(() => {
    fetchMovieById(movieId).then(movie => setMovie(movie));
    // console.log(fetchMovieById(movieId));
  }, [movieId]);

  const onBackBtn = () => {
    history.push(location.state?.from ?? '/movies');
  };

  return (
    <>
      {movie && (
        <div>
          <button type="button" onClick={onBackBtn}>
            Go back
          </button>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
          />
          <h2>
            {movie.title} ({movie.release_date.slice(0, 4)})
          </h2>
          <p>User Score: {movie.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres &&
              movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
          </ul>
          <hr />
          <div>
            <p>Additional information</p>
            <Link to={`${url}/cast`}>Cast</Link>
            <Link to={`${url}/reviews`}>Reviews</Link>
            <hr />
          </div>
          <Suspense fallback={<h1>loading////</h1>}>
            <Switch>
              <Route path="/movies/:movieId/cast">
                <Cast />
              </Route>
              <Route path="/movies/:movieId/reviews">
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </div>
      )}
    </>
  );
}
