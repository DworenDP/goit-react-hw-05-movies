import { MovieAddInfo } from 'components/MovieDetail/MovieAddInfo';
import { MovieDetail } from 'components/MovieDetail/MovieDetail';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader';

const MovieInfo = () => {
  return (
    <>
      <MovieDetail />
      <MovieAddInfo />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieInfo;
