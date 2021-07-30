import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/api';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  useEffect(() => {
    fetchCastById(movieId).then(cast => setActors(cast));
  }, [movieId]);

  return (
    <div className={s.actorsContainer}>
      {actors && (
        <ul className={s.actorList}>
          {actors.map(actor => (
            <li key={actor.id} className={s.listItem}>
              <img
                src={`https://image.tmdb.org/t/p/w400${actor.profile_path}`}
                alt={actor.name}
                className={s.actorsPhoto}
              />
              <p className={s.actorsName}>{actor.name}</p>
              <p className={s.actorsCharacter}>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
