import React, { useEffect, useState } from 'react';
import { getMovieCast } from 'api/api';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import placeholder from '../../images/image-placeholder.png';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiMovieCast = async () => {
      try {
        setIsLoading(true);
        const { cast } = await getMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    apiMovieCast();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {cast && !isLoading && (
        <ul className={css.list}>
          {cast?.map(({ id, profile_path, name, character }) => (
            <li key={id} className={css.item}>
              <img
                loading="lazy"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : placeholder
                }
                alt={name}
                width={200}
                className={css.image}
              />

              <h3 className={css.name}>{name}</h3>
              <p className={css.character}>{character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cast;
