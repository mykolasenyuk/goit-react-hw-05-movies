import { lazy, Suspense } from 'react';

import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
// import HomeView from '../views/HomeView';
import MoviesPage from '../MoviesPage/MoviesPage';
// import NotFoundView from '../views/NotFoundView';
// import MovieDetailsView from '../views/MovieDetailsView';

const HomeView = lazy(() =>
  import('../views/HomeView' /*webpackChunkName: "home-view"*/),
);
const NotFoundView = lazy(() =>
  import('../views/NotFoundView' /*webpackChunkName: "not-found-view"*/),
);
const MovieDetailsView = lazy(() =>
  import(
    '../views/MovieDetailsView' /*webpackChunkName: "movie-details-view"*/
  ),
);

export default function App() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<h1>Loading....</h1>}>
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
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
