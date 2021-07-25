import { useState } from 'react';
// import { toast } from 'react-toastify';
import s from './SearchBar.module.css';
// import PropTypes from 'prop-types';

export default function SearchBar({ onSubmit }) {
  const [name, setName] = useState('');

  const handleNameChange = e => {
    setName(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim() === '') {
      //   toast.warn('Enter valid name,please!');
      return;
    }
    onSubmit(name);
    setName('');
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}></span>
        </button>

        <input
          onChange={handleNameChange}
          className={s.SearchFormInput}
          type="text"
          value={name}
          placeholder="Search Movies"
        />
      </form>
    </header>
  );
}

// SearchBar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
