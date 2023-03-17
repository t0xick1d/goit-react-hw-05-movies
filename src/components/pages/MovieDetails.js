import React, { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieByid } from 'components/FetchMovies';
import { Suspense } from 'react';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    fetchMovieByid(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  const actualPathBack = location.state === null ? '/' : location.state.from;

  return (
    <>
      {movie ? (
        <>
          <div
            style={{
              display: 'flex',
              padding: '30px',
            }}
          >
            <div>
              <div style={{ marginBottom: '10px' }}>
                <Link to={actualPathBack}>
                  <button>Go back</button>
                </Link>
              </div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt=""
                width="300"
              />
            </div>
            <div style={{ marginLeft: '30px' }}>
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
            </div>
          </div>
          <div
            style={{
              padding: '30px',
            }}
          >
            <div>
              <Link to="cast">Cast</Link>
            </div>
            <div>
              <Link to="reviews">Rewiews</Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
}
