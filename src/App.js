import React from "react";
import SearchApp from "./components/Search/Search";
import SearchCriteria from "./components/SearchCriteria/SearchCriteria";

const App = () => {
  return (
    <div data-testid="app">
      <SearchApp />
      <SearchCriteria />
    </div>
  );
};

export default App;
