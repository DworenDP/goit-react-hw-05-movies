import { useEffect, useState, useRef } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMoviesDetails } from 'servicse/getApi';
import { MovieDetailCard } from './MovieDetailCard';
import css from './MovieDetail.module.css';

export const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    try {
      getMoviesDetails(movieId).then(resp => setMovieDetails(resp));
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div className={css.cardContainer}>
      <Link to={goBack.current}>
        <button type="button" className={css.goBackBtn}>
          Go back
        </button>
      </Link>
      <MovieDetailCard movie={movieDetails} />
    </div>
  );
};
