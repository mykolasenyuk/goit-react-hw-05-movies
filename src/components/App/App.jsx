import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import HomeView from '../views/HomeView';
import Movies from '../views/Movies';
import NotFoundView from '../views/NotFoundView';
import MovieDetailsView from '../views/MovieDetailsView';
export default function App() {
  return (
    <div>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/movies" exact>
          <Movies />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch>
    </div>
  );
}
