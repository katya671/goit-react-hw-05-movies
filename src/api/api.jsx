import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '3538088f39d2c1c477832294d3b62009';

export const getTrending = async () => {
  const { data } = await axios.get(
    BASE_URL + `trending/all/day?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieDetails = async movie_id => {
  const { data } = await axios.get(
    BASE_URL + `movie/${movie_id}?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCast = async movie_id => {
  const { data } = await axios.get(
    BASE_URL + `movie/${movie_id}/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviews = async movie_id => {
  const { data } = await axios.get(
    BASE_URL + `movie/${movie_id}/reviews?api_key=${API_KEY}`
  );
  return data;
};

export const getMovies = async query => {
  const { data } = await axios.get(
    BASE_URL + `search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data;
};
