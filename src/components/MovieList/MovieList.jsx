import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import MovieItem from 'components/MovieItem/MovieItem';

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies?.map(movie => (
        <MovieItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default MovieList;
