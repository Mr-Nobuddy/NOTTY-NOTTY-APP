import React, { useContext, useState } from "react";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import Blogcontext from "./Blogcontext";

const Search = () => {
  const { search, setSearch } = useContext(Blogcontext);
  return (
    <div className="container search-box">
      <FiSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
