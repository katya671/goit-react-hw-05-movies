import React, { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from '../../api/api';
import styled from 'styled-components';
import Loader from 'components/Loader/Loader';
import css from './MovieDetails.module.css';
import MovieInfo from 'components/MovieInfo/MovieInfo';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: var(--accent);
  }
`;

const MovieDetails = props => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const apiMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    apiMovieDetails();
  }, [movieId]);
  return (
    <>
      <Link to={backLinkHref.current} className={css.backBtn}>
        <span className={css.arrowSymbol}>&larr;</span>Go Back
      </Link>

      {isLoading && <Loader />}

      {movie && !isLoading && (
        <>
          <MovieInfo movie={movie} />

          <div className={css.additionalInfo}>
            <h2 className={css.title}>Additional Information</h2>
            <div className={css.buttonContainer}>
              <StyledLink to="cast" className={css.button}>
                Cast
              </StyledLink>
              <StyledLink to="reviews" className={css.button}>
                Reviews
              </StyledLink>
            </div>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
