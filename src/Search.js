import React, { useContext, useState } from "react";
import "./App.css";
import { FiSearch } from "react-icons/fi";
import {AiOutlineGlobal} from 'react-icons/ai'
import Blogcontext from "./Blogcontext";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { search, setSearch } = useContext(Blogcontext);
  const {t,i18n} = useTranslation()
  const changelanguage = () => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en');
  return (
    <div className="container search-box">
      <FiSearch className="search-icon" />
      <AiOutlineGlobal className="globe-icon" onClick={changelanguage}/>
      <input
        type="text"
        placeholder={t("search")}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
