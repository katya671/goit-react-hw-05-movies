import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTrending } from '../api/api';
import Loader from 'components/Loader/Loader';
import css from './Home.module.css';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const apiTrending = async () => {
      try {
        setIsLoading(true);
        const { results } = await getTrending();
        setTrending(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    apiTrending();
  }, []);

  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
      {!isLoading && <MovieList movies={trending} />}
      {isLoading && <Loader />}
    </main>
  );
};

Home.propTypes = {};

export default Home;
