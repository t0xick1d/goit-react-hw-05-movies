import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrends } from '../FetchMovies';

const Home = () => {
  const [title, setTitle] = useState([]);
  useEffect(() => {
    fetchTrends().then(data => {
      setTitle(data.results);
    });
  }, []);
  return (
    <div>
      <h2 style={{ paddingLeft: '40px' }}>Trending today</h2>
      <ul>
        {title.map(e => {
          return (
            <li key={e.id}>
              <Link to={`/movies/${e.id}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
