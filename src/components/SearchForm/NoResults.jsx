import css from '../SearchForm/SearchBox/SearchBox.module.css';
import PropTypes from 'prop-types';

export const NoResults = ({ search }) => {
  return (
    <p className={css.noResMess}>
      We didn't find any movies with this title: '{search}'
    </p>
  );
};

NoResults.propType = {
  search: PropTypes.string.isRequired,
};
