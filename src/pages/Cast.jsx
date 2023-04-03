import defaultPortrait from '../img/no_portrait.png';

const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const { getMovieCredits } = require('servicse/getApi');

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    try {
      getMovieCredits(movieId).then(resp =>
        setMovieCast(resp.cast.splice(0, 10))
      );
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  return (
    <div>
      {movieCast?.length === 0 ? (
        `We currently have no information about this movie`
      ) : (
        <ul>
          {movieCast.map(actor => {
            return (
              <li key={actor.id}>
                <img
                  width="50"
                  src={
                    !actor.profile_path
                      ? defaultPortrait
                      : `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  }
                  alt="cast"
                />
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Cast;
