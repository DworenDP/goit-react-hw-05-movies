import { MovieList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { getTrending } from 'servicse/getApi';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrending().then(resp => setTrendMovies(resp));
  }, []);

  return <MovieList movies={trendMovies} />;
};

export default HomePage;
