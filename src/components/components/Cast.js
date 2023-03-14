import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovie } from 'components/FetchMovies';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCastMovie(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId, setCast]);
  return (
    <>
      {cast
        ? cast.map(e => {
            const imgPath = e.profile_path
              ? `https://image.tmdb.org/t/p/w500${e.profile_path}`
              : '';
            return (
              <div key={e.credit_id}>
                <img src={imgPath} alt="" width="100" />
                <h3>{e.name}</h3>
                <div>Character: {e.character}</div>
                <br />
              </div>
            );
          })
        : ''}
    </>
  );
}

/*
<div>
  <img
    src={`https://image.tmdb.org/t/p/w500${e.profile_path}`}
    alt=""
    width="100"
  />
  <h3>{e.name}</h3>
  <div>Character: {e.character}</div>
</div>
*/
