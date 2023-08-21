import React from 'react';
import PropTypes from 'prop-types';
import css from './SearchForm.module.css';

const SearchForm = ({ searchQuery, setSearchParams }) => {
  const handleChange = e => {
    const newSearchQuery = e.target.value;

    if (newSearchQuery.trim() !== '') {
      setSearchParams({ search: newSearchQuery });
    } else {
      setSearchParams({});
    }
  };

  return (
    <form className={css.searchform} role="search">
      <input
        className={css.searchinput}
        type="search"
        placeholder="Search movies"
        value={searchQuery}
        onChange={handleChange}
      />
    </form>
  );
};

SearchForm.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default SearchForm;
