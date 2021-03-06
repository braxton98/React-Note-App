import React from "react";
import { MdSearch } from "react-icons/md";
import "./Note.css";
const Search = ({ handleSearch }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em"></MdSearch>
      <input
        onChange={(event) => {
          handleSearch(event.target.value);
        }}
        type="text"
        placeholder="type to search"
      ></input>
    </div>
  );
};

export default Search;
