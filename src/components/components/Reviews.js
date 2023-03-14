import React, { useState, useEffect } from 'react';
import { fetchReviewsMovie } from 'components/FetchMovies';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [status, setStatus] = useState('');
  useEffect(() => {
    fetchReviewsMovie(movieId).then(data => {
      if (data.results.length === 0) {
        setStatus('noComent');
        return;
      }
      setReviews(data.results);
      setStatus('show');
    });
  }, [movieId]);

  return (
    <>
      {status === 'show' &&
        reviews.map(e => {
          return (
            <div key={e.id}>
              <h3>{e.author}</h3>
              <p>{e.content}</p>
            </div>
          );
        })}
      {status === 'noComent' && (
        <div>We don`t have any reviews for this movie</div>
      )}
    </>
  );
};

export default Reviews;
