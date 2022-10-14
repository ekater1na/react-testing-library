import React, { useEffect, useState } from "react";

const getUser = () => Promise.resolve({ id: 1, name: "Katia" });

const Search = ({ value, onChange, children }) => (
  <div>
    <label htmlFor="search2">{children}</label>
    <input
      id="search2"
      type="text2"
      placeholder="search text2"
      value={value}
      onChange={onChange}
      required
    />
  </div>
);

const SearchCriteria = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      const user = await getUser();
      setUser(user);
    };

    loadUser();
  }, []);

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };

  return (
    <div>
      {user && <h2>Logged in as {user.name}</h2>}
      <img src="" className="image" alt="sun"></img>
      <Search value={search} onChange={handleChange}>
        Search:
      </Search>
      <p>Searches for {search ? search : "..."}</p>
    </div>
  );
};

export default SearchCriteria;
