import { useEffect, useState } from 'react';
// import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/api';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetchCastById(movieId).then(cast => setActors(cast));
    // console.log(fetchCastById(movieId));
  }, [movieId]);

  return (
    <div>
      {actors && (
        <ul>
          {actors.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
