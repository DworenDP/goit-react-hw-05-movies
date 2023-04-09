import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMoviesDetails } from 'servicse/getApi';
import { MovieDetailCard } from './MovieDetailCard';
import css from './MovieDetail.module.css';

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    try {
      getMoviesDetails(movieId).then(resp => setMovieDetails(resp));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div className={css.cardContainer}>
      <button
        type="button"
        className={css.goBackBtn}
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
      <MovieDetailCard movie={movieDetails} />
    </div>
  );
};
