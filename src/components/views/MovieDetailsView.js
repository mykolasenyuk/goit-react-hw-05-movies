// import { useEffect, useState, lazy, Suspense, useRef } from 'react';
// import {
//   NavLink,
//   Switch,
//   Route,
//   useRouteMatch,
//   useLocation,
//   useHistory,
// } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// import { fetchMovieById } from '../../services/api';
// import LoaderSpiner from '../LoaderSpiner/LoaderSpiner';

// const Cast = lazy(() => import('../Cast/Cast' /*webpackChunkName: "cast"*/));
// const Reviews = lazy(() =>
//   import('../Reviews/Reviews' /*webpackChunkName: "review"*/),
// );

// export default function MovieDetailsView() {
//   const { url } = useRouteMatch();

//   const [movie, setMovie] = useState(null);
//   const [urlLocation, setUrlLocation] = useState('');
//   const { movieId } = useParams();
//   const history = useHistory();
//   const location = useLocation();
//   console.log('details', location);

//   const locationParam = () => {
//     const path = location.state?.from.pathname;
//     const search = location.state?.from.search;
//     setUrlLocation({
//       path: path,
//       search: search,
//     });
//   };

//   console.log('ref', useRef(location.state?.from).current);
//   console.log('search', location.state?.from.search);
//   // const ref =useRef(location.state?.from).current
//   useEffect(() => {
//     fetchMovieById(movieId).then(movie => setMovie(movie));
//     // console.log(fetchMovieById(movieId));
//   }, [movieId]);

//   useEffect(() => {
//     locationParam();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const onBackBtn = () => {
//     history.push(`${urlLocation.path}${urlLocation.search}` ?? '/');
//   };

//   return (
//     <>
//       {movie && (
//         <div>
//           <button type="button" onClick={onBackBtn}>
//             Go back
//           </button>

//           <div>
//             <img
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.original_title}
//             />
//             <h2>
//               {movie.title} ({movie.release_date.slice(0, 4)})
//             </h2>
//             <p>User Score: {movie.vote_average * 10}%</p>
//             <h2>Overview</h2>
//             <p>{movie.overview}</p>
//             <h2>Genres</h2>
//             <ul>
//               {movie.genres &&
//                 movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
//             </ul>
//           </div>
//           <hr />
//           <div>
//             <p>Additional information</p>
//             <NavLink to={`${url}/cast`}>Cast</NavLink>
//             <NavLink to={`${url}/reviews`}>Reviews</NavLink>
//             <hr />
//           </div>
//           <Suspense fallback={<LoaderSpiner />}>
//             <Switch>
//               <Route path="/movies/:movieId/cast">
//                 <Cast />
//               </Route>
//               <Route path="/movies/:movieId/reviews">
//                 <Reviews />
//               </Route>
//             </Switch>
//           </Suspense>
//         </div>
//       )}
//     </>
//   );
// }
