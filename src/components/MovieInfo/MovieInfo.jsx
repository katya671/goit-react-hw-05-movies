import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieInfo.module.css';
import placeholder from '../../images/image-placeholder.png';

const MovieInfo = ({ movie }) => {
  const { backdrop_path, title, release_date, popularity, overview, genres } =
    movie;
  return (
    <div className={css.movieContainer}>
      <img
        loading="lazy"
        className={css.image}
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : placeholder
        }
        alt={title}
      />
      <div className={css.movieInfo}>
        <h2 className={css.title}>
          {title} ({release_date.slice(0, 4)})
        </h2>
        <p className={css.text}>Popularity: {popularity}</p>
        <h3 className={css.sectionTitle}>Overview</h3>
        <p className={css.text}>{overview}</p>
        <h3 className={css.sectionTitle}>Genres</h3>
        <p className={css.text}>{genres.map(({ name }) => name).join(' · ')}</p>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    backdrop_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    popularity: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MovieInfo;
