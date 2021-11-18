import React from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import findIcon from '../../images/search-icon.png'

function SearchForm() {
  return (
    <section className="search">
      <div className="search__container">
        <form className="search__form">
          <div className="search__wrap">
            <input placeholder="Фильм" className="search__input" required/>
            <button type="submit" className="search__submit" />
          </div>
          <FilterCheckbox filterText="Короткометражки" />
        </form>
      </div>
    </section>
  );
}

export default SearchForm;