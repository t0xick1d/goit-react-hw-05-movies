import React, { useState, useEffect } from 'react';
import { fetchSearchMovie } from 'components/FetchMovies';
import { Link, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [inputValue, setInputValue] = useState('');
  const [listMovie, setListMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (query === null) {
      return;
    }
    fetchSearchMovie(query).then(data => {
      setListMovie(data.results);
    });
  }, [query]);

  const onSubmitForm = e => {
    e.preventDefault();
    if (inputValue.trim() === '') {
      return;
    }
    setSearchParams({ query: inputValue });
    fetchSearchMovie(inputValue).then(data => {
      setListMovie(data.results);
      setInputValue('');
    });
  };

  return (
    <div>
      <form onSubmit={onSubmitForm} style={{ paddingLeft: '40px' }}>
        <label htmlFor="searchForm"></label>
        <input
          type="text"
          id="searchForm"
          name="search"
          value={inputValue}
          onChange={e => {
            setInputValue(e.currentTarget.value);
          }}
          autoComplete="false"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {listMovie &&
          listMovie.map(e => {
            return (
              <li key={e.id}>
                <Link
                  to={`/movies/${e.id}`}
                  state={{ from: `/movies?query=${query}` }}
                >
                  <img
                    src={
                      e.poster_path
                        ? `https://image.tmdb.org/t/p/w500${e.poster_path}`
                        : ''
                    }
                    alt=""
                    width="100"
                  />
                  {e.original_title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
export default Movies;
