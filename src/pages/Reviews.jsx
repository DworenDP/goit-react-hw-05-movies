import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieReviews } from '../servicse/getApi';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    try {
      getMovieReviews(movieId).then(resp => setMovieReviews(resp.results));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {' '}
      {movieReviews?.length === 0 ? (
        `We currently have no reviews for this movie`
      ) : (
        <ul>
          {movieReviews.map(review => {
            return (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Reviews;
