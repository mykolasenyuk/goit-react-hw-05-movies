import { Link, useLocation } from 'react-router-dom';
import s from './MovieList.module.css';
export default function MoviesList({ movies }) {
  const location = useLocation();
  return (
    <ul className={s.gallery}>
      {movies &&
        movies.map(movie => (
          <li key={movie.id} className={s.galleryItem}>
            <Link
              to={{
                pathname: `/movies/${movie.id}`,
                state: { from: location },
              }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className={s.galleryImage}
              ></img>
            </Link>
            <h2 className={s.galleryTitle}>
              {movie.title}
              {/* ({movie.release_date.slice(0, 4)}) */}
            </h2>
          </li>
        ))}
    </ul>
  );
}
