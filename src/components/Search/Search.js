import React from "react";
import "./Search.css";
import { GoSearch } from "react-icons/go";
const Search = () => {
  return (
    <div className="outer-search-box">
      <div className="inner-search-box">
        <div className="search-box">
          <input type="search" placeholder="search..." />
          <GoSearch />
        </div>
        <div>
          <button className="add-btn">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
