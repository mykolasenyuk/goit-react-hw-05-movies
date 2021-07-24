import { useEffect, useState } from 'react';
// import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchReviewById } from '../../services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetchReviewById(movieId);
    console.log(fetchReviewById(movieId).then(data => setReview(data)));
  }, [movieId]);

  return (
    <div>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
