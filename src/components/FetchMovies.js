const defaultPath = 'https://api.themoviedb.org/3/';
const KEY = '7b36b29d9e4c5abba40ea0b1383df48c';

export const fetchTrends = () => {
  return fetch(`${defaultPath}/trending/movie/week?api_key=${KEY}`).then(res =>
    res.json()
  );
};
export const fetchMovieByid = id => {
  return fetch(`${defaultPath}movie/${id}?api_key=${KEY}`).then(res =>
    res.json()
  );
};
export const fetchCastMovie = id => {
  return fetch(
    `${defaultPath}/movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(res => res.json());
};
export const fetchReviewsMovie = id => {
  return fetch(
    `${defaultPath}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  ).then(res => res.json());
};
export const fetchSearchMovie = name => {
  return fetch(
    `${defaultPath}search/movie?api_key=${KEY}&language=en-US&query=${name}&page=1&include_adult=false`
  ).then(res => res.json());
};
