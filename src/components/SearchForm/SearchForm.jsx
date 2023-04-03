import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from 'servicse/getApi';
import { SearchBox } from './SearchBox/SearchBox';
import { MovieList } from 'components/MoviesList/MoviesList';
import { NoResults } from './NoResults';

export const SearchForm = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useSearchParams();
  const query = searchQuery.get('query') ?? '';

  const handleSubmit = searchResult => {
    setSearchQuery(searchResult !== '' ? { query: searchResult } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    try {
      searchMovies(query).then(resp => setMovies(resp));
    } catch (error) {
      console.log(error);
    }
  }, [query]);

  return (
    <div style={{ position: 'relative' }}>
      <SearchBox onSubmitInput={handleSubmit} />
      {movies.length !== 0 && <MovieList movies={movies} />}
      {movies.length === 0 && query !== '' && <NoResults search={query} />}
    </div>
  );
};
