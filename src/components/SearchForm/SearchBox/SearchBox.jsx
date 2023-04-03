import { useState } from 'react';
import { toast } from 'react-toastify';
import css from './SearchBox.module.css';
import PropTypes from 'prop-types';

export const SearchBox = ({ onSubmitInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setInputValue(value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();

    if (inputValue.trim() === '') {
      toast.error('Please write something!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
      return;
    }

    onSubmitInput(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={css.form}>
      <input
        type="text"
        placeholder="Search films"
        value={inputValue}
        autoFocus
        onChange={handleChange}
        autoComplete="off"
        className={css.input}
      />
    </form>
  );
};

SearchBox.propTypes = {
  onSubmitInput: PropTypes.func.isRequired,
};
