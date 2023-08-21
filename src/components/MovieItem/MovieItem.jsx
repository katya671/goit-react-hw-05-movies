import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieItem.module.css';
import placeholder from '../../images/image-placeholder.png';

const MovieItem = ({ movie }) => {
  const location = useLocation();
  const { title, name, id, poster_path } = movie;
  return (
    <li className={css.item}>
      <Link
        to={`/movies/${id}`}
        state={{ from: location }}
        className={css.link}
      >
        <img
          loading="lazy"
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : placeholder
          }
          alt={title}
          width={270}
          className={css.image}
        />
        <h2 className={css.title}>{title || name}</h2>
      </Link>
    </li>
  );
};

MovieItem.propTypes = {};

export default MovieItem;
