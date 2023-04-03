import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
const API_KEY = `?api_key=ae71ad5454080756cca8e19f063ac455`;

export const getTrending = async () => {
  const response = await axios.get(`/trending/movie/day${API_KEY}`);

  return response.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

export const searchMovies = async query => {
  const response = await axios.get(
    `/search/movie${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  );

  return response.data.results.map(({ id, title }) => {
    return { id, title };
  });
};

export const getMoviesDetails = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieCredits = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/credits${API_KEY}&language=en-US`
  );
  return response.data;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `/movie/${movieId}/reviews${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
