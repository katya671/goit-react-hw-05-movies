import React, { useEffect, useState } from 'react';
import { getMovieReviews } from 'api/api';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiMovieReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovieReviews(movieId);
        setReviews(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    apiMovieReviews();
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && reviews?.length === 0 && (
        <p>We don't have any reviews for this movie.</p>
      )}
      {reviews && (
        <ul className={css.list}>
          {reviews?.map(({ author, content, id }) => (
            <li key={id} className={css.item}>
              <h3 className={css.name}>
                <span className={css.span}>Author: </span>
                {author}
              </h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Reviews;
