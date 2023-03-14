import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchMovieByid } from 'components/FetchMovies';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    fetchMovieByid(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  return (
    <>
      {movie ? (
        <div>
          <div>
            <button>Go back</button>
          </div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt=""
            width="300"
          />
          <h3>{movie.original_title}</h3>
          <div>User score: {}</div>
          <h4>Overview</h4>
          <div>{movie.overview}</div>
          <h4>Genres</h4>
          <div>
            {movie.genres.map(e => {
              return ` ${e.name}`;
            })}
          </div>
          <h3>Additional information</h3>
          <Link to="cast">Cast</Link>
          <br />
          <Link to="reviews">Rewiews</Link>
          <Outlet />
        </div>
      ) : (
        ''
      )}
    </>
  );
}
