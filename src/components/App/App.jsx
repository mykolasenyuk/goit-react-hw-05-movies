import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import MoviesPage from '../MoviesPage/MoviesPage';
import LoaderSpiner from '../LoaderSpiner/LoaderSpiner';
import { ToastContainer } from 'react-toastify';
import Container from '../Container/Container';
const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: "home-view"*/),
);
// const NotFoundView = lazy(() =>
//   import('../views/NotFoundView' /*webpackChunkName: "not-found-view"*/),
// );
const MovieDetailsView = lazy(() =>
  import(
    '../MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "movie-details-view"*/
  ),
);

export default function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpiner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsView />
          </Route>

          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer />
    </Container>
  );
}
