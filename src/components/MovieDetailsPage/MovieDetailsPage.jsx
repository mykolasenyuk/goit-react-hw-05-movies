import { useEffect, useState, lazy, Suspense, useRef } from 'react';
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useLocation,
  useHistory,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from '../../services/api';
import LoaderSpiner from '../LoaderSpiner/LoaderSpiner';
import s from './MovieDetails.module.css';

const Cast = lazy(() => import('../Cast/Cast' /*webpackChunkName: "cast"*/));
const Reviews = lazy(() =>
  import('../Reviews/Reviews' /*webpackChunkName: "review"*/),
);

export default function MovieDetailsView() {
  const { url } = useRouteMatch();

  const [movie, setMovie] = useState(null);
  const [urlLocation, setUrlLocation] = useState('');
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log('details', location);

  const locationParam = () => {
    const path = location.state?.from.pathname;
    const search = location.state?.from.search;
    setUrlLocation({
      path: path,
      search: search,
    });
  };

  console.log('ref', useRef(location.state?.from).current);
  console.log('search', location.state?.from.search);
  // const ref =useRef(location.state?.from).current
  useEffect(() => {
    fetchMovieById(movieId).then(movie => setMovie(movie));
    // console.log(fetchMovieById(movieId));
  }, [movieId]);

  useEffect(() => {
    locationParam();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onBackBtn = () => {
    history.push(`${urlLocation.path}${urlLocation.search}` ?? '/');
  };

  return (
    <>
      {movie && (
        <div>
          <button type="button" onClick={onBackBtn} className={s.btn}>
            Go back
          </button>

          <div className={s.movieContainer}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `https://www.peakndt.com/wp-content/uploads/2017/02/No_picture_available.png`
              }
              alt={movie.original_title}
              className={s.movieImage}
            />
            <div className={s.movieDetailsContainer}>
              <h2 className={s.movieTitle}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={s.text}>
                User Score:
                <span className={s.movieScore}>{movie.vote_average * 10}%</span>
              </p>
              <h3 className={s.movieDescrTitle}>Overview</h3>
              <p className={s.movieDescription}>{movie.overview}</p>
              <h3 className={s.movieDescrTitle}>Genres:</h3>
              <ul>
                {movie.genres &&
                  movie.genres.map(genre => (
                    <li key={genre.id} className={s.genreItem}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
          <hr />
          <div className={s.additionalInfCont}>
            <p className={s.movieDescrTitle}>Additional information</p>
            <NavLink
              to={`${url}/cast`}
              className={s.navLink}
              activeClassName={s.navLinkactive}
            >
              Cast
            </NavLink>
            <NavLink
              to={`${url}/reviews`}
              className={s.navLink}
              activeClassName={s.navLinkactive}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense fallback={<LoaderSpiner />}>
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
