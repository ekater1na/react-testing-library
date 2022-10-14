import React, { useState } from "react";

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search">{children}</label>
    <input
      id="search"
      type="text"
      placeholder="search text"
      value={value}
      onChange={onChange}
    />
  </div>
);

const SearchApp = () => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      <img src="" alt="sun"></img>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default SearchApp;