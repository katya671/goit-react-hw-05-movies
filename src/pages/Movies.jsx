import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from './Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import { getMovies } from 'api/api';
import Loader from 'components/Loader/Loader';
import MovieList from './../components/MovieList/MovieList';
import SearchForm from './../components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const apiMovies = async () => {
      try {
        setIsLoading(true);
        const { results } = await getMovies(searchQuery);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    apiMovies();
    console.log(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <SearchForm searchQuery={searchQuery} setSearchParams={setSearchParams} />

      <MovieList movies={movies} />

      {isLoading && <Loader />}
    </>
  );
};

Movies.propTypes = {};

export default Movies;
