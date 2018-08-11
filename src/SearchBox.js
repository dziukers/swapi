import React from "react";
import FilterOptions from "./FilterOptions";

const SearchBox = ({ onInput, onClick, onChange }) => {
  return (
    <div className='searchSettings'>
      <div className='searchContainer'>
        <button className='sortButton' onClick={onClick}><i className="fas fa-sort-alpha-down"></i></button>
        <FilterOptions onChange={onChange}/>
      </div>
      <label for="inp" class="inp">
      <input
        className='searchInput'
        type="search"
        placeholder="Search character"
        onChange={onInput}>
      </input>
      <span className='border'> </span>
      </label>
    </div>
  );
};

export default SearchBox;
